import { Router } from "express";
import { ensureAuthenticateClient } from "./middleware/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middleware/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/authenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliveryController } from "./modules/deliveries/deliveriesUseCase/createDelivery/createDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/deliveriesUseCase/findAllAvailable/findAllAvailableController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailable = new FindAllAvailableController();

routes.post("/client/auth", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/auth", authenticateDeliverymanController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);
routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailable.handle )

export { routes };
