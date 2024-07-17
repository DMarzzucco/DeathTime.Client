import { Router } from "express";
import { deleteRegister, getRegister, postRegister, updateRegister } from "../controllers/user.controllers";
import { verifyTime } from "../middleware/middleware";

const UserRoutes = Router()

UserRoutes.get('/users', getRegister);
UserRoutes.post('/users', verifyTime, postRegister);
UserRoutes.delete('/users/:id', verifyTime, deleteRegister)
UserRoutes.put('/users/:id', updateRegister);

export default UserRoutes;