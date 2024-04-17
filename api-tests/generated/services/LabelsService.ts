/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { PageBeanString } from '../models/PageBeanString';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LabelsService {
  /**
   * Get all labels
   * Returns a [paginated](#pagination) list of labels.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanString Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllLabels(
    startAt?: number,
    maxResults: number = 1000,
  ): CancelablePromise<PageBeanString> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/label',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
      },
    });
  }
}
