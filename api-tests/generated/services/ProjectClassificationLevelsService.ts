/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { UpdateDefaultProjectClassificationBean } from '../models/UpdateDefaultProjectClassificationBean';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectClassificationLevelsService {
  /**
   * Remove the default data classification level from a project
   * Remove the default data classification level for a project.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  *Administer jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectIdOrKey The project ID or project key (case-sensitive).
   * @returns void
   * @throws ApiError
   */
  public static removeDefaultProjectClassification(
    projectIdOrKey: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/project/{projectIdOrKey}/classification-level/default',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the project is not found.`,
      },
    });
  }
  /**
   * Get the default data classification level of a project
   * Returns the default data classification for a project.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  *Administer jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectIdOrKey The project ID or project key (case-sensitive).
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static getDefaultProjectClassification(
    projectIdOrKey: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/classification-level/default',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      errors: {
        401: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the project is not found.`,
      },
    });
  }
  /**
   * Update the default data classification level of a project
   * Updates the default data classification level for a project.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * *  *Administer jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectIdOrKey The project ID or project key (case-sensitive).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateDefaultProjectClassification(
    projectIdOrKey: string,
    requestBody: UpdateDefaultProjectClassificationBean,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/project/{projectIdOrKey}/classification-level/default',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the project is not found.`,
      },
    });
  }
}
