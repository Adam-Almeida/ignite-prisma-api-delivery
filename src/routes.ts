import { Router } from "express";
import { ensureAuthenticateClient } from "./middleware/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middleware/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/authenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/authenticateDeliverymanController";
import { FindAllDeliveriesClientController } from "./modules/clients/deliveries/findAllDeliveriesClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/createDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/findAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/findAllAvailable/updateDeliveryman/updateDeliverymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/updateEndDateController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/deliveries/findAllDeliveriesDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/createDeliverymanController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailable = new FindAllAvailableController();
const updateDeliveryman = new UpdateDeliverymanController();
const findAllDeliveriesClient = new FindAllDeliveriesClientController();
const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanController();
const updateEndDate = new UpdateEndDateController();

routes.post("/client/auth", authenticateClientController.handle);
routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/auth", authenticateDeliverymanController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post(
  "/delivery",
  ensureAuthenticateClient,
  createDeliveryController.handle
);
routes.get(
  "/delivery/available",
  ensureAuthenticateDeliveryman,
  findAllAvailable.handle
);
routes.put(
  "/delivery/deliveryman/:id",
  ensureAuthenticateDeliveryman,
  updateDeliveryman.handle
);
routes.get("/client/deliveries",ensureAuthenticateClient, findAllDeliveriesClient.handle);
routes.get("/deliveryman/deliveries",ensureAuthenticateDeliveryman, findAllDeliveriesDeliveryman.handle);
routes.put("/delivery/end-status/:id", ensureAuthenticateDeliveryman, updateEndDate.handle);

export { routes };
