/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * A change item.
 */
export type ChangeDetails = {
  /**
   * The name of the field changed.
   */
  readonly field?: string;
  /**
   * The ID of the field changed.
   */
  readonly fieldId?: string;
  /**
   * The type of the field changed.
   */
  readonly fieldtype?: string;
  /**
   * The details of the original value.
   */
  readonly from?: string;
  /**
   * The details of the original value as a string.
   */
  readonly fromString?: string;
  /**
   * The details of the new value.
   */
  readonly to?: string;
  /**
   * The details of the new value as a string.
   */
  readonly toString?: string;
};

