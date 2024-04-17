/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JqlQueryClauseOperand } from './JqlQueryClauseOperand';
import type { JqlQueryField } from './JqlQueryField';
/**
 * A clause that asserts the current value of a field. For example, `summary ~ test`.
 */
export type FieldValueClause = {
  field: JqlQueryField;
  operand: JqlQueryClauseOperand;
  /**
   * The operator between the field and operand.
   */
  operator: '=' | '!=' | '>' | '<' | '>=' | '<=' | 'in' | 'not in' | '~' | '~=' | 'is' | 'is not';
};

