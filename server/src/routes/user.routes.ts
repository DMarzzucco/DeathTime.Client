import { Router } from "express";
import { verifyTime } from "../middleware/db.middleware";
import UserControllers from "../controllers/user.controller";

const UserRoutes = Router()
const Controller = new UserControllers()

UserRoutes.get('/users', Controller.getRegister);
UserRoutes.post('/users', verifyTime, Controller.postRegister);
UserRoutes.delete('/users/:id', verifyTime, Controller.deleteRegister)
UserRoutes.put('/users/:id', Controller.updateRegister);

export default UserRoutes;