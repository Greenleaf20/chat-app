export class UserDetails {
    username: string;
    firstname: string;
    lastname: string;
    password: string; // will add encryption later
    id: number


    constructor(
        username: string,
        firstname: string,
        lastname: string,
        password: string,
        id: number = -1
    ) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.id = id;
    }
}