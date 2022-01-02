import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import {title} from 'case'
import UserForm from "../components/user-form";
import {useRef, useState} from "react";
import handleUserDataChange from "../utils/parseUserForm";
import {createUser} from "../mock/data";

const New = () => {
    const [state, setState] = useState<string | null>(null)
    const formRef = useRef(null)

    const handleOnClick = async () => {
        const formData = handleUserDataChange(formRef)
        try {
            await createUser(formData)
            setState(`User ${title(`${formData.firstName} ${formData.lastName}`)} created!`)

            // @ts-ignore
            formRef.current.reset()
        } catch (e) {
            setState(e as string)
        }

    }

    return <Container>
        <Row>
            <Col>
                {
                    state && <Alert variant={'info'}>
                        {state}
                    </Alert>
                }
                <UserForm user={null} reference={formRef} />
                <Button onClick={handleOnClick}>Create User</Button>
            </Col>
        </Row>
    </Container>
}

export default New;