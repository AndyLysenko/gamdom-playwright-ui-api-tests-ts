/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JqlQueryUnitaryOperand } from './JqlQueryUnitaryOperand';
/**
 * An operand that is a list of values.
 */
export type ListOperand = {
  /**
   * Encoded operand, which can be used directly in a JQL query.
   */
  encodedOperand?: string;
  /**
   * The list of operand values.
   */
  values: Array<JqlQueryUnitaryOperand>;
};

