import {FormEvent, MutableRefObject, useRef, useState} from 'react'
import {User} from "../model/User";
import {Alert, Button, Form} from "react-bootstrap";
import {camel, title} from "case"

type Props = {
    user: User | null,
    reference: MutableRefObject<any>
}

const CustomFormGroup = ({label, type, value, as}: any) => {
    return <Form.Group className={"mb-3"} controlId={camel(label)}>
        <Form.Label>{title(label)}</Form.Label>
        <Form.Control as={type === 'textarea' ? 'textarea' : 'input'} required name={camel(label)} type={type} defaultValue={value} />
    </Form.Group>
}

const UserForm = ({user, reference}: Props) => {
    return <>
        <Form ref={reference}>
            <CustomFormGroup value={user?.firstName} label={"firstName"} type={"text"} />
            <CustomFormGroup value={user?.lastName} label={"lastName"} type={"text"} />
            <CustomFormGroup value={user?.description} label={"description"} type={"textarea"} />
        </Form>
    </>
}

export default UserForm