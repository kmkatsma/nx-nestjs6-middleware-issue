import {
  Module,
  Injectable,
  NestMiddleware,
  MiddlewareConsumer,
  RequestMethod
} from '@nestjs/common';
import { AppController, AppController2 } from './app.controller';
import { AppService } from './app.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...');
    next();
  }
}

@Module({
  imports: [],
  controllers: [AppController, AppController2],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.GET
    });
  }
}
