/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectType } from '../models/ProjectType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectTypesService {
  /**
   * Get all project types
   * Returns all [project types](https://confluence.atlassian.com/x/Var1Nw), whether or not the instance has a valid license for each type.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None.
   * @returns ProjectType Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllProjectTypes(): CancelablePromise<Array<ProjectType>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/type',
      errors: {
        401: `Returned if the authentication credentials are incorrect.`,
      },
    });
  }
  /**
   * Get licensed project types
   * Returns all [project types](https://confluence.atlassian.com/x/Var1Nw) with a valid license.
   * @returns ProjectType Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllAccessibleProjectTypes(): CancelablePromise<Array<ProjectType>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/type/accessible',
    });
  }
  /**
   * Get project type by key
   * Returns a [project type](https://confluence.atlassian.com/x/Var1Nw).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None.
   * @param projectTypeKey The key of the project type.
   * @returns ProjectType Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectTypeByKey(
    projectTypeKey: 'software' | 'service_desk' | 'business' | 'product_discovery',
  ): CancelablePromise<ProjectType> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/type/{projectTypeKey}',
      path: {
        'projectTypeKey': projectTypeKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect.`,
        404: `Returned if the project type is not found.`,
      },
    });
  }
  /**
   * Get accessible project type by key
   * Returns a [project type](https://confluence.atlassian.com/x/Var1Nw) if it is accessible to the user.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param projectTypeKey The key of the project type.
   * @returns ProjectType Returned if the request is successful.
   * @throws ApiError
   */
  public static getAccessibleProjectTypeByKey(
    projectTypeKey: 'software' | 'service_desk' | 'business' | 'product_discovery',
  ): CancelablePromise<ProjectType> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/type/{projectTypeKey}/accessible',
      path: {
        'projectTypeKey': projectTypeKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project type is not accessible to the user.`,
      },
    });
  }
}
