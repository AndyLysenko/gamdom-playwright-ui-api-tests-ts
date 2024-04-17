/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { FilterSubscription } from './FilterSubscription';
import type { SharePermission } from './SharePermission';
import type { User } from './User';
/**
 * Details of a filter.
 */
export type FilterDetails = {
  /**
   * \[Experimental\] Approximate last used time. Returns the date and time when the filter was last used. Returns `null` if the filter hasn't been used after tracking was enabled. For performance reasons, timestamps aren't updated in real time and therefore may not be exactly accurate.
   */
  readonly approximateLastUsed?: string;
  /**
   * The description of the filter.
   */
  description?: string;
  /**
   * The groups and projects that can edit the filter. This can be specified when updating a filter, but not when creating a filter.
   */
  editPermissions?: Array<SharePermission>;
  /**
   * Expand options that include additional filter details in the response.
   */
  readonly expand?: string;
  /**
   * Whether the filter is selected as a favorite by any users, not including the filter owner.
   */
  readonly favourite?: boolean;
  /**
   * The count of how many users have selected this filter as a favorite, including the filter owner.
   */
  readonly favouritedCount?: number;
  /**
   * The unique identifier for the filter.
   */
  readonly id?: string;
  /**
   * The JQL query for the filter. For example, *project = SSP AND issuetype = Bug*.
   */
  readonly jql?: string;
  /**
   * The name of the filter.
   */
  name: string;
  /**
   * The user who owns the filter. Defaults to the creator of the filter, however, Jira administrators can change the owner of a shared filter in the admin settings.
   */
  readonly owner?: User;
  /**
   * A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-2-filter-search-get) operation with the filter's JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/2/search?jql=project+%3D+SSP+AND+issuetype+%3D+Bug*.
   */
  readonly searchUrl?: string;
  /**
   * The URL of the filter.
   */
  readonly self?: string;
  /**
   * The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter.
   */
  sharePermissions?: Array<SharePermission>;
  /**
   * The users that are subscribed to the filter.
   */
  readonly subscriptions?: Array<FilterSubscription>;
  /**
   * A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter=10100*.
   */
  readonly viewUrl?: string;
};

