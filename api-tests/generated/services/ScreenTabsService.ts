/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ScreenableTab } from '../models/ScreenableTab';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ScreenTabsService {
  /**
   * Get bulk screen tabs
   * Returns the list of tabs for a bulk of screens.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenId The list of screen IDs. To include multiple screen IDs, provide an ampersand-separated list. For example, `screenId=10000&screenId=10001`.
   * @param tabId The list of tab IDs. To include multiple tab IDs, provide an ampersand-separated list. For example, `tabId=10000&tabId=10001`.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResult The maximum number of items to return per page. The maximum number is 100,
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static getBulkScreenTabs(
    screenId?: Array<number>,
    tabId?: Array<number>,
    startAt?: number,
    maxResult: number = 100,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/screens/tabs',
      query: {
        'screenId': screenId,
        'tabId': tabId,
        'startAt': startAt,
        'maxResult': maxResult,
      },
      errors: {
        400: `Returned if the screen ID or the tab ID is empty.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Get all screen tabs
   * Returns the list of tabs for a screen.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) when the project key is specified, providing that the screen is associated with the project through a Screen Scheme and Issue Type Screen Scheme.
   * @param screenId The ID of the screen.
   * @param projectKey The key of the project.
   * @returns ScreenableTab Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllScreenTabs(
    screenId: number,
    projectKey?: string,
  ): CancelablePromise<Array<ScreenableTab>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/screens/{screenId}/tabs',
      path: {
        'screenId': screenId,
      },
      query: {
        'projectKey': projectKey,
      },
      errors: {
        400: `Returned if the screen ID is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen is not found.`,
      },
    });
  }
  /**
   * Create screen tab
   * Creates a tab for a screen.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenId The ID of the screen.
   * @param requestBody
   * @returns ScreenableTab Returned if the request is successful.
   * @throws ApiError
   */
  public static addScreenTab(
    screenId: number,
    requestBody: ScreenableTab,
  ): CancelablePromise<ScreenableTab> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/screens/{screenId}/tabs',
      path: {
        'screenId': screenId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen is not found.`,
      },
    });
  }
  /**
   * Delete screen tab
   * Deletes a screen tab.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenId The ID of the screen.
   * @param tabId The ID of the screen tab.
   * @returns void
   * @throws ApiError
   */
  public static deleteScreenTab(
    screenId: number,
    tabId: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/screens/{screenId}/tabs/{tabId}',
      path: {
        'screenId': screenId,
        'tabId': tabId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen or screen tab is not found.`,
      },
    });
  }
  /**
   * Update screen tab
   * Updates the name of a screen tab.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenId The ID of the screen.
   * @param tabId The ID of the screen tab.
   * @param requestBody
   * @returns ScreenableTab Returned if the request is successful.
   * @throws ApiError
   */
  public static renameScreenTab(
    screenId: number,
    tabId: number,
    requestBody: ScreenableTab,
  ): CancelablePromise<ScreenableTab> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/screens/{screenId}/tabs/{tabId}',
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
        404: `Returned if the screen or screen tab is not found.`,
      },
    });
  }
  /**
   * Move screen tab
   * Moves a screen tab.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param screenId The ID of the screen.
   * @param tabId The ID of the screen tab.
   * @param pos The position of tab. The base index is 0.
   * @returns void
   * @throws ApiError
   */
  public static moveScreenTab(
    screenId: number,
    tabId: number,
    pos: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/screens/{screenId}/tabs/{tabId}/move/{pos}',
      path: {
        'screenId': screenId,
        'tabId': tabId,
        'pos': pos,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the screen or screen tab is not found or the position is invalid.`,
      },
    });
  }
}
