/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ApplicationRole } from '../models/ApplicationRole';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ApplicationRolesService {
  /**
   * Get all application roles
   * Returns all application roles. In Jira, application roles are managed using the [Application access configuration](https://confluence.atlassian.com/x/3YxjL) page.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns ApplicationRole Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllApplicationRoles(): CancelablePromise<Array<ApplicationRole>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/applicationrole',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user is not an administrator.`,
      },
    });
  }
  /**
   * Get application role
   * Returns an application role.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param key The key of the application role. Use the [Get all application roles](#api-rest-api-2-applicationrole-get) operation to get the key for each application role.
   * @returns ApplicationRole Returned if the request is successful.
   * @throws ApiError
   */
  public static getApplicationRole(
    key: string,
  ): CancelablePromise<ApplicationRole> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/applicationrole/{key}',
      path: {
        'key': key,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user is not an administrator.`,
        404: `Returned if the role is not found.`,
      },
    });
  }
}
