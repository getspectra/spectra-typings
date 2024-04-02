export type NumberOperation = '=' | '!=' | '<>' | '>' | '>=' | '<' | '<=';

export type ArrayOperation = 'in' | 'nin' | 'not_in';

export type Operation = NumberOperation | ArrayOperation;

export type FieldName = `${string}.${string}`;

export type FieldValue = ArgumentValue | ArgumentRef;

export type ArgumentValue = string | boolean | number | Date | null;

export type ArgumentRef = { type: 'field'; ref: FieldName };

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
