/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { DataClassificationLevelsBean } from '../models/DataClassificationLevelsBean';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ClassificationLevelsService {
  /**
   * Get all classification levels
   * Returns all classification levels.
   *
   * **[Permissions](#permissions) required:** None.
   * @param status Optional set of statuses to filter by.
   * @param orderBy Ordering of the results by a given field. If not provided, values will not be sorted.
   * @returns DataClassificationLevelsBean Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllUserDataClassificationLevels(
    status?: Array<'PUBLISHED' | 'ARCHIVED' | 'DRAFT'>,
    orderBy?: 'rank' | '-rank' | '+rank',
  ): CancelablePromise<DataClassificationLevelsBean> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/classification-levels',
      query: {
        'status': status,
        'orderBy': orderBy,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
}
