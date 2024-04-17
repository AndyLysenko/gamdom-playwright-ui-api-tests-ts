/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { StatusCategory } from '../models/StatusCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkflowStatusCategoriesService {
  /**
   * Get all status categories
   * Returns a list of all status categories.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @returns StatusCategory Returned if the request is successful.
   * @throws ApiError
   */
  public static getStatusCategories(): CancelablePromise<Array<StatusCategory>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/statuscategory',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get status category
   * Returns a status category. Status categories provided a mechanism for categorizing [statuses](#api-rest-api-2-status-idOrName-get).
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param idOrKey The ID or key of the status category.
   * @returns StatusCategory Returned if the request is successful.
   * @throws ApiError
   */
  public static getStatusCategory(
    idOrKey: string,
  ): CancelablePromise<StatusCategory> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/statuscategory/{idOrKey}',
      path: {
        'idOrKey': idOrKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the status category is not found.`,
      },
    });
  }
}
