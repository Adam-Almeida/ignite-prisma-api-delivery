import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./findAllDeliveriesUseCase";

export class FindAllDeliveriesClientController{
  async handle(request:Request, response:Response){
      const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();
      const { id_client } = request;
      const deliveries = await findAllDeliveriesUseCase.execute({id_client});
      return response.json(deliveries);
  }
}