import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { _com_Language_Code } from 'generated/com/Language';
import { ProtoGrpcType } from 'generated/hello_service';

const packageDefinition = protoLoader.loadSync('services/hello_service.proto', {
  includeDirs: ['/home/nils/dev/test-grpc-ts/packages/protos'],
  keepCase: true,
  defaults: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

const { HelloService } = protoDescriptor.services;

const service = new HelloService('localhost:4000', grpc.credentials.createInsecure());

service.greet({ name: 'vio', language_code: _com_Language_Code.CODE_FA }, (error, response) => {
  console.log(response?.greeting);
});
