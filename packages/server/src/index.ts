import * as grpc from '@grpc/grpc-js';

import { loadProto } from 'common';

import { _com_Language_Code } from 'generated/com/Language';
import { ProtoGrpcType } from 'generated/hello_service';
import { GreetResponse } from 'generated/services/GreetResponse';
import { HelloServiceHandlers } from 'generated/services/HelloService';

const LanguageCode = _com_Language_Code;

const helloServiceHandler: HelloServiceHandlers = {
  Greet(call, callback) {
    const response: GreetResponse = { greeting: undefined };

    if (call.request.language_code === LanguageCode.CODE_FA) {
      response.greeting = `سلام، ${call.request.name}`;
    } else {
      response.greeting = `Hello, ${call.request.name}`;
    }

    callback(null, response);
  },
};

async function main() {
  const proto = await loadProto<ProtoGrpcType>('services/hello_service.proto');
  const HelloService = proto.services.HelloService;

  const server = new grpc.Server();

  server.addService(HelloService.service, helloServiceHandler);

  server.bindAsync('0.0.0.0:4000', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('server is running on 0.0.0.0:4000');
  });
}

main().catch(console.error);
