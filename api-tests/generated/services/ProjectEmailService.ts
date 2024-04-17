/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectEmailAddress } from '../models/ProjectEmailAddress';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectEmailService {
  /**
   * Get project's sender email
   * Returns the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).
   *
   * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param projectId The project ID.
   * @returns ProjectEmailAddress Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectEmail(
    projectId: number,
  ): CancelablePromise<ProjectEmailAddress> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectId}/email',
      path: {
        'projectId': projectId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to read project.`,
        404: `Returned if the project or project's sender email address is not found.`,
      },
    });
  }
  /**
   * Set project's sender email
   * Sets the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).
   *
   * If `emailAddress` is an empty string, the default email address is restored.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)
   * @param projectId The project ID.
   * @param requestBody The project's sender email address to be set.
   * @returns void
   * @throws ApiError
   */
  public static updateProjectEmail(
    projectId: number,
    requestBody: ProjectEmailAddress,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/project/{projectId}/email',
      path: {
        'projectId': projectId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid, if the email address is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to administer the project.`,
        404: `Returned if the project is not found.`,
      },
    });
  }
}
