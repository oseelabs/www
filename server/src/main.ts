import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ExpressAdapter } from '@nestjs/platform-express';
// import * as express from 'express';

// async function bootstrap() {
//   const server = express();
//   const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
//   await app.init(); // Initialize without starting a standalone server
//   return server;
// }

// // Export the server instance as the handler for Vercel
// export default bootstrap();

