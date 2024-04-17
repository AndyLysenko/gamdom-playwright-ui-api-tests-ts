/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { RemoteIssueLink } from '../models/RemoteIssueLink';
import type { RemoteIssueLinkIdentifies } from '../models/RemoteIssueLinkIdentifies';
import type { RemoteIssueLinkRequest } from '../models/RemoteIssueLinkRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueRemoteLinksService {
  /**
   * Delete remote issue link by global ID
   * Deletes the remote issue link from the issue using the link's global ID. Where the global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`.
   *
   * This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is implemented, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param globalId The global ID of a remote issue link.
   * @returns void
   * @throws ApiError
   */
  public static deleteRemoteIssueLinkByGlobalId(
    issueIdOrKey: string,
    globalId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issue/{issueIdOrKey}/remotelink',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'globalId': globalId,
      },
      errors: {
        400: `Returned if a global ID isn't provided.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to link issues.`,
        404: `Returned if the issue or remote issue link is not found or the user does not have permission to view the issue.`,
      },
    });
  }
  /**
   * Get remote issue links
   * Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned. Where a global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`.
   *
   * This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param globalId The global ID of the remote issue link.
   * @returns RemoteIssueLink Returned if the request is successful.
   * @throws ApiError
   */
  public static getRemoteIssueLinks(
    issueIdOrKey: string,
    globalId?: string,
  ): CancelablePromise<RemoteIssueLink> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/remotelink',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'globalId': globalId,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if issue linking is disabled.`,
        404: `Returned if the issue or remote issue link is not found or the user does not have permission to view the issue.`,
      },
    });
  }
  /**
   * Create or update remote issue link
   * Creates or updates a remote issue link for an issue.
   *
   * If a `globalId` is provided and a remote issue link with that global ID is found it is updated. Any fields without values in the request are set to null. Otherwise, the remote issue link is created.
   *
   * This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param requestBody
   * @returns RemoteIssueLinkIdentifies Returned if the remote issue link is updated.
   * @throws ApiError
   */
  public static createOrUpdateRemoteIssueLink(
    issueIdOrKey: string,
    requestBody: RemoteIssueLinkRequest,
  ): CancelablePromise<RemoteIssueLinkIdentifies> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/{issueIdOrKey}/remotelink',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to link issues.`,
        404: `Returned if the issue is not found or the user does not have permission to view the issue.`,
      },
    });
  }
  /**
   * Delete remote issue link by ID
   * Deletes a remote issue link from an issue.
   *
   * This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects*, *Edit issues*, and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param linkId The ID of a remote issue link.
   * @returns void
   * @throws ApiError
   */
  public static deleteRemoteIssueLinkById(
    issueIdOrKey: string,
    linkId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issue/{issueIdOrKey}/remotelink/{linkId}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'linkId': linkId,
      },
      errors: {
        400: `Returned if the link ID is invalid or the remote issue link does not belong to the issue.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to link issues.`,
        404: `Returned if the issue or remote issue link is not found or the user does not have permission to view the issue.`,
      },
    });
  }
  /**
   * Get remote issue link by ID
   * Returns a remote issue link for an issue.
   *
   * This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param linkId The ID of the remote issue link.
   * @returns RemoteIssueLink Returned if the request is successful.
   * @throws ApiError
   */
  public static getRemoteIssueLinkById(
    issueIdOrKey: string,
    linkId: string,
  ): CancelablePromise<RemoteIssueLink> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/remotelink/{linkId}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'linkId': linkId,
      },
      errors: {
        400: `Returned if the link ID is invalid or the remote issue link does not belong to the issue.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if issue linking is disabled.`,
        404: `Returned if the issue or remote issue link is not found or the user does not have permission to view the issue.`,
      },
    });
  }
  /**
   * Update remote issue link by ID
   * Updates a remote issue link for an issue.
   *
   * Note: Fields without values in the request are set to null.
   *
   * This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param linkId The ID of the remote issue link.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateRemoteIssueLink(
    issueIdOrKey: string,
    linkId: string,
    requestBody: RemoteIssueLinkRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issue/{issueIdOrKey}/remotelink/{linkId}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'linkId': linkId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  the link ID is invalid.
         *  the remote issue link does not belong to the issue.
         *  the request body is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to link issues.`,
        404: `Returned if the issue or remote issue link is not found or the user does not have permission to view the issue.`,
      },
    });
  }
}
