/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { FilterSubscription } from './FilterSubscription';
/**
 * A paginated list of subscriptions to a filter.
 */
export type FilterSubscriptionsList = {
  /**
   * The index of the last item returned on the page.
   */
  readonly 'end-index'?: number;
  /**
   * The list of items.
   */
  readonly items?: Array<FilterSubscription>;
  /**
   * The maximum number of results that could be on the page.
   */
  readonly 'max-results'?: number;
  /**
   * The number of items on the page.
   */
  readonly size?: number;
  /**
   * The index of the first item returned on the page.
   */
  readonly 'start-index'?: number;
};

