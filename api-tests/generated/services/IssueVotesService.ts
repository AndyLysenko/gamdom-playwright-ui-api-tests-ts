/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Votes } from '../models/Votes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueVotesService {
  /**
   * Delete vote
   * Deletes a user's vote from an issue. This is the equivalent of the user clicking *Unvote* on an issue in Jira.
   *
   * This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @returns void
   * @throws ApiError
   */
  public static removeVote(
    issueIdOrKey: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issue/{issueIdOrKey}/votes',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  voting is disabled.
         *  the user has not voted on the issue.
         *  the issue is not found.`,
      },
    });
  }
  /**
   * Get votes
   * Returns details about the votes on an issue.
   *
   * This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is ini
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * Note that users with the necessary permissions for this operation but without the *View voters and watchers* project permissions are not returned details in the `voters` field.
   * @param issueIdOrKey The ID or key of the issue.
   * @returns Votes Returned if the request is successful.
   * @throws ApiError
   */
  public static getVotes(
    issueIdOrKey: string,
  ): CancelablePromise<Votes> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/votes',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  voting is disabled.
         *  the user does not have permission to view the issue.
         *  the issue is not found.`,
      },
    });
  }
  /**
   * Add vote
   * Adds the user's vote to an issue. This is the equivalent of the user clicking *Vote* on an issue in Jira.
   *
   * This operation requires the **Allow users to vote on issues** option to be *ON*. This option is set in General configuration for Jira. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @returns void
   * @throws ApiError
   */
  public static addVote(
    issueIdOrKey: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/{issueIdOrKey}/votes',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  voting is disabled.
         *  the issue is not found.`,
      },
    });
  }
}
