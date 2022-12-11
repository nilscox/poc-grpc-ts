import { resolve } from 'path';

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

export const loadProto = async <ProtoGrpcType>(path: string) => {
  const packageDefinition = await protoLoader.load(path, {
    includeDirs: [resolve(__dirname, '..', '..', '..', 'protos')],
    keepCase: true,
    defaults: true,
  });

  return grpc.loadPackageDefinition(packageDefinition) as ProtoGrpcType;
};
