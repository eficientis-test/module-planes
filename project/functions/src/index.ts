import * as functions from 'firebase-functions/v1';
import { Kernel } from '@eficientis-test/core/Kernel';
import { GraphQLServer } from '@eficientis-test/core/GraphQLServer';

const kernel = new Kernel();

const initServer = async () => {
  await kernel.initialize();
  const resolvers = kernel.getResolvers();
  if (resolvers.length === 0) throw new Error('❌ No hay resolvers disponibles.');
  console.log(`✅ Resolvers cargados: ${resolvers.length}`);
  const server = new GraphQLServer(kernel);
  await server.start();
  console.log('✅ Servidor GraphQL listo');
  return server;
};

exports.backend = functions.region('us-central1').https.onRequest(async (req, res) => {
  try {
  const server = await initServer();
  const app = server.serve();
  if (req.url.startsWith('/graphql')) return app(req, res);
  res.status(404).send('NOT FOUND');
  } catch (error) {
  console.error('❌ Error en la solicitud:', error);
  res.status(500).send('Internal Server Error');
  }
});
  