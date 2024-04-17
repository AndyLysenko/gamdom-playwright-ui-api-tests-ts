/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { FieldConfigurationScheme } from './FieldConfigurationScheme';
/**
 * A page of items.
 */
export type PageBeanFieldConfigurationScheme = {
  /**
   * Whether this is the last page.
   */
  readonly isLast?: boolean;
  /**
   * The maximum number of items that could be returned.
   */
  readonly maxResults?: number;
  /**
   * If there is another page of results, the URL of the next page.
   */
  readonly nextPage?: string;
  /**
   * The URL of the page.
   */
  readonly self?: string;
  /**
   * The index of the first item returned.
   */
  readonly startAt?: number;
  /**
   * The number of items returned.
   */
  readonly total?: number;
  /**
   * The list of items.
   */
  readonly values?: Array<FieldConfigurationScheme>;
};

