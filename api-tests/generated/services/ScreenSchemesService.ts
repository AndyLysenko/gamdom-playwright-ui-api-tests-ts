/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { PageBeanScreenScheme } from '../models/PageBeanScreenScheme';
import type { ScreenSchemeDetails } from '../models/ScreenSchemeDetails';
import type { ScreenSchemeId } from '../models/ScreenSchemeId';
import type { UpdateScreenSchemeDetails } from '../models/UpdateScreenSchemeDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ScreenSchemesService {
  /**
   * Get screen schemes
   * Returns a [paginated](#pagination) list of screen schemes.
   *
   * Only screen schemes used in classic projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
   * @param expand Use [expand](#expansion) include additional information in the response. This parameter accepts `issueTypeScreenSchemes` that, for each screen schemes, returns information about the issue type screen scheme the screen scheme is assigned to.
   * @param queryString String used to perform a case-insensitive partial match with screen scheme name.
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `id` Sorts by screen scheme ID.
   * *  `name` Sorts by screen scheme name.
   * @returns PageBeanScreenScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getScreenSchemes(
    startAt?: number,
    maxResults: number = 25,
    id?: Array<number>,
    expand: string = '',
    queryString: string = '',
    orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id',
  ): CancelablePromise<PageBeanScreenScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/screenscheme',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'expand': expand,
        'queryString': queryString,
        'orderBy': orderBy,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Create screen scheme
   * Creates a screen scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns ScreenSchemeId Returned if the request is successful.
   * @throws ApiError
   */
  public static createScreenScheme(
    requestBody: ScreenSchemeDetails,
  ): CancelablePromise<ScreenSchemeId> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/screenscheme',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if a screen used as one of the screen types in the screen scheme is not found.`,
      },
    });
  }
  /**
   * Delete screen scheme
   * Deletes a screen scheme. A screen scheme cannot be deleted if it is used in an issue type screen scheme.
   *
   * Only screens schemes used in classic projects can be deleted.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenSchemeId The ID of the screen scheme.
   * @returns void
   * @throws ApiError
   */
  public static deleteScreenScheme(
    screenSchemeId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/screenscheme/{screenSchemeId}',
      path: {
        'screenSchemeId': screenSchemeId,
      },
      errors: {
        400: `Returned if the screen scheme is used in an issue type screen scheme.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen scheme is not found.`,
      },
    });
  }
  /**
   * Update screen scheme
   * Updates a screen scheme. Only screen schemes used in classic projects can be updated.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenSchemeId The ID of the screen scheme.
   * @param requestBody The screen scheme update details.
   * @returns void
   * @throws ApiError
   */
  public static updateScreenScheme(
    screenSchemeId: string,
    requestBody: UpdateScreenSchemeDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/screenscheme/{screenSchemeId}',
      path: {
        'screenSchemeId': screenSchemeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the screen scheme or a screen used as one of the screen types is not found.`,
      },
    });
  }
}
