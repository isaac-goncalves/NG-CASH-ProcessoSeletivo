import { Router } from "express";

import { UserController } from "./controllers/UsersControllers";

const routes = Router();

routes.post("/users", new UserController().create);

export default routes ;
