import { Request, Response } from 'express'
import { database } from "../db/database"

export class UsersController {
   criarUsuario(req:Request,res:Response): Response{
      const { name } = req.body
   
      if(name.length < 1){
         return res.status(403).json({mensagem: 'Não é possivel criar usuários sem nome'})
      }

      database.push(name)
      return res.status(201).json({'mensagem': `Usuario ${name} criado`})
   }

   listUsuario(req:Request,res:Response): Response {
      return res.status(200).json(database)
   }
}

