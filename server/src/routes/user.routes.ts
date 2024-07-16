import { Router } from "express";
import { getRegister, postRegister } from "../controllers/user.controllers";

const UserRoutes = Router()

UserRoutes.get('/users', getRegister);
UserRoutes.post('/users', postRegister);
UserRoutes.delete('/')

export default UserRoutes;