/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ColumnItem } from '../models/ColumnItem';
import type { GroupName } from '../models/GroupName';
import type { NewUserDetails } from '../models/NewUserDetails';
import type { PageBeanUser } from '../models/PageBeanUser';
import type { UnrestrictedUserEmail } from '../models/UnrestrictedUserEmail';
import type { User } from '../models/User';
import type { UserColumnRequestBody } from '../models/UserColumnRequestBody';
import type { UserMigrationBean } from '../models/UserMigrationBean';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
  /**
   * Delete user
   * Deletes a user. If the operation completes successfully then the user is removed from Jira's user base. This operation does not delete the user's Atlassian account.
   *
   * **[Permissions](#permissions) required:** Site administration (that is, membership of the *site-admin* [group](https://confluence.atlassian.com/x/24xjL)).
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
   * @param username This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param key This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @returns void
   * @throws ApiError
   */
  public static removeUser(
    accountId: string,
    username?: string,
    key?: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/user',
      query: {
        'accountId': accountId,
        'username': username,
        'key': key,
      },
      errors: {
        400: `Returned if the user cannot be removed.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the user is not found.`,
      },
    });
  }
  /**
   * Get user
   * Returns a user.
   *
   * Privacy controls are applied to the response based on the user's preferences. This could mean, for example, that the user's email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.
   *
   * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.
   * @param username This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.
   * @param key This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.
   * @param expand Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `groups` includes all groups and nested groups to which the user belongs.
   * *  `applicationRoles` includes details of all the applications to which the user has access.
   * @returns User Returned if the request is successful.
   * @throws ApiError
   */
  public static getUser(
    accountId?: string,
    username?: string,
    key?: string,
    expand?: string,
  ): CancelablePromise<User> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/user',
      query: {
        'accountId': accountId,
        'username': username,
        'key': key,
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the calling user does not have the *Browse users and groups* global permission.`,
        404: `Returned if the user is not found.`,
      },
    });
  }
  /**
   * Create user
   * Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated.
   *
   * If the user exists and has access to Jira, the operation returns a 201 status. If the user exists but does not have access to Jira, the operation returns a 400 status.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody Details about the user to be created.
   * @returns User Returned if the request is successful.
   * @throws ApiError
   */
  public static createUser(
    requestBody: NewUserDetails,
  ): CancelablePromise<User> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/user',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid or the number of licensed users is exceeded.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Bulk get users
   * Returns a [paginated](#pagination) list of the users specified by one or more account IDs.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param accountId The account ID of a user. To specify multiple users, pass multiple `accountId` parameters. For example, `accountId=5b10a2844c20165700ede21g&accountId=5b10ac8d82e05b22cc7d4ef5`.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param key This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @returns PageBeanUser Returned if the request is successful.
   * @throws ApiError
   */
  public static bulkGetUsers(
    accountId: Array<string>,
    startAt?: number,
    maxResults: number = 10,
    username?: Array<string>,
    key?: Array<string>,
  ): CancelablePromise<PageBeanUser> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/user/bulk',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'username': username,
        'key': key,
        'accountId': accountId,
      },
      errors: {
        400: `Returned if \`accountID\` is missing.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get account IDs for users
   * Returns the account IDs for the users specified in the `key` or `username` parameters. Note that multiple `key` or `username` parameters can be specified.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param username Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, `username=fred&username=barney`. Required if `key` isn't provided. Cannot be provided if `key` is present.
   * @param key Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, `key=fred&key=barney`. Required if `username` isn't provided. Cannot be provided if `username` is present.
   * @returns UserMigrationBean Returned if the request is successful.
   * @throws ApiError
   */
  public static bulkGetUsersMigration(
    startAt?: number,
    maxResults: number = 10,
    username?: Array<string>,
    key?: Array<string>,
  ): CancelablePromise<Array<UserMigrationBean>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/user/bulk/migration',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'username': username,
        'key': key,
      },
      errors: {
        400: `Returned if \`key\` or \`username\``,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Reset user default columns
   * Resets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user to the system default. If `accountId` is not passed, the calling user's default columns are reset.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.
   * *  Permission to access Jira, to set the calling user's columns.
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
   * @param username This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @returns void
   * @throws ApiError
   */
  public static resetUserColumns(
    accountId?: string,
    username?: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/user/columns',
      query: {
        'accountId': accountId,
        'username': username,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission or is not accessing their user record.`,
      },
    });
  }
  /**
   * Get user default columns
   * Returns the default [issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If `accountId` is not passed in the request, the calling user's details are returned.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLgl), to get the column details for any user.
   * *  Permission to access Jira, to get the calling user's column details.
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
   * @param username This parameter is no longer available See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @returns ColumnItem Returned if the request is successful.
   * @throws ApiError
   */
  public static getUserDefaultColumns(
    accountId?: string,
    username?: string,
  ): CancelablePromise<Array<ColumnItem>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/user/columns',
      query: {
        'accountId': accountId,
        'username': username,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission or is not accessing their user record.`,
        404: `Returned if the requested user is not found.`,
      },
    });
  }
  /**
   * Set user default columns
   * Sets the default [ issue table columns](https://confluence.atlassian.com/x/XYdKLg) for the user. If an account ID is not passed, the calling user's default columns are set. If no column details are sent, then all default columns are removed.
   *
   * The parameters for this resource are expressed as HTML form data. For example, in curl:
   *
   * `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/2/user/columns?accountId=5b10ac8d82e05b22cc7d4ef5'`
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set the columns on any user.
   * *  Permission to access Jira, to set the calling user's columns.
   * @param formData The ID of a column to set. To set multiple columns, send multiple `columns` parameters.
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static setUserColumns(
    formData: UserColumnRequestBody,
    accountId?: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/user/columns',
      query: {
        'accountId': accountId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission or is not accessing their user record.`,
        404: `Returned if the requested user is not found.`,
        429: `Returned if the rate limit is exceeded. User search endpoints share a collective rate limit for the tenant, in addition to Jira's normal rate limiting you may receive a rate limit for user search. Please respect the Retry-After header.`,
        500: `Returned if an invalid issue table column ID is sent.`,
      },
    });
  }
  /**
   * Get user email
   * Returns a user's email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`.
   * @returns UnrestrictedUserEmail Returned if the request is successful.
   * @throws ApiError
   */
  public static getUserEmail(
    accountId: string,
  ): CancelablePromise<UnrestrictedUserEmail> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/user/email',
      query: {
        'accountId': accountId,
      },
      errors: {
        400: `Returned if the calling app is not approved to use this API.`,
        401: `Returned if the authentication credentials are incorrect or missing from the request (for example if a user is trying to access this API).`,
        404: `Returned if a user with the given \`accountId\` doesn't exist`,
        503: `Indicates the API is not currently enabled`,
      },
    });
  }
  /**
   * Get user email bulk
   * Returns a user's email address. This API is only available to apps approved by Atlassian, according to these [guidelines](https://community.developer.atlassian.com/t/guidelines-for-requesting-access-to-email-address/27603).
   * @param accountId The account IDs of the users for which emails are required. An `accountId` is an identifier that uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value).
   * @returns UnrestrictedUserEmail Returned if the request is successful.
   * @throws ApiError
   */
  public static getUserEmailBulk(
    accountId: Array<string>,
  ): CancelablePromise<UnrestrictedUserEmail> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/user/email/bulk',
      query: {
        'accountId': accountId,
      },
      errors: {
        400: `Returned if the calling app is not approved to use this API.`,
        401: `Returned if the authentication credentials are incorrect, or missing from the request (for example if a user is trying to access this API).`,
        503: `Indicates the API is not currently enabled.`,
      },
    });
  }
  /**
   * Get user groups
   * Returns the groups to which a user belongs.
   *
   * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
   * @param username This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param key This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @returns GroupName Returned if the request is successful.
   * @throws ApiError
   */
  public static getUserGroups(
    accountId: string,
    username?: string,
    key?: string,
  ): CancelablePromise<Array<GroupName>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/user/groups',
      query: {
        'accountId': accountId,
        'username': username,
        'key': key,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the calling user does not have the *Browse users and groups* global permission.`,
        404: `Returned if the user is not found.`,
      },
    });
  }
  /**
   * Get all users default
   * Returns a list of all users, including active users, inactive users and previously deleted users that have an Atlassian account.
   *
   * Privacy controls are applied to the response based on the users' preferences. This could mean, for example, that the user's email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.
   *
   * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return.
   * @param maxResults The maximum number of items to return.
   * @returns User Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllUsersDefault(
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<Array<User>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/users',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        409: `Returned if the request takes longer than 10 seconds or is interrupted.`,
      },
    });
  }
  /**
   * Get all users
   * Returns a list of all users, including active users, inactive users and previously deleted users that have an Atlassian account.
   *
   * Privacy controls are applied to the response based on the users' preferences. This could mean, for example, that the user's email address is hidden. See the [Profile visibility overview](https://developer.atlassian.com/cloud/jira/platform/profile-visibility/) for more details.
   *
   * **[Permissions](#permissions) required:** *Browse users and groups* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return.
   * @param maxResults The maximum number of items to return.
   * @returns User Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllUsers(
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<Array<User>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/users/search',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        409: `Returned if the request takes longer than 10 seconds or is interrupted.`,
      },
    });
  }
}
