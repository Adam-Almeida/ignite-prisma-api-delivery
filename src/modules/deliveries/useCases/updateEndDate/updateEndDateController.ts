import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./updateEndDateUseCase";

export class UpdateEndDateController{
  async handle (request: Request, response: Response){
    const updateEndDateUseCase = new UpdateEndDateUseCase();
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const delivery = await updateEndDateUseCase.execute({
      id_delivery, id_deliveryman
    });

    return response.json(delivery);
  }
}