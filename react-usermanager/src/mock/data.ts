import faker from "faker"
import {User} from "../model/User";
import {UserData} from "../utils/parseUserForm";

const users : User[] = []
const maxUsers: number = 15

export const generateData = async (): Promise<void> => {
    if (users.length > 0) {
        return
    }

    for (let i = 0; i < maxUsers; i++) {
        users.push(
            new User(
                faker.name.firstName(),
                faker.name.lastName(),
                faker.lorem.sentences(1)
            )
        )
    }
}

/**
 * generate mocked data for {maxUsers} amount users
 */
export const getData = async (): Promise<User[]> => {
    await generateData()
    return users;
}

export const createUser = async (user: UserData): Promise<User> => {
    const u = new User(user.firstName, user.lastName, user.description)
    users.push(u)
    return u
}

export const editUser = async (id: number, user: Partial<UserData>): Promise<User> => {
    const uid = users.findIndex(uf => uf.id === id)
    users[uid] = {
        ...users[uid],
        ...user
    }

    return users[uid]
}

export const deleteUser = async (id: number): Promise<void> => {
    const uid = users.findIndex(uf => uf.id === id)
    users.splice(uid, 1)
}