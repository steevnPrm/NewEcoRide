export class RegisterUserCommand{
    constructor(
        public readonly firstname : string,
        public readonly lastname : string,
        public readonly username : string,
        public readonly email : string,
        public readonly password : string,
    ){
        this.firstname = firstname
        this.lastname = lastname
        this.username = username
        this.email = email
        this.password = password
    }
}