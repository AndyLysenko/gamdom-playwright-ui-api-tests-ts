/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Dashboard } from './Dashboard';
/**
 * A page containing dashboard details.
 */
export type PageOfDashboards = {
  /**
   * List of dashboards.
   */
  readonly dashboards?: Array<Dashboard>;
  /**
   * The maximum number of results that could be on the page.
   */
  readonly maxResults?: number;
  /**
   * The URL of the next page of results, if any.
   */
  readonly next?: string;
  /**
   * The URL of the previous page of results, if any.
   */
  readonly prev?: string;
  /**
   * The index of the first item returned on the page.
   */
  readonly startAt?: number;
  /**
   * The number of results on the page.
   */
  readonly total?: number;
};

