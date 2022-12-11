// Original file: ../protos/com/language.proto


// Original file: ../protos/com/language.proto

export const _com_Language_Code = {
  CODE_UNSPECIFIED: 0,
  CODE_EN: 1,
  CODE_FA: 2,
} as const;

export type _com_Language_Code =
  | 'CODE_UNSPECIFIED'
  | 0
  | 'CODE_EN'
  | 1
  | 'CODE_FA'
  | 2

export type _com_Language_Code__Output = typeof _com_Language_Code[keyof typeof _com_Language_Code]

export interface Language {
}

export interface Language__Output {
}
