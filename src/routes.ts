import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();

routes.post("/client/auth", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);

export { routes };
