export class User {
    static counter = 1;
    public id: number;
    public firstName: string;
    public lastName: string;
    public description: string;
    public date: Date;

    constructor(firstName: string, lastName: string, description: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.date = new Date();
        this.id = User.counter++;
    }
}
