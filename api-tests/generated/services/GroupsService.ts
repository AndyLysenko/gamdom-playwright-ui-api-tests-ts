/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AddGroupBean } from '../models/AddGroupBean';
import type { FoundGroups } from '../models/FoundGroups';
import type { Group } from '../models/Group';
import type { PageBeanGroupDetails } from '../models/PageBeanGroupDetails';
import type { PageBeanUserDetails } from '../models/PageBeanUserDetails';
import type { UpdateUserToGroupBean } from '../models/UpdateUserToGroupBean';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GroupsService {
  /**
   * Remove group
   * Deletes a group.
   *
   * **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* strategic [group](https://confluence.atlassian.com/x/24xjL)).
   * @param groupname
   * @param groupId The ID of the group. This parameter cannot be used with the `groupname` parameter.
   * @param swapGroup As a group's name can change, use of `swapGroupId` is recommended to identify a group.
   * The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroupId` parameter.
   * @param swapGroupId The ID of the group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. This parameter cannot be used with the `swapGroup` parameter.
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static removeGroup(
    groupname?: string,
    groupId?: string,
    swapGroup?: string,
    swapGroupId?: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/group',
      query: {
        'groupname': groupname,
        'groupId': groupId,
        'swapGroup': swapGroup,
        'swapGroupId': swapGroupId,
      },
      errors: {
        400: `Returned if the group name is not specified.`,
        401: `Returned if the authentication credentials are incorrect or missing from the request.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the group is not found.`,
      },
    });
  }
  /**
   * @deprecated
   * Get group
   * This operation is deprecated, use [`group/member`](#api-rest-api-2-group-member-get).
   *
   * Returns all users in a group.
   *
   * **[Permissions](#permissions) required:** either of:
   *
   * *  *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param groupname As a group's name can change, use of `groupId` is recommended to identify a group.
   * The name of the group. This parameter cannot be used with the `groupId` parameter.
   * @param groupId The ID of the group. This parameter cannot be used with the `groupName` parameter.
   * @param expand List of fields to expand.
   * @returns Group Returned if the request is successful.
   * @throws ApiError
   */
  public static getGroup(
    groupname?: string,
    groupId?: string,
    expand?: string,
  ): CancelablePromise<Group> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/group',
      query: {
        'groupname': groupname,
        'groupId': groupId,
        'expand': expand,
      },
      errors: {
        400: `Returned if the group name is not specified.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the calling user does not have the Administer Jira global permission.`,
        404: `Returned if the group is not found.`,
      },
    });
  }
  /**
   * Create group
   * Creates a group.
   *
   * **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
   * @param requestBody The name of the group.
   * @returns Group Returned if the request is successful.
   * @throws ApiError
   */
  public static createGroup(
    requestBody: AddGroupBean,
  ): CancelablePromise<Group> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/group',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if group name is not specified or the group name is in use.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Bulk get groups
   * Returns a [paginated](#pagination) list of groups.
   *
   * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param groupId The ID of a group. To specify multiple IDs, pass multiple `groupId` parameters. For example, `groupId=5b10a2844c20165700ede21g&groupId=5b10ac8d82e05b22cc7d4ef5`.
   * @param groupName The name of a group. To specify multiple names, pass multiple `groupName` parameters. For example, `groupName=administrators&groupName=jira-software-users`.
   * @param accessType The access level of a group. Valid values: 'site-admin', 'admin', 'user'.
   * @param applicationKey The application key of the product user groups to search for. Valid values: 'jira-servicedesk', 'jira-software', 'jira-product-discovery', 'jira-core'.
   * @returns PageBeanGroupDetails Returned if the request is successful.
   * @throws ApiError
   */
  public static bulkGetGroups(
    startAt?: number,
    maxResults: number = 50,
    groupId?: Array<string>,
    groupName?: Array<string>,
    accessType?: string,
    applicationKey?: string,
  ): CancelablePromise<PageBeanGroupDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/group/bulk',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'groupId': groupId,
        'groupName': groupName,
        'accessType': accessType,
        'applicationKey': applicationKey,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        500: `Returned if the group with the given access level can't be retrieved.`,
      },
    });
  }
  /**
   * Get users from group
   * Returns a [paginated](#pagination) list of all users in a group.
   *
   * Note that users are ordered by username, however the username is not returned in the results due to privacy reasons.
   *
   * **[Permissions](#permissions) required:** either of:
   *
   * *  *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param groupname As a group's name can change, use of `groupId` is recommended to identify a group.
   * The name of the group. This parameter cannot be used with the `groupId` parameter.
   * @param groupId The ID of the group. This parameter cannot be used with the `groupName` parameter.
   * @param includeInactiveUsers Include inactive users.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanUserDetails Returned if the request is successful.
   * @throws ApiError
   */
  public static getUsersFromGroup(
    groupname?: string,
    groupId?: string,
    includeInactiveUsers: boolean = false,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanUserDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/group/member',
      query: {
        'groupname': groupname,
        'groupId': groupId,
        'includeInactiveUsers': includeInactiveUsers,
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        400: `Returned if the group name is not specified.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the calling user does not have the Administer Jira global permission.`,
        404: `Returned if the group is not found.`,
      },
    });
  }
  /**
   * Remove user from group
   * Removes a user from a group.
   *
   * **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
   * @param groupname As a group's name can change, use of `groupId` is recommended to identify a group.
   * The name of the group. This parameter cannot be used with the `groupId` parameter.
   * @param groupId The ID of the group. This parameter cannot be used with the `groupName` parameter.
   * @param username This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static removeUserFromGroup(
    accountId: string,
    groupname?: string,
    groupId?: string,
    username?: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/group/user',
      query: {
        'groupname': groupname,
        'groupId': groupId,
        'username': username,
        'accountId': accountId,
      },
      errors: {
        400: `Returned if:
         *  \`groupName\` is missing.
         *  \`accountId\` is missing.`,
        401: `Returned if the authentication credentials are incorrect or missing from the request.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the group or user are not found.`,
      },
    });
  }
  /**
   * Add user to group
   * Adds a user to a group.
   *
   * **[Permissions](#permissions) required:** Site administration (that is, member of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
   * @param requestBody The user to add to the group.
   * @param groupname As a group's name can change, use of `groupId` is recommended to identify a group.
   * The name of the group. This parameter cannot be used with the `groupId` parameter.
   * @param groupId The ID of the group. This parameter cannot be used with the `groupName` parameter.
   * @returns Group Returned if the request is successful.
   * @throws ApiError
   */
  public static addUserToGroup(
    requestBody: UpdateUserToGroupBean,
    groupname?: string,
    groupId?: string,
  ): CancelablePromise<Group> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/group/user',
      query: {
        'groupname': groupname,
        'groupId': groupId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  \`groupname\` is not provided.
         *  \`accountId\` is missing.`,
        401: `Returned if the authentication credentials are incorrect or missing from the request.`,
        403: `Returned if the calling user does not have the necessary permission.`,
        404: `Returned if the group or user are not found.`,
      },
    });
  }
  /**
   * Find groups
   * Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results.
   *
   * The primary use case for this resource is to populate a group picker suggestions list. To this end, the returned object includes the `html` field where the matched query term is highlighted in the group name with the HTML strong tag. Also, the groups list is wrapped in a response object that contains a header for use in the picker, specifically *Showing X of Y matching groups*.
   *
   * The list returns with the groups sorted. If no groups match the list criteria, an empty list is returned.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg). Anonymous calls and calls by users without the required permission return an empty list.
   *
   * *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg). Without this permission, calls where query is not an exact match to an existing group will return an empty list.
   * @param accountId This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-2-user-groups-get).
   * @param query The string to find in group names.
   * @param exclude As a group's name can change, use of `excludeGroupIds` is recommended to identify a group.
   * A group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `exclude=group1&exclude=group2`. This parameter cannot be used with the `excludeGroupIds` parameter.
   * @param excludeId A group ID to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `excludeId=group1-id&excludeId=group2-id`. This parameter cannot be used with the `excludeGroups` parameter.
   * @param maxResults The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property `jira.ajax.autocomplete.limit`.
   * @param caseInsensitive Whether the search for groups should be case insensitive.
   * @param userName This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @returns FoundGroups Returned if the request is successful.
   * @throws ApiError
   */
  public static findGroups(
    accountId?: string,
    query?: string,
    exclude?: Array<string>,
    excludeId?: Array<string>,
    maxResults?: number,
    caseInsensitive: boolean = false,
    userName?: string,
  ): CancelablePromise<FoundGroups> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/groups/picker',
      query: {
        'accountId': accountId,
        'query': query,
        'exclude': exclude,
        'excludeId': excludeId,
        'maxResults': maxResults,
        'caseInsensitive': caseInsensitive,
        'userName': userName,
      },
    });
  }
}
