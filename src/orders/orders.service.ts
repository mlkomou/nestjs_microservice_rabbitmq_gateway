import { Inject, Injectable } from "@nestjs/common";
import { OrderDto } from "./order.dto";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class OrdersService {
  constructor(@Inject('ORDERS_SERVICE') private rabbitClient: ClientProxy) {
  }
  placeOrder(order: OrderDto) {
    this.rabbitClient.emit('order-places', order);
    return {message: "Order placed"};
  }

  async getOrders() {
    return await this.rabbitClient.send({cmd: 'get-orders'},{}).toPromise();
  }
}
