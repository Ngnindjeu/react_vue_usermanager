import {MutableRefObject} from "react";

export type UserData = {
    firstName: string,
    lastName: string,
    description: string
}

const handleUserDataChange = (ref: MutableRefObject<any>): UserData & { errors: string[] } => {
    const formData = new FormData(ref.current as any)

    const errors: string[] = []
    const getFormData = (data: string): string => {
        const res = formData.get(data)
        if (!res) {
            errors.push(`${data} cannot be empty`)
            return ''
        }
        return res as string
    }

    const firstName = getFormData('firstName')
    const lastName = getFormData('lastName')
    const description = getFormData('description')

    return {
        errors,
        firstName,
        lastName,
        description
    }
}

export default handleUserDataChange