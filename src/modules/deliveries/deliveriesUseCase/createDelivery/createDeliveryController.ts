import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const { item_name } = request.body;
    const { id_client } = request;

    const delivery = await createDeliveryUseCase.execute({
      item_name,
      id_client,
    });

    return response.json(delivery);
  }
}
