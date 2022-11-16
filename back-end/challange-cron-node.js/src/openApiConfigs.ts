import swaggerUi from 'swagger-ui-express';
import { OpenAPIV3 } from 'express-openapi-validator/dist/framework/types';
import { OpenApiValidator } from 'express-openapi-validator/dist/openapi.validator';
import apiSchema from './api.schema.json';
import routes from './routes';

const openApiConfigs  = () => {

    routes.use('/docs', swaggerUi.serve, swaggerUi.setup(apiSchema));
    new OpenApiValidator({
      apiSpec: apiSchema as OpenAPIV3.Document,
      validateRequests: true, //will be implemented in step2
      validateResponses: true, //will be implemented in step2
    });

}

export default openApiConfigs;