import { Router } from "express";
import { verifyTime } from "../middleware/DeathTime.middleware";
import UserControllers from "../controllers/user.controller";
import UserService from "../service/users.service";

const UserRoutes = Router()
const Service = new UserService()
const Controller = new UserControllers(Service)

/**
 * @swagger
 * components:
 *  schemas:
 *      users_date:
 *          type: object
 *          properties:
 *              id:
 *                  type: number
 *                  description: Id auto-generated
 *              name:
 *                  type: string
 *                  description: User's Name
 *              age:
 *                  type: string
 *                  description: User's Age
 *              email:
 *                  type: string
 *                  description: User's email
 *              create_time:
 *                  type: string
 *                  format: date-time
 *                  description: Time when the user was created
 *              update_time:
 *                  type: string
 *                  format: date-time
 *                  description: Time when the users was last update
 *          required:
 *              - name
 *              - age 
 *              - email
 *          example:
 *              id: 1
 *              name: Alban Strazzi
 *              age: "25"
 *              email: Alban@gmail.com
 *      user_notFound:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *                  description: Error 404 not found
 *          example:
 *              message: User not found
 *      conflict:  
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *                  description: Error 409 conflict
 *          example:
 *              message: This name already exist    
 *  parameters:
 *      usersID:
 *          in: path 
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: Users ID
 */

/**
 * @swagger
 * tags:
 *  name: Get Users
 *  description: Get one or all users
 */
/**
 * @swagger
 * tags:
 *  name: Create
 *  description: Create a new users
 */
/**
 * @swagger
 * tags:
 *  name: Update
 *  description: Update a users
 */
/**
 * @swagger
 * tags:
 *  name: Delete
 *  description: Delete a users
 */

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Return all Users List
 *      tags: [Get Users]
 *      responses:
 *          200:
 *              description: list of users
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/users_date'
 *          500:
 *              description: Server error
 */
UserRoutes.get('/users', verifyTime, Controller.getRegister.bind(Controller));
/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: Search a user by ID
 *      tags: [Get Users]
 *      parameters:
 *          - $ref: '#/components/parameters/usersID'
 *      responses:
 *          200:
 *              description: User was found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/users_date'
 *          404:
 *              description: Users not Found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user_notFound'
 *          500:
 *              description: Server Error
 */
UserRoutes.get("/users/:id", verifyTime, Controller.getByid.bind(Controller))
/**
 * @swagger
 * /users:
 *  post:
 *      summary: Create a new Users
 *      tags: [Create]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/users_date'
 *      responses:
 *          201:
 *              description: User create 
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/users_date'
 *          409:
 *              descritpion: Conflict
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/conflict'
 *          500:
 *              description: Server Error
 */
UserRoutes.post('/users', verifyTime, Controller.postRegister.bind(Controller));
/**
 * @swagger
 * /users/{id}:
 *  put:
 *      summary: Update a user
 *      tags: [Update]
 *      parameters:
 *          - $ref: '#/components/parameters/usersID'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/users_date'
 *      responses:
 *          201:
 *              description: User was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/users_date'
 *          404:
 *              description: User not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user_notFound'
 *          500:
 *              description: Server Error
 */
UserRoutes.put('/users/:id', verifyTime, Controller.updateRegister.bind(Controller));
/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: Delete a user by ID
 *      tags: [Delete]
 *      parameters:
 *          - $ref: '#/components/parameters/usersID'
 *      responses:
 *          200:
 *              description: User was found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/users_date'
 *          404:
 *              description: Users not Found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user_notFound'
 *          500:
 *              description: Server Error
 */
UserRoutes.delete('/users/:id', verifyTime, Controller.deleteRegister.bind(Controller))

export default UserRoutes;