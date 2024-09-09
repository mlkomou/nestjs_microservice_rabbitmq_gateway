import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { OrdersModule } from './orders/orders.module';
import { PrometheusModule } from "@willsoto/nestjs-prometheus";

@Module({
  imports: [
    OrdersModule,
    PrometheusModule.register()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
