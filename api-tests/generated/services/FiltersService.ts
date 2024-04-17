/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ChangeFilterOwner } from '../models/ChangeFilterOwner';
import type { ColumnItem } from '../models/ColumnItem';
import type { ColumnRequestBody } from '../models/ColumnRequestBody';
import type { Filter } from '../models/Filter';
import type { PageBeanFilterDetails } from '../models/PageBeanFilterDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FiltersService {
  /**
   * Create filter
   * Creates a filter. The filter is shared according to the [default share scope](#api-rest-api-2-filter-post). The filter is not selected as a favorite.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param requestBody The filter to create.
   * @param expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
   * *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
   * @param overrideSharePermissions EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be created. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns Filter Returned if the request is successful.
   * @throws ApiError
   */
  public static createFilter(
    requestBody: Filter,
    expand?: string,
    overrideSharePermissions: boolean = false,
  ): CancelablePromise<Filter> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/filter',
      query: {
        'expand': expand,
        'overrideSharePermissions': overrideSharePermissions,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request object is invalid. For example, the \`name\` is not unique or the project ID is not specified for a project role share permission.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get favorite filters
   * Returns the visible favorite filters of the user.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** A favorite filter is only visible to the user where the filter is:
   *
   * *  owned by the user.
   * *  shared with a group that the user is a member of.
   * *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
   * *  shared with a public project.
   * *  shared with the public.
   *
   * For example, if the user favorites a public filter that is subsequently made private that filter is not returned by this operation.
   * @param expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
   * *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
   * @returns Filter Returned if the request is successful.
   * @throws ApiError
   */
  public static getFavouriteFilters(
    expand?: string,
  ): CancelablePromise<Array<Filter>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/filter/favourite',
      query: {
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get my filters
   * Returns the filters owned by the user. If `includeFavourites` is `true`, the user's visible favorite filters are also returned.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira, however, a favorite filters is only visible to the user where the filter is:
   *
   * *  owned by the user.
   * *  shared with a group that the user is a member of.
   * *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
   * *  shared with a public project.
   * *  shared with the public.
   *
   * For example, if the user favorites a public filter that is subsequently made private that filter is not returned by this operation.
   * @param expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
   * *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
   * @param includeFavourites Include the user's favorite filters in the response.
   * @returns Filter Returned if the request is successful.
   * @throws ApiError
   */
  public static getMyFilters(
    expand?: string,
    includeFavourites: boolean = false,
  ): CancelablePromise<Array<Filter>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/filter/my',
      query: {
        'expand': expand,
        'includeFavourites': includeFavourites,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Search for filters
   * Returns a [paginated](#pagination) list of filters. Use this operation to get:
   *
   * *  specific filters, by defining `id` only.
   * *  filters that match all of the specified attributes. For example, all filters for a user with a particular word in their name. When multiple attributes are specified only filters matching all attributes are returned.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None, however, only the following filters that match the query parameters are returned:
   *
   * *  filters owned by the user.
   * *  filters shared with a group that the user is a member of.
   * *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
   * *  filters shared with a public project.
   * *  filters shared with the public.
   * @param filterName String used to perform a case-insensitive partial match with `name`.
   * @param accountId User account ID used to return filters with the matching `owner.accountId`. This parameter cannot be used with `owner`.
   * @param owner This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching `owner.name`. This parameter cannot be used with `accountId`.
   * @param groupname As a group's name can change, use of `groupId` is recommended to identify a group. Group name used to returns filters that are shared with a group that matches `sharePermissions.group.groupname`. This parameter cannot be used with the `groupId` parameter.
   * @param groupId Group ID used to returns filters that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter.
   * @param projectId Project ID used to returns filters that are shared with a project that matches `sharePermissions.project.id`.
   * @param id The list of filter IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. Do not exceed 200 filter IDs.
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `description` Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.
   * *  `favourite_count` Sorts by the count of how many users have this filter as a favorite.
   * *  `is_favourite` Sorts by whether the filter is marked as a favorite.
   * *  `id` Sorts by filter ID.
   * *  `name` Sorts by filter name.
   * *  `owner` Sorts by the ID of the filter owner.
   * *  `is_shared` Sorts by whether the filter is shared.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `description` Returns the description of the filter.
   * *  `favourite` Returns an indicator of whether the user has set the filter as a favorite.
   * *  `favouritedCount` Returns a count of how many users have set this filter as a favorite.
   * *  `jql` Returns the JQL query that the filter uses.
   * *  `owner` Returns the owner of the filter.
   * *  `searchUrl` Returns a URL to perform the filter's JQL query.
   * *  `sharePermissions` Returns the share permissions defined for the filter.
   * *  `editPermissions` Returns the edit permissions defined for the filter.
   * *  `isWritable` Returns whether the current user has permission to edit the filter.
   * *  `approximateLastUsed` \[Experimental\] Returns the approximate date and time when the filter was last evaluated.
   * *  `subscriptions` Returns the users that are subscribed to the filter.
   * *  `viewUrl` Returns a URL to view the filter.
   * @param overrideSharePermissions EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns PageBeanFilterDetails Returned if the request is successful.
   * @throws ApiError
   */
  public static getFiltersPaginated(
    filterName?: string,
    accountId?: string,
    owner?: string,
    groupname?: string,
    groupId?: string,
    projectId?: number,
    id?: Array<number>,
    orderBy: 'description' | '-description' | '+description' | 'favourite_count' | '-favourite_count' | '+favourite_count' | 'id' | '-id' | '+id' | 'is_favourite' | '-is_favourite' | '+is_favourite' | 'name' | '-name' | '+name' | 'owner' | '-owner' | '+owner' | 'is_shared' | '-is_shared' | '+is_shared' = 'name',
    startAt?: number,
    maxResults: number = 50,
    expand?: string,
    overrideSharePermissions: boolean = false,
  ): CancelablePromise<PageBeanFilterDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/filter/search',
      query: {
        'filterName': filterName,
        'accountId': accountId,
        'owner': owner,
        'groupname': groupname,
        'groupId': groupId,
        'projectId': projectId,
        'id': id,
        'orderBy': orderBy,
        'startAt': startAt,
        'maxResults': maxResults,
        'expand': expand,
        'overrideSharePermissions': overrideSharePermissions,
      },
      errors: {
        400: `Returned if:
         *  \`owner\` and \`accountId\` are provided.
         *  \`expand\` includes an invalid value.
         *  \`orderBy\` is invalid.
         *  \`id\` identifies more than 200 filter IDs.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Delete filter
   * Delete a filter.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira, however filters can only be deleted by the creator of the filter or a user with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the filter to delete.
   * @returns void
   * @throws ApiError
   */
  public static deleteFilter(
    id: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/filter/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Returned if the filter is not found.`,
        401: `Returned if the user does not have permission to delete the filter.`,
      },
    });
  }
  /**
   * Get filter
   * Returns a filter.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None, however, the filter is only returned where it is:
   *
   * *  owned by the user.
   * *  shared with a group that the user is a member of.
   * *  shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
   * *  shared with a public project.
   * *  shared with the public.
   * @param id The ID of the filter to return.
   * @param expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
   * *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
   * @param overrideSharePermissions EXPERIMENTAL: Whether share permissions are overridden to enable filters with any share permissions to be returned. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns Filter Returned if the request is successful.
   * @throws ApiError
   */
  public static getFilter(
    id: number,
    expand?: string,
    overrideSharePermissions: boolean = false,
  ): CancelablePromise<Filter> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/filter/{id}',
      path: {
        'id': id,
      },
      query: {
        'expand': expand,
        'overrideSharePermissions': overrideSharePermissions,
      },
      errors: {
        400: `Returned if the filter is not found or the user does not have permission to view it.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Update filter
   * Updates a filter. Use this operation to update a filter's name, description, JQL, or sharing.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira, however the user must own the filter.
   * @param id The ID of the filter to update.
   * @param requestBody The filter to update.
   * @param expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
   * *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
   * @param overrideSharePermissions EXPERIMENTAL: Whether share permissions are overridden to enable the addition of any share permissions to filters. Available to users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns Filter Returned if the request is successful.
   * @throws ApiError
   */
  public static updateFilter(
    id: number,
    requestBody: Filter,
    expand?: string,
    overrideSharePermissions: boolean = false,
  ): CancelablePromise<Filter> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/filter/{id}',
      path: {
        'id': id,
      },
      query: {
        'expand': expand,
        'overrideSharePermissions': overrideSharePermissions,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request object is invalid. For example, the \`name\` is not unique or the project ID is not specified for a project role share permission.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Reset columns
   * Reset the user's column configuration for the filter to the default.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira, however, columns are only reset for:
   *
   * *  filters owned by the user.
   * *  filters shared with a group that the user is a member of.
   * *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
   * *  filters shared with a public project.
   * *  filters shared with the public.
   * @param id The ID of the filter.
   * @returns void
   * @throws ApiError
   */
  public static resetColumns(
    id: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/filter/{id}/columns',
      path: {
        'id': id,
      },
      errors: {
        400: `Returned if:
         *  the filter is not found.
         *  the user does not have permission to view the filter.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get columns
   * Returns the columns configured for a filter. The column configuration is used when the filter's results are viewed in *List View* with the *Columns* set to *Filter*.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None, however, column details are only returned for:
   *
   * *  filters owned by the user.
   * *  filters shared with a group that the user is a member of.
   * *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
   * *  filters shared with a public project.
   * *  filters shared with the public.
   * @param id The ID of the filter.
   * @returns ColumnItem Returned if the request is successful.
   * @throws ApiError
   */
  public static getColumns(
    id: number,
  ): CancelablePromise<Array<ColumnItem>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/filter/{id}/columns',
      path: {
        'id': id,
      },
      errors: {
        400: `Returned if the user does not have permission to view the filter.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if a column configuration is not set for the filter.`,
      },
    });
  }
  /**
   * Set columns
   * Sets the columns for a filter. Only navigable fields can be set as columns. Use [Get fields](#api-rest-api-2-field-get) to get the list fields in Jira. A navigable field has `navigable` set to `true`.
   *
   * The parameters for this resource are expressed as HTML form data. For example, in curl:
   *
   * `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/2/filter/10000/columns`
   *
   * **[Permissions](#permissions) required:** Permission to access Jira, however, columns are only set for:
   *
   * *  filters owned by the user.
   * *  filters shared with a group that the user is a member of.
   * *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
   * *  filters shared with a public project.
   * *  filters shared with the public.
   * @param id The ID of the filter.
   * @param requestBody The IDs of the fields to set as columns. In the form data, specify each field as `columns=id`, where `id` is the *id* of a field (as seen in the response for [Get fields](#api-rest-api-<ver>-field-get)). For example, `columns=summary`.
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static setColumns(
    id: number,
    requestBody: ColumnRequestBody,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/filter/{id}/columns',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  a non-navigable field is set as a column.
         *  the user does not have permission to view the filter.`,
        403: `Returned if the requesting user is not an owner of the filter.`,
      },
    });
  }
  /**
   * Remove filter as favorite
   * Removes a filter as a favorite for the user. Note that this operation only removes filters visible to the user from the user's favorites list. For example, if the user favorites a public filter that is subsequently made private (and is therefore no longer visible on their favorites list) they cannot remove it from their favorites list.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param id The ID of the filter.
   * @param expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
   * *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
   * @returns Filter Returned if the request is successful.
   * @throws ApiError
   */
  public static deleteFavouriteForFilter(
    id: number,
    expand?: string,
  ): CancelablePromise<Filter> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/filter/{id}/favourite',
      path: {
        'id': id,
      },
      query: {
        'expand': expand,
      },
      errors: {
        400: `Returned if:
         *  the filter is not found.
         *  the user does not have permission to view the filter.`,
      },
    });
  }
  /**
   * Add filter as favorite
   * Add a filter as a favorite for the user.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira, however, the user can only favorite:
   *
   * *  filters owned by the user.
   * *  filters shared with a group that the user is a member of.
   * *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
   * *  filters shared with a public project.
   * *  filters shared with the public.
   * @param id The ID of the filter.
   * @param expand Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.
   * *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
   * @returns Filter Returned if the request is successful.
   * @throws ApiError
   */
  public static setFavouriteForFilter(
    id: number,
    expand?: string,
  ): CancelablePromise<Filter> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/filter/{id}/favourite',
      path: {
        'id': id,
      },
      query: {
        'expand': expand,
      },
      errors: {
        400: `Returned if:
         *  the filter is not found.
         *  the user does not have permission to favorite the filter.`,
      },
    });
  }
  /**
   * Change filter owner
   * Changes the owner of the filter.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira. However, the user must own the filter or have the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the filter to update.
   * @param requestBody The account ID of the new owner of the filter.
   * @returns void
   * @throws ApiError
   */
  public static changeFilterOwner(
    id: number,
    requestBody: ChangeFilterOwner,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/filter/{id}/owner',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned when:
         *  The new owner of the filter owns a filter with the same name.
         *  An attempt is made to change owner of the default filter.`,
        403: `Returned if the requesting user is not an owner of the filter or does not have *Administer Jira* global permission.`,
        404: `Returned if the filter or the new owner of the filter is not found.`,
      },
    });
  }
}
