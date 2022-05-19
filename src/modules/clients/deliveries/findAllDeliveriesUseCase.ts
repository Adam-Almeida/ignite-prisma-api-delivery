import { prisma } from "../../../database/prismaClient";

interface IFindDeliveries {
    id_client: string;
}

export class FindAllDeliveriesUseCase {
    async execute({ id_client }: IFindDeliveries) {
        const deliveries = await prisma.clients.findMany({
            where: {
                id: id_client
            },
            select: {
                id: true,
                username: true,
                deliveries: {
                    select:{
                        item_name:true
                    }
                }
            },
        });

        return deliveries;
    }
}