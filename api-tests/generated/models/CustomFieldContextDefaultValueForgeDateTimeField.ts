/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * The default value for a Forge date time custom field.
 */
export type CustomFieldContextDefaultValueForgeDateTimeField = {
  /**
   * The ID of the context.
   */
  contextId: string;
  /**
   * The default date-time in ISO format. Ignored if `useCurrent` is true.
   */
  dateTime?: string;
  type: 'forge.datetime';
  /**
   * Whether to use the current date.
   */
  useCurrent?: boolean;
};

