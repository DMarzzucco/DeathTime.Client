import { Router } from "express";
import { verifyTime } from "../middleware/db.middleware";
import UserControllers from "../controllers/user.controller";
import UserService from "../service/users.service";

const UserRoutes = Router()
const Service = new UserService()
const Controller = new UserControllers(Service)

UserRoutes.get('/users',verifyTime, Controller.getRegister.bind(Controller));
UserRoutes.get("/users/:id",verifyTime, Controller.getByid.bind(Controller))
UserRoutes.post('/users', verifyTime, Controller.postRegister.bind(Controller));
UserRoutes.put('/users/:id',verifyTime, Controller.updateRegister.bind(Controller));
UserRoutes.delete('/users/:id', verifyTime, Controller.deleteRegister.bind(Controller))

export default UserRoutes;