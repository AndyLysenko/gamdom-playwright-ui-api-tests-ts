/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Jql function precomputation.
 */
export type JqlFunctionPrecomputationBean = {
  /**
   * The list of arguments function was invoked with.
   */
  readonly arguments?: Array<string>;
  /**
   * The timestamp of the precomputation creation.
   */
  readonly created?: string;
  /**
   * The error message to be displayed to the user.
   */
  readonly error?: string;
  /**
   * The field the function was executed against.
   */
  readonly field?: string;
  /**
   * The function key.
   */
  readonly functionKey?: string;
  /**
   * The name of the function.
   */
  readonly functionName?: string;
  /**
   * The id of the precomputation.
   */
  readonly id?: string;
  /**
   * The operator in context of which function was executed.
   */
  readonly operator?: string;
  /**
   * The timestamp of the precomputation last update.
   */
  readonly updated?: string;
  /**
   * The timestamp of the precomputation last usage.
   */
  readonly used?: string;
  /**
   * The JQL fragment stored as the precomputation.
   */
  readonly value?: string;
};

