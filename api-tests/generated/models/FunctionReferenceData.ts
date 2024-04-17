/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details of functions that can be used in advanced searches.
 */
export type FunctionReferenceData = {
  /**
   * The display name of the function.
   */
  displayName?: string;
  /**
   * Whether the function can take a list of arguments.
   */
  isList?: 'true' | 'false';
  /**
   * Whether the function supports both single and list value operators.
   */
  supportsListAndSingleValueOperators?: 'true' | 'false';
  /**
   * The data types returned by the function.
   */
  types?: Array<string>;
  /**
   * The function identifier.
   */
  value?: string;
};

