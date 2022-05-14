import { Router } from "express";
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/authenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();

const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post("/client/auth", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/auth", authenticateDeliverymanController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);

export { routes };
