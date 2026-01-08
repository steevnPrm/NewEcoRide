export interface IPasswordManagement{
    hash(password: string ) : Promise<string>
}
