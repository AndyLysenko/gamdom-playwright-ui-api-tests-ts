/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ServerInformation } from '../models/ServerInformation';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ServerInfoService {
  /**
   * Get Jira instance info
   * Returns information about the Jira instance.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None.
   * @returns ServerInformation Returned if the request is successful.
   * @throws ApiError
   */
  public static getServerInfo(): CancelablePromise<ServerInformation> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/serverInfo',
      errors: {
        401: `Returned if the authentication credentials are incorrect.`,
      },
    });
  }
}
