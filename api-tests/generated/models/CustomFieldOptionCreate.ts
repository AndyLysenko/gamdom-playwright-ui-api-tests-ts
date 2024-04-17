/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details of a custom field option to create.
 */
export type CustomFieldOptionCreate = {
  /**
   * Whether the option is disabled.
   */
  disabled?: boolean;
  /**
   * For cascading options, the ID of the custom field object containing the cascading option.
   */
  optionId?: string;
  /**
   * The value of the custom field option.
   */
  value: string;
};

