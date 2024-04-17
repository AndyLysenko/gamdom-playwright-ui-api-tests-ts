/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AddFieldBean } from '../models/AddFieldBean';
import type { MoveFieldBean } from '../models/MoveFieldBean';
import type { ScreenableField } from '../models/ScreenableField';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ScreenTabFieldsService {
  /**
   * Get all screen tab fields
   * Returns all fields for a screen tab.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.
   * @param screenId The ID of the screen.
   * @param tabId The ID of the screen tab.
   * @param projectKey The key of the project.
   * @returns ScreenableField Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllScreenTabFields(
    screenId: number,
    tabId: number,
    projectKey?: string,
  ): CancelablePromise<Array<ScreenableField>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/screens/{screenId}/tabs/{tabId}/fields',
      path: {
        'screenId': screenId,
        'tabId': tabId,
      },
      query: {
        'projectKey': projectKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen or screen tab is not found.`,
      },
    });
  }
  /**
   * Add screen tab field
   * Adds a field to a screen tab.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenId The ID of the screen.
   * @param tabId The ID of the screen tab.
   * @param requestBody
   * @returns ScreenableField Returned if the request is successful.
   * @throws ApiError
   */
  public static addScreenTabField(
    screenId: number,
    tabId: number,
    requestBody: AddFieldBean,
  ): CancelablePromise<ScreenableField> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/screens/{screenId}/tabs/{tabId}/fields',
      path: {
        'screenId': screenId,
        'tabId': tabId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen, screen tab, or field is not found.`,
      },
    });
  }
  /**
   * Remove screen tab field
   * Removes a field from a screen tab.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenId The ID of the screen.
   * @param tabId The ID of the screen tab.
   * @param id The ID of the field.
   * @returns void
   * @throws ApiError
   */
  public static removeScreenTabField(
    screenId: number,
    tabId: number,
    id: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/screens/{screenId}/tabs/{tabId}/fields/{id}',
      path: {
        'screenId': screenId,
        'tabId': tabId,
        'id': id,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen, screen tab, or field is not found.`,
      },
    });
  }
  /**
   * Move screen tab field
   * Moves a screen tab field.
   *
   * If `after` and `position` are provided in the request, `position` is ignored.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenId The ID of the screen.
   * @param tabId The ID of the screen tab.
   * @param id The ID of the field.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static moveScreenTabField(
    screenId: number,
    tabId: number,
    id: string,
    requestBody: MoveFieldBean,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/screens/{screenId}/tabs/{tabId}/fields/{id}/move',
      path: {
        'screenId': screenId,
        'tabId': tabId,
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen, screen tab, or field is not found or the field can't be moved to the requested position.`,
      },
    });
  }
}
