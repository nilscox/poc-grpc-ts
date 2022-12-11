import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const packageDefinition = protoLoader.loadSync('services/hello_service.proto', {
  includeDirs: ['/home/nils/dev/test-grpc-ts/packages/protos'],
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const greet = (call, callback) => {
  const response = { greeting: undefined };

  switch (call.request.language_code) {
    case 'CODE_FA':
      response.greeting = `سلام، ${call.request.name}`;
      break;
    case 'CODE_UNSPECIFIED':
    case 'CODE_EN':
    default:
      response.greeting = `Hello, ${call.request.name}`;
  }

  callback(null, response);
};

const { HelloService } = protoDescriptor.services;

server.addService(HelloService.service, { Greet: greet });

server.bindAsync('0.0.0.0:4000', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log('server is running on 0.0.0.0:4000');
});
