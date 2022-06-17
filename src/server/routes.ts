import { Router } from "express";

import { UsersController } from "../controllers/UserControllers";

const routes = Router()
const usersController = new UsersController()


routes.get('/users', usersController.listUsuario )
routes.post('/users', usersController.criarUsuario )


export { routes }