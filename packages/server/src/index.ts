import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { _com_Language_Code } from 'generated/com/Language';
import { ProtoGrpcType } from 'generated/hello_service';
import { GreetResponse } from 'generated/services/GreetResponse';
import { HelloServiceHandlers } from 'generated/services/HelloService';

const packageDefinition = protoLoader.loadSync('services/hello_service.proto', {
  includeDirs: ['/home/nils/dev/test-grpc-ts/packages/protos'],
  keepCase: true,
  defaults: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const server = new grpc.Server();

const helloServiceHandler: HelloServiceHandlers = {
  Greet(call, callback) {
    const response: GreetResponse = { greeting: undefined };

    switch (call.request.language_code) {
      case _com_Language_Code.CODE_FA:
        response.greeting = `سلام، ${call.request.name}`;
        break;
      case _com_Language_Code.CODE_UNSPECIFIED:
      case _com_Language_Code.CODE_EN:
      default:
        response.greeting = `Hello, ${call.request.name}`;
    }

    callback(null, response);
  },
};

const { HelloService } = protoDescriptor.services;

server.addService(HelloService.service, helloServiceHandler);

server.bindAsync('0.0.0.0:4000', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log('server is running on 0.0.0.0:4000');
});
