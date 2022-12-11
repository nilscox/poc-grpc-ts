import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { HelloServiceClient as _services_HelloServiceClient, HelloServiceDefinition as _services_HelloServiceDefinition } from './services/HelloService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  com: {
    Language: MessageTypeDefinition
  }
  services: {
    GreetRequest: MessageTypeDefinition
    GreetResponse: MessageTypeDefinition
    HelloService: SubtypeConstructor<typeof grpc.Client, _services_HelloServiceClient> & { service: _services_HelloServiceDefinition }
  }
}

