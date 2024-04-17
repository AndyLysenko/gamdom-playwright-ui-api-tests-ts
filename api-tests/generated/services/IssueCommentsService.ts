/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Comment } from '../models/Comment';
import type { IssueCommentListRequestBean } from '../models/IssueCommentListRequestBean';
import type { PageBeanComment } from '../models/PageBeanComment';
import type { PageOfComments } from '../models/PageOfComments';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueCommentsService {
  /**
   * Get comments by IDs
   * Returns a [paginated](#pagination) list of comments specified by a list of comment IDs.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** Comments are returned where the user:
   *
   * *  has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   * @param requestBody The list of comment IDs.
   * @param expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `renderedBody` Returns the comment body rendered in HTML.
   * *  `properties` Returns the comment's properties.
   * @returns PageBeanComment Returned if the request is successful.
   * @throws ApiError
   */
  public static getCommentsByIds(
    requestBody: IssueCommentListRequestBean,
    expand?: string,
  ): CancelablePromise<PageBeanComment> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/comment/list',
      query: {
        'expand': expand,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request contains more than 1000 IDs or is empty.`,
      },
    });
  }
  /**
   * Get comments
   * Returns all comments for an issue.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** Comments are included in the response where the user has:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  If the comment has visibility restrictions, belongs to the group or has the role visibility is role visibility is restricted to.
   * @param issueIdOrKey The ID or key of the issue.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param orderBy [Order](#ordering) the results by a field. Accepts *created* to sort comments by their created date.
   * @param expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
   * @returns PageOfComments Returned if the request is successful.
   * @throws ApiError
   */
  public static getComments(
    issueIdOrKey: string,
    startAt?: number,
    maxResults: number = 5000,
    orderBy?: 'created' | '-created' | '+created',
    expand?: string,
  ): CancelablePromise<PageOfComments> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/comment',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'orderBy': orderBy,
        'expand': expand,
      },
      errors: {
        400: `Returned if \`orderBy\` is set to a value other than *created*.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the issue is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Add comment
   * Adds a comment to an issue.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Add comments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param requestBody
   * @param expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
   * @returns Comment Returned if the request is successful.
   * @throws ApiError
   */
  public static addComment(
    issueIdOrKey: string,
    requestBody: Comment,
    expand?: string,
  ): CancelablePromise<Comment> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/{issueIdOrKey}/comment',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'expand': expand,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect.`,
        404: `Returned if the issue is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Delete comment
   * Deletes a comment.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  *Delete all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any comment or *Delete own comments* to delete comment created by the user,
   * *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
   * @param issueIdOrKey The ID or key of the issue.
   * @param id The ID of the comment.
   * @returns void
   * @throws ApiError
   */
  public static deleteComment(
    issueIdOrKey: string,
    id: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issue/{issueIdOrKey}/comment/{id}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'id': id,
      },
      errors: {
        400: `Returned if the user does not have permission to delete the comment.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the issue or comment is not found or the user does not have permission to view the issue or comment.`,
        405: `Returned if an anonymous call is made to the operation.`,
      },
    });
  }
  /**
   * Get comment
   * Returns a comment.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the comment.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
   * @param issueIdOrKey The ID or key of the issue.
   * @param id The ID of the comment.
   * @param expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
   * @returns Comment Returned if the request is successful.
   * @throws ApiError
   */
  public static getComment(
    issueIdOrKey: string,
    id: string,
    expand?: string,
  ): CancelablePromise<Comment> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/comment/{id}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'id': id,
      },
      query: {
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the issue or comment is not found or the user does not have permission to view the issue or comment.`,
      },
    });
  }
  /**
   * Update comment
   * Updates a comment.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue containing the comment is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  *Edit all comments*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any comment or *Edit own comments* to update comment created by the user.
   * *  If the comment has visibility restrictions, the user belongs to the group or has the role visibility is restricted to.
   * @param issueIdOrKey The ID or key of the issue.
   * @param id The ID of the comment.
   * @param requestBody
   * @param notifyUsers Whether users are notified when a comment is updated.
   * @param overrideEditableFlag Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
   * @returns Comment Returned if the request is successful.
   * @throws ApiError
   */
  public static updateComment(
    issueIdOrKey: string,
    id: string,
    requestBody: Comment,
    notifyUsers: boolean = true,
    overrideEditableFlag: boolean = false,
    expand?: string,
  ): CancelablePromise<Comment> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issue/{issueIdOrKey}/comment/{id}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'id': id,
      },
      query: {
        'notifyUsers': notifyUsers,
        'overrideEditableFlag': overrideEditableFlag,
        'expand': expand,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the user does not have permission to edit the comment or the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the issue or comment is not found or the user does not have permission to view the issue or comment.`,
      },
    });
  }
}
