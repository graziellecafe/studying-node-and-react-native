// QUEM TRABALHA COM A LÓGICA DE NEGÓCIOS, CONTROLA TANTO CONTROLER QUANDO BANCO DE DADOS

import  UserRepository  from "../repositories/user.repository.js"; 

class CreateUserService {
  execute(data) {
    // Chamar o repositório e fazer as validações 

    /* 
      username
      name
      id
    */ 

      if (!data.username) { 
        throw new Error("Username é obrigatório");
      }

      // Verificar se o username existe no banco de dados
      const userRepository = UserRepository; 
      const existUser = userRepository.findByUsername(data.username); 

      if(existUser) { 
        throw new Error ("Usuário já cadastrado"); 
      }

      // Salvar o usuário
      return userRepository.save(data); 

  }
}

export { CreateUserService };