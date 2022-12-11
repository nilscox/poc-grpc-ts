import { promisify } from 'util';

import * as grpc from '@grpc/grpc-js';

import { loadProto } from 'common';

import { _com_Language_Code } from 'generated/com/Language';
import { ProtoGrpcType } from 'generated/hello_service';

const LanguageCode = _com_Language_Code;

async function main() {
  const proto = await loadProto<ProtoGrpcType>('services/hello_service.proto');
  const { HelloService } = proto.services;

  const service = new HelloService('localhost:4000', grpc.credentials.createInsecure());

  const greet = promisify(service.greet.bind(service));

  const response = await greet({ name: 'vio', language_code: LanguageCode.CODE_EN });
  console.log(response?.greeting);
}

main().catch(console.error);
