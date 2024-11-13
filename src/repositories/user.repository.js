class UserRepository {
  users = []; 

  // Verifica se o usuário existe
  // SELECT * FROM USERS WHERE USERNAME = ''LIMIT 1 
  findByUsername(username) {
    const userExists = this.users.find((user) => user.username == username); 
  }


  save (user) { 
    // INSERT INTO USERS (USERNAME, NAME) VALUES ('', '')
    const id = Math.random().toString(); 
    const userWithId = { 
      ...user, 
      id
    }
    this.users.push(userWithId); 
    return userWithId; 
  }
};

export default new UserRepository();
