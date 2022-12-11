// Original file: ../protos/services/hello_service.proto

import type { _com_Language_Code, _com_Language_Code__Output } from '../com/Language';

export interface GreetRequest {
  'name'?: (string);
  'language_code'?: (_com_Language_Code);
}

export interface GreetRequest__Output {
  'name': (string);
  'language_code': (_com_Language_Code__Output);
}
