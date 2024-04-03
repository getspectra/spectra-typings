export type NumberOperation = '=' | '!=' | '<>' | '>' | '>=' | '<' | '<=';

export type ArrayOperation = 'in' | 'nin' | 'not_in';

export type Operation = NumberOperation | ArrayOperation;

export type FieldName = string;

export type RefValue = { ref: FieldName };

export type Value = string | boolean | number | Date | null | Array<any>;

export type FieldValue = Value | RefValue;

export type ExpressionDefinition =
  | BinaryExpressionDefinition
  | OrExpressionDefinition
  | AndExpressionDefinition
  | NotExpressionDefinition;

export type BinaryExpressionDefinition = [FieldName, Operation, FieldValue];

export type OrExpressionDefinition = {
  or: Array<ExpressionDefinition>;
};

export type AndExpressionDefinition = {
  and: Array<ExpressionDefinition>;
};

export type NotExpressionDefinition = {
  not: ExpressionDefinition;
};
