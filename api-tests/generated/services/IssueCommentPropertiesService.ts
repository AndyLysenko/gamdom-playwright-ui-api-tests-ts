/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { EntityProperty } from '../models/EntityProperty';
import type { PropertyKeys } from '../models/PropertyKeys';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueCommentPropertiesService {
  /**
   * Get comment property keys
   * Returns the keys of all the properties of a comment.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   * @param commentId The ID of the comment.
   * @returns PropertyKeys Returned if the request is successful.
   * @throws ApiError
   */
  public static getCommentPropertyKeys(
    commentId: string,
  ): CancelablePromise<PropertyKeys> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/comment/{commentId}/properties',
      path: {
        'commentId': commentId,
      },
      errors: {
        400: `Returned if the comment ID is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the comment is not found.`,
      },
    });
  }
  /**
   * Delete comment property
   * Deletes a comment property.
   *
   * **[Permissions](#permissions) required:** either of:
   *
   * *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from any comment.
   * *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete a property from a comment created by the user.
   *
   * Also, when the visibility of a comment is restricted to a role or group the user must be a member of that role or group.
   * @param commentId The ID of the comment.
   * @param propertyKey The key of the property.
   * @returns void
   * @throws ApiError
   */
  public static deleteCommentProperty(
    commentId: string,
    propertyKey: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/comment/{commentId}/properties/{propertyKey}',
      path: {
        'commentId': commentId,
        'propertyKey': propertyKey,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the comment or the property is not found or the user has the necessary project permissions but isn't a member of the role or group visibility of the comment is restricted to.`,
      },
    });
  }
  /**
   * Get comment property
   * Returns the value of a comment property.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  If the comment has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   * @param commentId The ID of the comment.
   * @param propertyKey The key of the property.
   * @returns EntityProperty Returned if the request is successful.
   * @throws ApiError
   */
  public static getCommentProperty(
    commentId: string,
    propertyKey: string,
  ): CancelablePromise<EntityProperty> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/comment/{commentId}/properties/{propertyKey}',
      path: {
        'commentId': commentId,
        'propertyKey': propertyKey,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the comment or the property is not found.`,
      },
    });
  }
  /**
   * Set comment property
   * Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.
   *
   * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.
   *
   * **[Permissions](#permissions) required:** either of:
   *
   * *  *Edit All Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on any comment.
   * *  *Edit Own Comments* [project permission](https://confluence.atlassian.com/x/yodKLg) to create or update the value of a property on a comment created by the user.
   *
   * Also, when the visibility of a comment is restricted to a role or group the user must be a member of that role or group.
   * @param commentId The ID of the comment.
   * @param propertyKey The key of the property. The maximum length is 255 characters.
   * @param requestBody The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
   * @returns any Returned if the comment property is updated.
   * @throws ApiError
   */
  public static setCommentProperty(
    commentId: string,
    propertyKey: string,
    requestBody: any,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/comment/{commentId}/properties/{propertyKey}',
      path: {
        'commentId': commentId,
        'propertyKey': propertyKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the comment is not found.`,
      },
    });
  }
}
