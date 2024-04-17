/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { StatusDetails } from '../models/StatusDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkflowStatusesService {
  /**
   * Get all statuses
   * Returns a list of all statuses associated with active workflows.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None.
   * @returns StatusDetails Returned if the request is successful.
   * @throws ApiError
   */
  public static getStatuses(): CancelablePromise<Array<StatusDetails>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/status',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get status
   * Returns a status. The status must be associated with an active workflow to be returned.
   *
   * If a name is used on more than one status, only the status found first is returned. Therefore, identifying the status by its ID may be preferable.
   *
   * This operation can be accessed anonymously.
   *
   * [Permissions](#permissions) required: None.
   * @param idOrName The ID or name of the status.
   * @returns StatusDetails Returned if the request is successful.
   * @throws ApiError
   */
  public static getStatus(
    idOrName: string,
  ): CancelablePromise<StatusDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/status/{idOrName}',
      path: {
        'idOrName': idOrName,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  the status is not found.
         *  the status is not associated with a workflow.
         *  the user does not have the required permissions.`,
      },
    });
  }
}
