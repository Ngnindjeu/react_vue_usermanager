import {Button, ButtonGroup, Col, Container, Modal, Row, Table} from "react-bootstrap";
import {deleteUser, editUser, generateData, getData} from "../mock/data";
import {useEffect, useRef, useState} from "react";
import {User} from "../model/User";
import UserForm from "../components/user-form";
import handleUserDataChange from "../utils/parseUserForm";

const List = () => {
    const [users, setUsers] = useState<User[]>([])
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const editFormRef = useRef(null)
    const [currentSelectedUser, setCurrentSelectedUser] = useState<User | null>(null)

    useEffect(() => {
        async function fetchData() {
            const data = await getData()
            setUsers(data)
        }
        fetchData()
    }, [])

    const handleSaveUser = async () => {
        if (!currentSelectedUser || !currentSelectedUser.id) {
            return
        }

        const formData = handleUserDataChange(editFormRef)
        await editUser(currentSelectedUser.id, formData)
        const newData = await getData()
        setIsModalVisible(false)
        setUsers(newData)
    }

    const handleDeleteUser = async (id: number) => {
        await deleteUser(id)
        const newData = await getData()
        setUsers([...newData])
    }

    return <>
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Description</th>
                            <th>Creation Time</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map(user => {
                                return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.description}</td>
                                    <td>{user.date.toLocaleString('en-us', {
                                        dateStyle: 'medium',
                                        timeStyle: 'short'
                                    })}</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button size={'sm'} variant={"dark"} onClick={() => {
                                                setCurrentSelectedUser(user)
                                                setIsModalVisible(true)
                                            }}>Edit</Button>
                                            <Button size={'sm'} variant={"dark"} onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>

        <Modal show={isModalVisible} onHide={() => setIsModalVisible(false)}>
            <Modal.Header>User</Modal.Header>
            <Modal.Body>
                <UserForm user={currentSelectedUser} reference={editFormRef}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"secondary"} onClick={() => setIsModalVisible(false)}>
                    Close
                </Button>
                <Button variant={"primary"} onClick={handleSaveUser}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default List;