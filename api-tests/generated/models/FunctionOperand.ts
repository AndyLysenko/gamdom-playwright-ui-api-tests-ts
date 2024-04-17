/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * An operand that is a function. See [Advanced searching - functions reference](https://confluence.atlassian.com/x/dwiiLQ) for more information about JQL functions.
 */
export type FunctionOperand = {
  /**
   * The list of function arguments.
   */
  arguments: Array<string>;
  /**
   * Encoded operand, which can be used directly in a JQL query.
   */
  encodedOperand?: string;
  /**
   * The name of the function.
   */
  function: string;
};

