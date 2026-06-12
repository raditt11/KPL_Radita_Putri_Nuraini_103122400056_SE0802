import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Menu Makanan API',
      version: '1.0.0',
      description: 'Dokumentasi API Menu Makanan',
    },
  },
  apis: ['./TP/index.js'],
};

const specs = swaggerJsdoc(options);

console.log(specs.paths); // tambahkan sementara untuk debugging

export { specs, swaggerUi };