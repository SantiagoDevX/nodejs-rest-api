export class UserService {
  public getAllUsers() {}

  public getUserById(id: number) {
    return id;
  }

  public createUser(userData: any) {
    // Logic to create a new user
  }
}
/*
las arrow function pueden heredar el contexto this del cual se crean
las functions normales hacen referencia a this dependiendo de donde se ejecutan
 */
