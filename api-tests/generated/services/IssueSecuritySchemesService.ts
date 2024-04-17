/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AddSecuritySchemeLevelsRequestBean } from '../models/AddSecuritySchemeLevelsRequestBean';
import type { AssociateSecuritySchemeWithProjectDetails } from '../models/AssociateSecuritySchemeWithProjectDetails';
import type { CreateIssueSecuritySchemeDetails } from '../models/CreateIssueSecuritySchemeDetails';
import type { PageBeanIssueSecuritySchemeToProjectMapping } from '../models/PageBeanIssueSecuritySchemeToProjectMapping';
import type { PageBeanSecurityLevel } from '../models/PageBeanSecurityLevel';
import type { PageBeanSecurityLevelMember } from '../models/PageBeanSecurityLevelMember';
import type { PageBeanSecuritySchemeWithProjects } from '../models/PageBeanSecuritySchemeWithProjects';
import type { SecurityScheme } from '../models/SecurityScheme';
import type { SecuritySchemeId } from '../models/SecuritySchemeId';
import type { SecuritySchemeMembersRequest } from '../models/SecuritySchemeMembersRequest';
import type { SecuritySchemes } from '../models/SecuritySchemes';
import type { SetDefaultLevelsRequest } from '../models/SetDefaultLevelsRequest';
import type { UpdateIssueSecurityLevelDetails } from '../models/UpdateIssueSecurityLevelDetails';
import type { UpdateIssueSecuritySchemeRequestBean } from '../models/UpdateIssueSecuritySchemeRequestBean';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueSecuritySchemesService {
  /**
   * Get issue security schemes
   * Returns all [issue security schemes](https://confluence.atlassian.com/x/J4lKLg).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns SecuritySchemes Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssueSecuritySchemes(): CancelablePromise<SecuritySchemes> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuesecurityschemes',
      errors: {
        401: `Returned if the authentication credentials are incorrect.`,
        403: `Returned if the user does not have permission to administer issue security schemes.`,
      },
    });
  }
  /**
   * Create issue security scheme
   * Creates a security scheme with security scheme levels and levels' members. You can create up to 100 security scheme levels and security scheme levels' members per request.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns SecuritySchemeId Returned if the request is successful.
   * @throws ApiError
   */
  public static createIssueSecurityScheme(
    requestBody: CreateIssueSecuritySchemeDetails,
  ): CancelablePromise<SecuritySchemeId> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issuesecurityschemes',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
      },
    });
  }
  /**
   * Get issue security levels
   * Returns a [paginated](#pagination) list of issue security levels.
   *
   * Only issue security levels in the context of classic projects are returned.
   *
   * Filtering using IDs is inclusive: if you specify both security scheme IDs and level IDs, the result will include both specified issue security levels and all issue security levels from the specified schemes.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of issue security scheme level IDs. To include multiple issue security levels, separate IDs with an ampersand: `id=10000&id=10001`.
   * @param schemeId The list of issue security scheme IDs. To include multiple issue security schemes, separate IDs with an ampersand: `schemeId=10000&schemeId=10001`.
   * @param onlyDefault When set to true, returns multiple default levels for each security scheme containing a default. If you provide scheme and level IDs not associated with the default, returns an empty page. The default value is false.
   * @returns PageBeanSecurityLevel Returned if the request is successful.
   * @throws ApiError
   */
  public static getSecurityLevels(
    startAt: string = '0',
    maxResults: string = '50',
    id?: Array<string>,
    schemeId?: Array<string>,
    onlyDefault: boolean = false,
  ): CancelablePromise<PageBeanSecurityLevel> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuesecurityschemes/level',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'schemeId': schemeId,
        'onlyDefault': onlyDefault,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
      },
    });
  }
  /**
   * Set default issue security levels
   * Sets default issue security levels for schemes.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static setDefaultLevels(
    requestBody: SetDefaultLevelsRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuesecurityschemes/level/default',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue resolution isn't found.`,
      },
    });
  }
  /**
   * Get issue security level members
   * Returns a [paginated](#pagination) list of issue security level members.
   *
   * Only issue security level members in the context of classic projects are returned.
   *
   * Filtering using parameters is inclusive: if you specify both security scheme IDs and level IDs, the result will include all issue security level members from the specified schemes and levels.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of issue security level member IDs. To include multiple issue security level members separate IDs with an ampersand: `id=10000&id=10001`.
   * @param schemeId The list of issue security scheme IDs. To include multiple issue security schemes separate IDs with an ampersand: `schemeId=10000&schemeId=10001`.
   * @param levelId The list of issue security level IDs. To include multiple issue security levels separate IDs with an ampersand: `levelId=10000&levelId=10001`.
   * @param expand Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `all` Returns all expandable information
   * *  `field` Returns information about the custom field granted the permission
   * *  `group` Returns information about the group that is granted the permission
   * *  `projectRole` Returns information about the project role granted the permission
   * *  `user` Returns information about the user who is granted the permission
   * @returns PageBeanSecurityLevelMember Returned if the request is successful.
   * @throws ApiError
   */
  public static getSecurityLevelMembers(
    startAt: string = '0',
    maxResults: string = '50',
    id?: Array<string>,
    schemeId?: Array<string>,
    levelId?: Array<string>,
    expand?: string,
  ): CancelablePromise<PageBeanSecurityLevelMember> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuesecurityschemes/level/member',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'schemeId': schemeId,
        'levelId': levelId,
        'expand': expand,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
      },
    });
  }
  /**
   * Get projects using issue security schemes
   * Returns a [paginated](#pagination) mapping of projects that are using security schemes. You can provide either one or multiple security scheme IDs or project IDs to filter by. If you don't provide any, this will return a list of all mappings. Only issue security schemes in the context of classic projects are supported. **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param issueSecuritySchemeId The list of security scheme IDs to be filtered out.
   * @param projectId The list of project IDs to be filtered out.
   * @returns PageBeanIssueSecuritySchemeToProjectMapping Returned if the request is successful.
   * @throws ApiError
   */
  public static searchProjectsUsingSecuritySchemes(
    startAt: string = '0',
    maxResults: string = '50',
    issueSecuritySchemeId?: Array<string>,
    projectId?: Array<string>,
  ): CancelablePromise<PageBeanIssueSecuritySchemeToProjectMapping> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuesecurityschemes/project',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'issueSecuritySchemeId': issueSecuritySchemeId,
        'projectId': projectId,
      },
      errors: {
        400: `Returned if the search criteria is invalid.If you specify the project ID parameter`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
      },
    });
  }
  /**
   * Associate security scheme to project
   * Associates an issue security scheme with a project and remaps security levels of issues to the new levels, if provided.
   *
   * This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static associateSchemesToProjects(
    requestBody: AssociateSecuritySchemeWithProjectDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuesecurityschemes/project',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        303: `Returned if the request is successful.`,
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the security scheme isn't found.`,
        409: `Returned if a task to remove the issue security level is already running.`,
      },
    });
  }
  /**
   * Search issue security schemes
   * Returns a [paginated](#pagination) list of issue security schemes.
   * If you specify the project ID parameter, the result will contain issue security schemes and related project IDs you filter by. Use \{@link IssueSecuritySchemeResource\#searchProjectsUsingSecuritySchemes(String, String, Set, Set)\} to obtain all projects related to scheme.
   *
   * Only issue security schemes in the context of classic projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of issue security scheme IDs. To include multiple issue security scheme IDs, separate IDs with an ampersand: `id=10000&id=10001`.
   * @param projectId The list of project IDs. To include multiple project IDs, separate IDs with an ampersand: `projectId=10000&projectId=10001`.
   * @returns PageBeanSecuritySchemeWithProjects Returned if the request is successful.
   * @throws ApiError
   */
  public static searchSecuritySchemes(
    startAt: string = '0',
    maxResults: string = '50',
    id?: Array<string>,
    projectId?: Array<string>,
  ): CancelablePromise<PageBeanSecuritySchemeWithProjects> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuesecurityschemes/search',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'projectId': projectId,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
      },
    });
  }
  /**
   * Get issue security scheme
   * Returns an issue security scheme along with its security levels.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * *  *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for a project that uses the requested issue security scheme.
   * @param id The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-2-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
   * @returns SecurityScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssueSecurityScheme(
    id: number,
  ): CancelablePromise<SecurityScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuesecurityschemes/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the administrator permission and the scheme is not used in any project where the user has administrative permission.`,
      },
    });
  }
  /**
   * Update issue security scheme
   * Updates the issue security scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the issue security scheme.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateIssueSecurityScheme(
    id: string,
    requestBody: UpdateIssueSecuritySchemeRequestBean,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuesecurityschemes/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue security scheme isn't found.`,
      },
    });
  }
  /**
   * Delete issue security scheme
   * Deletes an issue security scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param schemeId The ID of the issue security scheme.
   * @returns void
   * @throws ApiError
   */
  public static deleteSecurityScheme(
    schemeId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issuesecurityschemes/{schemeId}',
      path: {
        'schemeId': schemeId,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue security scheme isn't found.`,
      },
    });
  }
  /**
   * Add issue security levels
   * Adds levels and levels' members to the issue security scheme. You can add up to 100 levels per request.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param schemeId The ID of the issue security scheme.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static addSecurityLevel(
    schemeId: string,
    requestBody: AddSecuritySchemeLevelsRequestBean,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuesecurityschemes/{schemeId}/level',
      path: {
        'schemeId': schemeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the security scheme isn't found.`,
      },
    });
  }
  /**
   * Remove issue security level
   * Deletes an issue security level.
   *
   * This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param schemeId The ID of the issue security scheme.
   * @param levelId The ID of the issue security level to remove.
   * @param replaceWith The ID of the issue security level that will replace the currently selected level.
   * @returns void
   * @throws ApiError
   */
  public static removeLevel(
    schemeId: string,
    levelId: string,
    replaceWith?: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issuesecurityschemes/{schemeId}/level/{levelId}',
      path: {
        'schemeId': schemeId,
        'levelId': levelId,
      },
      query: {
        'replaceWith': replaceWith,
      },
      errors: {
        303: `Returned if the request is successful.`,
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue security level isn't found.`,
        409: `Returned if a task to remove the issue security level is already running.`,
      },
    });
  }
  /**
   * Update issue security level
   * Updates the issue security level.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param schemeId The ID of the issue security scheme level belongs to.
   * @param levelId The ID of the issue security level to update.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateSecurityLevel(
    schemeId: string,
    levelId: string,
    requestBody: UpdateIssueSecurityLevelDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuesecurityschemes/{schemeId}/level/{levelId}',
      path: {
        'schemeId': schemeId,
        'levelId': levelId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue security level isn't found.`,
      },
    });
  }
  /**
   * Add issue security level members
   * Adds members to the issue security level. You can add up to 100 members per request.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param schemeId The ID of the issue security scheme.
   * @param levelId The ID of the issue security level.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static addSecurityLevelMembers(
    schemeId: string,
    levelId: string,
    requestBody: SecuritySchemeMembersRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuesecurityschemes/{schemeId}/level/{levelId}/member',
      path: {
        'schemeId': schemeId,
        'levelId': levelId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the security scheme isn't found.`,
      },
    });
  }
  /**
   * Remove member from issue security level
   * Removes an issue security level member from an issue security scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param schemeId The ID of the issue security scheme.
   * @param levelId The ID of the issue security level.
   * @param memberId The ID of the issue security level member to be removed.
   * @returns void
   * @throws ApiError
   */
  public static removeMemberFromSecurityLevel(
    schemeId: string,
    levelId: string,
    memberId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issuesecurityschemes/{schemeId}/level/{levelId}/member/{memberId}',
      path: {
        'schemeId': schemeId,
        'levelId': levelId,
        'memberId': memberId,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the security scheme isn't found.`,
      },
    });
  }
}
