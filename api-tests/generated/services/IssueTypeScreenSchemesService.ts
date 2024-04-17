/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { IssueTypeIds } from '../models/IssueTypeIds';
import type { IssueTypeScreenSchemeDetails } from '../models/IssueTypeScreenSchemeDetails';
import type { IssueTypeScreenSchemeId } from '../models/IssueTypeScreenSchemeId';
import type { IssueTypeScreenSchemeMappingDetails } from '../models/IssueTypeScreenSchemeMappingDetails';
import type { IssueTypeScreenSchemeProjectAssociation } from '../models/IssueTypeScreenSchemeProjectAssociation';
import type { IssueTypeScreenSchemeUpdateDetails } from '../models/IssueTypeScreenSchemeUpdateDetails';
import type { PageBeanIssueTypeScreenScheme } from '../models/PageBeanIssueTypeScreenScheme';
import type { PageBeanIssueTypeScreenSchemeItem } from '../models/PageBeanIssueTypeScreenSchemeItem';
import type { PageBeanIssueTypeScreenSchemesProjects } from '../models/PageBeanIssueTypeScreenSchemesProjects';
import type { PageBeanProjectDetails } from '../models/PageBeanProjectDetails';
import type { UpdateDefaultScreenScheme } from '../models/UpdateDefaultScreenScheme';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueTypeScreenSchemesService {
  /**
   * Get issue type screen schemes
   * Returns a [paginated](#pagination) list of issue type screen schemes.
   *
   * Only issue type screen schemes used in classic projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
   * @param queryString String used to perform a case-insensitive partial match with issue type screen scheme name.
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `name` Sorts by issue type screen scheme name.
   * *  `id` Sorts by issue type screen scheme ID.
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts `projects` that, for each issue type screen schemes, returns information about the projects the issue type screen scheme is assigned to.
   * @returns PageBeanIssueTypeScreenScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssueTypeScreenSchemes(
    startAt?: number,
    maxResults: number = 50,
    id?: Array<number>,
    queryString: string = '',
    orderBy: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' = 'id',
    expand: string = '',
  ): CancelablePromise<PageBeanIssueTypeScreenScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuetypescreenscheme',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'queryString': queryString,
        'orderBy': orderBy,
        'expand': expand,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Create issue type screen scheme
   * Creates an issue type screen scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody An issue type screen scheme bean.
   * @returns IssueTypeScreenSchemeId Returned if the request is successful.
   * @throws ApiError
   */
  public static createIssueTypeScreenScheme(
    requestBody: IssueTypeScreenSchemeDetails,
  ): CancelablePromise<IssueTypeScreenSchemeId> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issuetypescreenscheme',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type or screen scheme is not found.`,
        409: `Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings.`,
      },
    });
  }
  /**
   * Get issue type screen scheme items
   * Returns a [paginated](#pagination) list of issue type screen scheme items.
   *
   * Only issue type screen schemes used in classic projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param issueTypeScreenSchemeId The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: `issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001`.
   * @returns PageBeanIssueTypeScreenSchemeItem Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssueTypeScreenSchemeMappings(
    startAt?: number,
    maxResults: number = 50,
    issueTypeScreenSchemeId?: Array<number>,
  ): CancelablePromise<PageBeanIssueTypeScreenSchemeItem> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuetypescreenscheme/mapping',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'issueTypeScreenSchemeId': issueTypeScreenSchemeId,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Get issue type screen schemes for projects
   * Returns a [paginated](#pagination) list of issue type screen schemes and, for each issue type screen scheme, a list of the projects that use it.
   *
   * Only issue type screen schemes used in classic projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectId The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanIssueTypeScreenSchemesProjects Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssueTypeScreenSchemeProjectAssociations(
    projectId: Array<number>,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanIssueTypeScreenSchemesProjects> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuetypescreenscheme/project',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'projectId': projectId,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Assign issue type screen scheme to project
   * Assigns an issue type screen scheme to a project.
   *
   * Issue type screen schemes can only be assigned to classic projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static assignIssueTypeScreenSchemeToProject(
    requestBody: IssueTypeScreenSchemeProjectAssociation,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuetypescreenscheme/project',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  project is not found.
         *  issue type screen scheme is not found.
         *  the project is not a classic project.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type screen scheme or the project are missing.`,
      },
    });
  }
  /**
   * Delete issue type screen scheme
   * Deletes an issue type screen scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueTypeScreenSchemeId The ID of the issue type screen scheme.
   * @returns void
   * @throws ApiError
   */
  public static deleteIssueTypeScreenScheme(
    issueTypeScreenSchemeId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}',
      path: {
        'issueTypeScreenSchemeId': issueTypeScreenSchemeId,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type screen scheme is not found.`,
      },
    });
  }
  /**
   * Update issue type screen scheme
   * Updates an issue type screen scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueTypeScreenSchemeId The ID of the issue type screen scheme.
   * @param requestBody The issue type screen scheme update details.
   * @returns void
   * @throws ApiError
   */
  public static updateIssueTypeScreenScheme(
    issueTypeScreenSchemeId: string,
    requestBody: IssueTypeScreenSchemeUpdateDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}',
      path: {
        'issueTypeScreenSchemeId': issueTypeScreenSchemeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type screen scheme is not found.`,
      },
    });
  }
  /**
   * Append mappings to issue type screen scheme
   * Appends issue type to screen scheme mappings to an issue type screen scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueTypeScreenSchemeId The ID of the issue type screen scheme.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static appendMappingsForIssueTypeScreenScheme(
    issueTypeScreenSchemeId: string,
    requestBody: IssueTypeScreenSchemeMappingDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping',
      path: {
        'issueTypeScreenSchemeId': issueTypeScreenSchemeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type screen scheme, issue type, or screen scheme is not found.`,
        409: `Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings.`,
      },
    });
  }
  /**
   * Update issue type screen scheme default screen scheme
   * Updates the default screen scheme of an issue type screen scheme. The default screen scheme is used for all unmapped issue types.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueTypeScreenSchemeId The ID of the issue type screen scheme.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateDefaultScreenScheme(
    issueTypeScreenSchemeId: string,
    requestBody: UpdateDefaultScreenScheme,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/default',
      path: {
        'issueTypeScreenSchemeId': issueTypeScreenSchemeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type screen scheme or the screen scheme is not found, or the screen scheme isn't used in classic projects.`,
      },
    });
  }
  /**
   * Remove mappings from issue type screen scheme
   * Removes issue type to screen scheme mappings from an issue type screen scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueTypeScreenSchemeId The ID of the issue type screen scheme.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static removeMappingsFromIssueTypeScreenScheme(
    issueTypeScreenSchemeId: string,
    requestBody: IssueTypeIds,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}/mapping/remove',
      path: {
        'issueTypeScreenSchemeId': issueTypeScreenSchemeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type screen scheme or one or more issue type mappings are not found.`,
      },
    });
  }
  /**
   * Get issue type screen scheme projects
   * Returns a [paginated](#pagination) list of projects associated with an issue type screen scheme.
   *
   * Only company-managed projects associated with an issue type screen scheme are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueTypeScreenSchemeId The ID of the issue type screen scheme.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param query
   * @returns PageBeanProjectDetails Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectsForIssueTypeScreenScheme(
    issueTypeScreenSchemeId: number,
    startAt?: number,
    maxResults: number = 50,
    query: string = '',
  ): CancelablePromise<PageBeanProjectDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuetypescreenscheme/{issueTypeScreenSchemeId}/project',
      path: {
        'issueTypeScreenSchemeId': issueTypeScreenSchemeId,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'query': query,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
      },
    });
  }
}
