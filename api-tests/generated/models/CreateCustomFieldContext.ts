/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * The details of a created custom field context.
 */
export type CreateCustomFieldContext = {
  /**
   * The description of the context.
   */
  description?: string;
  /**
   * The ID of the context.
   */
  readonly id?: string;
  /**
   * The list of issue types IDs for the context. If the list is empty, the context refers to all issue types.
   */
  issueTypeIds?: Array<string>;
  /**
   * The name of the context.
   */
  name: string;
  /**
   * The list of project IDs associated with the context. If the list is empty, the context is global.
   */
  projectIds?: Array<string>;
};

