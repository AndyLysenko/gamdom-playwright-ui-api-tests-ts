/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { BulkIssueIsWatching } from '../models/BulkIssueIsWatching';
import type { IssueList } from '../models/IssueList';
import type { Watchers } from '../models/Watchers';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueWatchersService {
  /**
   * Get is watching issue bulk
   * Returns, for the user, details of the watched status of issues from a list. If an issue ID is invalid, the returned watched status is `false`.
   *
   * This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param requestBody A list of issue IDs.
   * @returns BulkIssueIsWatching Returned if the request is successful
   * @throws ApiError
   */
  public static getIsWatchingIssueBulk(
    requestBody: IssueList,
  ): CancelablePromise<BulkIssueIsWatching> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/watching',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Delete watcher
   * Deletes a user as a watcher of an issue.
   *
   * This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  To remove users other than themselves from the watchlist, *Manage watcher list* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * @param issueIdOrKey The ID or key of the issue.
   * @param username This parameter is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.
   * @returns void
   * @throws ApiError
   */
  public static removeWatcher(
    issueIdOrKey: string,
    username?: string,
    accountId?: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issue/{issueIdOrKey}/watchers',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'username': username,
        'accountId': accountId,
      },
      errors: {
        400: `Returned if \`accountId\` is not supplied.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the permission to manage the watcher list.`,
        404: `Returned if the issue or the user is not found or the user does not have permission to view the issue.`,
      },
    });
  }
  /**
   * Get issue watchers
   * Returns the watchers for an issue.
   *
   * This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is ini
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  To see details of users on the watchlist other than themselves, *View voters and watchers* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * @param issueIdOrKey The ID or key of the issue.
   * @returns Watchers Returned if the request is successful
   * @throws ApiError
   */
  public static getIssueWatchers(
    issueIdOrKey: string,
  ): CancelablePromise<Watchers> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/watchers',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the issue is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Add watcher
   * Adds a user as a watcher of an issue by passing the account ID of the user. For example, `"5b10ac8d82e05b22cc7d4ef5"`. If no user is specified the calling user is added.
   *
   * This operation requires the **Allow users to watch issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  To add users other than themselves to the watchlist, *Manage watcher list* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * @param issueIdOrKey The ID or key of the issue.
   * @param requestBody The account ID of the user. Note that username cannot be used due to privacy changes.
   * @returns void
   * @throws ApiError
   */
  public static addWatcher(
    issueIdOrKey: string,
    requestBody: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/{issueIdOrKey}/watchers',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the permission to manage the watcher list.`,
        404: `Returned if the issue or the user is not found or the user does not have permission to view the issue.`,
      },
    });
  }
}
