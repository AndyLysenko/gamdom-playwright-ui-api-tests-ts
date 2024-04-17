/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectCategory } from '../models/ProjectCategory';
import type { UpdatedProjectCategory } from '../models/UpdatedProjectCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectCategoriesService {
  /**
   * Get all project categories
   * Returns all project categories.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @returns ProjectCategory Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllProjectCategories(): CancelablePromise<Array<ProjectCategory>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/projectCategory',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Create project category
   * Creates a project category.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns ProjectCategory Returned if the request is successful.
   * @throws ApiError
   */
  public static createProjectCategory(
    requestBody: ProjectCategory,
  ): CancelablePromise<ProjectCategory> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/projectCategory',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  \`name\` is not provided or exceeds 255 characters.
         *  \`description\` exceeds 1000 characters.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        409: `Returned if the project category name is in use.`,
      },
    });
  }
  /**
   * Delete project category
   * Deletes a project category.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id ID of the project category to delete.
   * @returns void
   * @throws ApiError
   */
  public static removeProjectCategory(
    id: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/projectCategory/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the project category is not found.`,
      },
    });
  }
  /**
   * Get project category by ID
   * Returns a project category.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param id The ID of the project category.
   * @returns ProjectCategory Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectCategoryById(
    id: number,
  ): CancelablePromise<ProjectCategory> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/projectCategory/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the project category is not found.`,
      },
    });
  }
  /**
   * Update project category
   * Updates a project category.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id
   * @param requestBody
   * @returns UpdatedProjectCategory Returned if the request is successful.
   * @throws ApiError
   */
  public static updateProjectCategory(
    id: number,
    requestBody: ProjectCategory,
  ): CancelablePromise<UpdatedProjectCategory> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/projectCategory/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  \`name\` has been modified and exceeds 255 characters.
         *  \`description\` has been modified and exceeds 1000 characters.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the project category is not found.`,
      },
    });
  }
}
