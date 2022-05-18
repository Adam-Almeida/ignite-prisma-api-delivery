import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./updateDeliverymanUseCase";

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_deliveries } = request.params;

    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();
    const result = await updateDeliverymanUseCase.execute({
      id_deliveries,
      id_deliveryman,
    });

    response.json(result);
  }
}
