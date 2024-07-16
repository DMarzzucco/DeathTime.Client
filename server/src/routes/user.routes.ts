import { Router } from "express";
import { deleteAllRegister, getRegister, postRegister, updateRegister } from "../controllers/user.controllers";

const UserRoutes = Router()

UserRoutes.get('/users', getRegister);
UserRoutes.post('/users', postRegister);
UserRoutes.delete('/users', deleteAllRegister)
UserRoutes.put('/users/:id', updateRegister);

export default UserRoutes;