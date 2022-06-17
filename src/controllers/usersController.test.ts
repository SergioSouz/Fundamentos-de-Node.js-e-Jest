import { Request } from "express"
import { isReadable } from "stream"
import { makeMockResponse } from "../mocks/mockResponse"
import { UsersController } from "./UserControllers"

describe('Users Controller', () =>{
   const usersController = new UsersController
   const mockRequest = {} as Request
   const mockResponse = makeMockResponse()
   
   
   it('deve listar os nossos usuarios',()=>{
      usersController.listUsuario(mockRequest,mockResponse)

      expect(mockResponse.state.status).toBe(200)
      expect(mockResponse.state.json).toHaveLength(2)
   })

   it('deve criar um novo usuario', ()=>{
      mockRequest.body = {
         name: 'Maria'
      }

      usersController.criarUsuario(mockRequest,mockResponse)

      expect(mockResponse.state.status).toBe(201)
      expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuario Maria criado`}  )
   })


   it('nao deve criar um usuario com nome em branco',() => {
      mockRequest.body = {
         name: ''
      }

      usersController.criarUsuario(mockRequest,mockResponse)

      expect(mockResponse.state.status).toBe(403)
      expect(mockResponse.state.json).toMatchObject({mensagem: 'Não é possivel criar usuários sem nome'})
   })
})