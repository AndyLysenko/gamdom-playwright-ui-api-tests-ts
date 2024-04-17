/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { IdBean } from '../models/IdBean';
import type { PermissionScheme } from '../models/PermissionScheme';
import type { ProjectIssueSecurityLevels } from '../models/ProjectIssueSecurityLevels';
import type { SecurityScheme } from '../models/SecurityScheme';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectPermissionSchemesService {
  /**
   * Get project issue security scheme
   * Returns the [issue security scheme](https://confluence.atlassian.com/x/J4lKLg) associated with the project.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or the *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
   * @param projectKeyOrId The project ID or project key (case sensitive).
   * @returns SecurityScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectIssueSecurityScheme(
    projectKeyOrId: string,
  ): CancelablePromise<SecurityScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectKeyOrId}/issuesecuritylevelscheme',
      path: {
        'projectKeyOrId': projectKeyOrId,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the project is visible to the user but the user doesn't have administrative permissions.`,
        404: `Returned if the project is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Get assigned permission scheme
   * Gets the [permission scheme](https://confluence.atlassian.com/x/yodKLg) associated with the project.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg).
   * @param projectKeyOrId The project ID or project key (case sensitive).
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:
   *
   * *  `all` Returns all expandable information.
   * *  `field` Returns information about the custom field granted the permission.
   * *  `group` Returns information about the group that is granted the permission.
   * *  `permissions` Returns all permission grants for each permission scheme.
   * *  `projectRole` Returns information about the project role granted the permission.
   * *  `user` Returns information about the user who is granted the permission.
   * @returns PermissionScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getAssignedPermissionScheme(
    projectKeyOrId: string,
    expand?: string,
  ): CancelablePromise<PermissionScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectKeyOrId}/permissionscheme',
      path: {
        'projectKeyOrId': projectKeyOrId,
      },
      query: {
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to view the project's configuration.`,
        404: `Returned if the project is not found or the user does not have permission to view the project.`,
      },
    });
  }
  /**
   * Assign permission scheme
   * Assigns a permission scheme with a project. See [Managing project permissions](https://confluence.atlassian.com/x/yodKLg) for more information about permission schemes.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg)
   * @param projectKeyOrId The project ID or project key (case sensitive).
   * @param requestBody
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:
   *
   * *  `all` Returns all expandable information.
   * *  `field` Returns information about the custom field granted the permission.
   * *  `group` Returns information about the group that is granted the permission.
   * *  `permissions` Returns all permission grants for each permission scheme.
   * *  `projectRole` Returns information about the project role granted the permission.
   * *  `user` Returns information about the user who is granted the permission.
   * @returns PermissionScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static assignPermissionScheme(
    projectKeyOrId: string,
    requestBody: IdBean,
    expand?: string,
  ): CancelablePromise<PermissionScheme> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/project/{projectKeyOrId}/permissionscheme',
      path: {
        'projectKeyOrId': projectKeyOrId,
      },
      query: {
        'expand': expand,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if:
         *  the user does not have the necessary permission to edit the project's configuration.
         *  the Jira instance is Jira Core Free or Jira Software Free. Permission schemes cannot be assigned to projects on free plans.`,
        404: `Returned if the project or permission scheme is not found.`,
      },
    });
  }
  /**
   * Get project issue security levels
   * Returns all [issue security](https://confluence.atlassian.com/x/J4lKLg) levels for the project that the user has access to.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse projects* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project, however, issue security levels are only returned for authenticated user with *Set Issue Security* [global permission](https://confluence.atlassian.com/x/x4dKLg) for the project.
   * @param projectKeyOrId The project ID or project key (case sensitive).
   * @returns ProjectIssueSecurityLevels Returned if the request is successful.
   * @throws ApiError
   */
  public static getSecurityLevelsForProject(
    projectKeyOrId: string,
  ): CancelablePromise<ProjectIssueSecurityLevels> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectKeyOrId}/securitylevel',
      path: {
        'projectKeyOrId': projectKeyOrId,
      },
      errors: {
        404: `Returned if the project is not found or the user does not have permission to view it.`,
      },
    });
  }
}
