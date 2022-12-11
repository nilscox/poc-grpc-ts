// Original file: ../protos/services/hello_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GreetRequest as _services_GreetRequest, GreetRequest__Output as _services_GreetRequest__Output } from '../services/GreetRequest';
import type { GreetResponse as _services_GreetResponse, GreetResponse__Output as _services_GreetResponse__Output } from '../services/GreetResponse';

export interface HelloServiceClient extends grpc.Client {
  Greet(argument: _services_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GreetResponse__Output>): grpc.ClientUnaryCall;
  Greet(argument: _services_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_GreetResponse__Output>): grpc.ClientUnaryCall;
  Greet(argument: _services_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GreetResponse__Output>): grpc.ClientUnaryCall;
  Greet(argument: _services_GreetRequest, callback: grpc.requestCallback<_services_GreetResponse__Output>): grpc.ClientUnaryCall;
  greet(argument: _services_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GreetResponse__Output>): grpc.ClientUnaryCall;
  greet(argument: _services_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_GreetResponse__Output>): grpc.ClientUnaryCall;
  greet(argument: _services_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_services_GreetResponse__Output>): grpc.ClientUnaryCall;
  greet(argument: _services_GreetRequest, callback: grpc.requestCallback<_services_GreetResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface HelloServiceHandlers extends grpc.UntypedServiceImplementation {
  Greet: grpc.handleUnaryCall<_services_GreetRequest__Output, _services_GreetResponse>;
  
}

export interface HelloServiceDefinition extends grpc.ServiceDefinition {
  Greet: MethodDefinition<_services_GreetRequest, _services_GreetResponse, _services_GreetRequest__Output, _services_GreetResponse__Output>
}
