/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Information about the most recent use of a field.
 */
export type FieldLastUsed = {
  /**
   * Last used value type:
   *
   * *  *TRACKED*: field is tracked and a last used date is available.
   * *  *NOT\_TRACKED*: field is not tracked, last used date is not available.
   * *  *NO\_INFORMATION*: field is tracked, but no last used date is available.
   */
  type?: 'TRACKED' | 'NOT_TRACKED' | 'NO_INFORMATION';
  /**
   * The date when the value of the field last changed.
   */
  value?: string;
};

