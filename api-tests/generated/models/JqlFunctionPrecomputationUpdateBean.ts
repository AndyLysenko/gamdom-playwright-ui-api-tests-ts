/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Precomputation id and its new value.
 */
export type JqlFunctionPrecomputationUpdateBean = {
  /**
   * The error message to be displayed to the user if the given function clause is no longer valid during recalculation of the precomputation.
   */
  error?: string;
  /**
   * The id of the precomputation to update.
   */
  id: string;
  /**
   * The new value of the precomputation.
   */
  value?: string;
};

