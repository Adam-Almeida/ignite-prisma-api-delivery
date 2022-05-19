import { prisma } from "../../../../../database/prismaClient";

interface IUpdateDeliveryman {
  id_deliveries: string;
  id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {
  async execute({ id_deliveries, id_deliveryman }: IUpdateDeliveryman) {
    const updateDeliveryman = await prisma.deliveries.update({
      where: {
        id: id_deliveries,
      },
      data: {
        id_deliveryman,
      },
    });

    return updateDeliveryman;
  }
}
