import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Film yang ditonton',
            version: '1.0.0',
            description: 'API sederhana dari Express untuk film-film yang pernah ditonton',
        },
    },
    apis: ['./app.js'], // Path ke file yang berisi anotasi Swagger
};

const specs = swaggerJsdoc(options);

export {
    specs,
    swaggerUi
}