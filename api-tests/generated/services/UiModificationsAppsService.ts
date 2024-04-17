/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CreateUiModificationDetails } from '../models/CreateUiModificationDetails';
import type { PageBeanUiModificationDetails } from '../models/PageBeanUiModificationDetails';
import type { UiModificationIdentifiers } from '../models/UiModificationIdentifiers';
import type { UpdateUiModificationDetails } from '../models/UpdateUiModificationDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UiModificationsAppsService {
  /**
   * Get UI modifications
   * Gets UI modifications. UI modifications can only be retrieved by Forge apps.
   *
   * **[Permissions](#permissions) required:** None.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param expand Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `data` Returns UI modification data.
   * *  `contexts` Returns UI modification contexts.
   * @returns PageBeanUiModificationDetails Returned if the request is successful.
   * @throws ApiError
   */
  public static getUiModifications(
    startAt?: number,
    maxResults: number = 50,
    expand?: string,
  ): CancelablePromise<PageBeanUiModificationDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/uiModifications',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'expand': expand,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the request is not from a Forge app.`,
      },
    });
  }
  /**
   * Create UI modification
   * Creates a UI modification. UI modification can only be created by Forge apps.
   *
   * Each app can define up to 3000 UI modifications. Each UI modification can define up to 1000 contexts. The same context can be assigned to maximum 100 UI modifications.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *None* if the UI modification is created without contexts.
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, if the UI modification is created with contexts.
   * @param requestBody Details of the UI modification.
   * @returns UiModificationIdentifiers Returned if the UI modification is created.
   * @throws ApiError
   */
  public static createUiModification(
    requestBody: CreateUiModificationDetails,
  ): CancelablePromise<UiModificationIdentifiers> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/uiModifications',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the request is not from a Forge app.`,
        404: `Returned if a project or an issue type in the context are not found.`,
      },
    });
  }
  /**
   * Delete UI modification
   * Deletes a UI modification. All the contexts that belong to the UI modification are deleted too. UI modification can only be deleted by Forge apps.
   *
   * **[Permissions](#permissions) required:** None.
   * @param uiModificationId The ID of the UI modification.
   * @returns void
   * @throws ApiError
   */
  public static deleteUiModification(
    uiModificationId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/uiModifications/{uiModificationId}',
      path: {
        'uiModificationId': uiModificationId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the request is not from a Forge app.`,
        404: `Returned if the UI modification is not found.`,
      },
    });
  }
  /**
   * Update UI modification
   * Updates a UI modification. UI modification can only be updated by Forge apps.
   *
   * Each UI modification can define up to 1000 contexts. The same context can be assigned to maximum 100 UI modifications.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *None* if the UI modification is created without contexts.
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, if the UI modification is created with contexts.
   * @param uiModificationId The ID of the UI modification.
   * @param requestBody Details of the UI modification.
   * @returns void
   * @throws ApiError
   */
  public static updateUiModification(
    uiModificationId: string,
    requestBody: UpdateUiModificationDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/uiModifications/{uiModificationId}',
      path: {
        'uiModificationId': uiModificationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the request is not from a Forge app.`,
        404: `Returned if the UI modification, a project or an issue type in the context are not found.`,
      },
    });
  }
}
