/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { IssueLinkType } from '../models/IssueLinkType';
import type { IssueLinkTypes } from '../models/IssueLinkTypes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueLinkTypesService {
  /**
   * Get issue link types
   * Returns a list of all issue link types.
   *
   * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
   * @returns IssueLinkTypes Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssueLinkTypes(): CancelablePromise<IssueLinkTypes> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issueLinkType',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if issue linking is disabled.`,
      },
    });
  }
  /**
   * Create issue link type
   * Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link's inward and outward relationships.
   *
   * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns IssueLinkType Returned if the request is successful.
   * @throws ApiError
   */
  public static createIssueLinkType(
    requestBody: IssueLinkType,
  ): CancelablePromise<IssueLinkType> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issueLinkType',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  issue linking is disabled.
         *  the issue link type name is in use.
         *  the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Delete issue link type
   * Deletes an issue link type.
   *
   * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueLinkTypeId The ID of the issue link type.
   * @returns void
   * @throws ApiError
   */
  public static deleteIssueLinkType(
    issueLinkTypeId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issueLinkType/{issueLinkTypeId}',
      path: {
        'issueLinkTypeId': issueLinkTypeId,
      },
      errors: {
        400: `Returned if the issue link type ID is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  issue linking is disabled.
         *  the issue link type is not found.
         *  the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Get issue link type
   * Returns an issue link type.
   *
   * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project in the site.
   * @param issueLinkTypeId The ID of the issue link type.
   * @returns IssueLinkType Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssueLinkType(
    issueLinkTypeId: string,
  ): CancelablePromise<IssueLinkType> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issueLinkType/{issueLinkTypeId}',
      path: {
        'issueLinkTypeId': issueLinkTypeId,
      },
      errors: {
        400: `Returned if the issue link type ID is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  issue linking is disabled.
         *  the issue link type is not found.
         *  the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Update issue link type
   * Updates an issue link type.
   *
   * To use this operation, the site must have [issue linking](https://confluence.atlassian.com/x/yoXKM) enabled.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueLinkTypeId The ID of the issue link type.
   * @param requestBody
   * @returns IssueLinkType Returned if the request is successful.
   * @throws ApiError
   */
  public static updateIssueLinkType(
    issueLinkTypeId: string,
    requestBody: IssueLinkType,
  ): CancelablePromise<IssueLinkType> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issueLinkType/{issueLinkTypeId}',
      path: {
        'issueLinkTypeId': issueLinkTypeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the issue link type ID or the request body are invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  issue linking is disabled.
         *  the issue link type is not found.
         *  the user does not have the required permissions.`,
      },
    });
  }
}
