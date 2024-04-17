/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JqlFunctionPrecomputationUpdateRequestBean } from '../models/JqlFunctionPrecomputationUpdateRequestBean';
import type { PageBeanJqlFunctionPrecomputationBean } from '../models/PageBeanJqlFunctionPrecomputationBean';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class JqlFunctionsAppsService {
  /**
   * Get precomputations (apps)
   * Returns the list of a function's precomputations along with information about when they were created, updated, and last used. Each precomputation has a `value` \- the JQL fragment to replace the custom function clause with.
   *
   * **[Permissions](#permissions) required:** This API is only accessible to apps and apps can only inspect their own functions.
   * @param functionKey The function key in format:
   *
   * *  Forge: `ari:cloud:ecosystem::extension/[App ID]/[Environment ID]/static/[Function key from manifest]`
   * *  Connect: `[App key]__[Module key]`
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `functionKey` Sorts by the functionKey.
   * *  `used` Sorts by the used timestamp.
   * *  `created` Sorts by the created timestamp.
   * *  `updated` Sorts by the updated timestamp.
   * @returns PageBeanJqlFunctionPrecomputationBean Returned if the request is successful.
   * @throws ApiError
   */
  public static getPrecomputations(
    functionKey?: Array<string>,
    startAt?: number,
    maxResults: number = 100,
    orderBy?: string,
  ): CancelablePromise<PageBeanJqlFunctionPrecomputationBean> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/jql/function/computation',
      query: {
        'functionKey': functionKey,
        'startAt': startAt,
        'maxResults': maxResults,
        'orderBy': orderBy,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the request is not authenticated as the app that provided the function.`,
        404: `Returned if the function is not found.`,
      },
    });
  }
  /**
   * Update precomputations (apps)
   * Update the precomputation value of a function created by a Forge/Connect app.
   *
   * **[Permissions](#permissions) required:** An API for apps to update their own precomputations.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updatePrecomputations(
    requestBody: JqlFunctionPrecomputationUpdateRequestBean,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/jql/function/computation',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if the request is not authenticated as the app that provided the function.`,
        404: `Returned if the function is not found.`,
      },
    });
  }
}
