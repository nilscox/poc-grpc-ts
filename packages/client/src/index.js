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

const { HelloService } = protoDescriptor.services;

const service = new HelloService('localhost:4000', grpc.credentials.createInsecure());

service.greet({ name: 'vio', language_code: 'CODE_FA' }, (error, response) => {
  console.log({ response });
});
