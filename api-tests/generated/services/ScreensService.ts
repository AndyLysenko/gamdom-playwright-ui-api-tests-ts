/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { PageBeanScreen } from '../models/PageBeanScreen';
import type { PageBeanScreenWithTab } from '../models/PageBeanScreenWithTab';
import type { Screen } from '../models/Screen';
import type { ScreenableField } from '../models/ScreenableField';
import type { ScreenDetails } from '../models/ScreenDetails';
import type { UpdateScreenDetails } from '../models/UpdateScreenDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ScreensService {
  /**
   * Get screens for a field
   * Returns a [paginated](#pagination) list of the screens a field is used in.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the field to return screens for.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param expand Use [expand](#expansion) to include additional information about screens in the response. This parameter accepts `tab` which returns details about the screen tabs the field is used in.
   * @returns PageBeanScreenWithTab Returned if the request is successful.
   * @throws ApiError
   */
  public static getScreensForField(
    fieldId: string,
    startAt?: number,
    maxResults: number = 100,
    expand?: string,
  ): CancelablePromise<PageBeanScreenWithTab> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/{fieldId}/screens',
      path: {
        'fieldId': fieldId,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Get screens
   * Returns a [paginated](#pagination) list of all screens or those specified by one or more screen IDs.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of screen IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
   * @param queryString String used to perform a case-insensitive partial match with screen name.
   * @param scope The scope filter string. To filter by multiple scope, provide an ampersand-separated list. For example, `scope=GLOBAL&scope=PROJECT`.
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `id` Sorts by screen ID.
   * *  `name` Sorts by screen name.
   * @returns PageBeanScreen Returned if the request is successful.
   * @throws ApiError
   */
  public static getScreens(
    startAt?: number,
    maxResults: number = 100,
    id?: Array<number>,
    queryString: string = '',
    scope?: Array<'GLOBAL' | 'TEMPLATE' | 'PROJECT'>,
    orderBy?: 'name' | '-name' | '+name' | 'id' | '-id' | '+id',
  ): CancelablePromise<PageBeanScreen> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/screens',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'queryString': queryString,
        'scope': scope,
        'orderBy': orderBy,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Create screen
   * Creates a screen with a default field tab.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns Screen Returned if the request is successful.
   * @throws ApiError
   */
  public static createScreen(
    requestBody: ScreenDetails,
  ): CancelablePromise<Screen> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/screens',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Add field to default screen
   * Adds a field to the default tab of the default screen.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the field.
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static addFieldToDefaultScreen(
    fieldId: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/screens/addToDefault/{fieldId}',
      path: {
        'fieldId': fieldId,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field it not found or the field is already present.`,
      },
    });
  }
  /**
   * Delete screen
   * Deletes a screen. A screen cannot be deleted if it is used in a screen scheme, workflow, or workflow draft.
   *
   * Only screens used in classic projects can be deleted.
   * @param screenId The ID of the screen.
   * @returns void
   * @throws ApiError
   */
  public static deleteScreen(
    screenId: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/screens/{screenId}',
      path: {
        'screenId': screenId,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen is not found.`,
      },
    });
  }
  /**
   * Update screen
   * Updates a screen. Only screens used in classic projects can be updated.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenId The ID of the screen.
   * @param requestBody
   * @returns Screen Returned if the request is successful.
   * @throws ApiError
   */
  public static updateScreen(
    screenId: number,
    requestBody: UpdateScreenDetails,
  ): CancelablePromise<Screen> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/screens/{screenId}',
      path: {
        'screenId': screenId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen is not found.`,
      },
    });
  }
  /**
   * Get available screen fields
   * Returns the fields that can be added to a tab on a screen.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenId The ID of the screen.
   * @returns ScreenableField Returned if the request is successful.
   * @throws ApiError
   */
  public static getAvailableScreenFields(
    screenId: number,
  ): CancelablePromise<Array<ScreenableField>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/screens/{screenId}/availableFields',
      path: {
        'screenId': screenId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen is not found.`,
      },
    });
  }
}
