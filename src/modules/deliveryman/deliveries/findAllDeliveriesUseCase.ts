import { prisma } from "../../../database/prismaClient";

interface IFindAllDeliveries{
  id_deliveryman: string;
}

export class FindAllDeliveriesUseCase{
  async execute({id_deliveryman}:IFindAllDeliveries){
      const deliveries = await prisma.deliveryman.findMany({
        where:{
          id: id_deliveryman
        },
        select:{
          id: true,
          username: true,
          deliveries:{
            select:{
              id:true,
              id_client: true,
              item_name:true,
              end_at: true
            }
          },
        }
      });
      return deliveries;
  }
}