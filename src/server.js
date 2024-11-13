import express from "express"; 
import { UserController } from "./controllers/user.controller.js";

const app = express(); 
app.use(express.json()); 

const userController = new UserController();

// Chamar o nosso controlador que vai salvar o usuário
app.post("/users",userController.handle); 

app.listen(3003, () => console.log("Server is running on PORT 3033"));