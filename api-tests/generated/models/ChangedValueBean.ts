/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details of names changed in the record event.
 */
export type ChangedValueBean = {
  /**
   * The value of the field before the change.
   */
  readonly changedFrom?: string;
  /**
   * The value of the field after the change.
   */
  readonly changedTo?: string;
  /**
   * The name of the field changed.
   */
  readonly fieldName?: string;
};

