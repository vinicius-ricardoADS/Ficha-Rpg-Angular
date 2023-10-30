import Fastify from 'fastify';
import cors from '@fastify/cors';
import { chipsRoutes } from './routes/chips';

const app = Fastify();

app.register(require('@fastify/formbody'));
app.register(cors, {
    origin: true,
});

app.register(chipsRoutes);

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on port http://localhost:3333')
  });