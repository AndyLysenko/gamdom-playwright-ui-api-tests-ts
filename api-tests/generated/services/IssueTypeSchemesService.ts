/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { IssueTypeIds } from '../models/IssueTypeIds';
import type { IssueTypeSchemeDetails } from '../models/IssueTypeSchemeDetails';
import type { IssueTypeSchemeID } from '../models/IssueTypeSchemeID';
import type { IssueTypeSchemeProjectAssociation } from '../models/IssueTypeSchemeProjectAssociation';
import type { IssueTypeSchemeUpdateDetails } from '../models/IssueTypeSchemeUpdateDetails';
import type { OrderOfIssueTypes } from '../models/OrderOfIssueTypes';
import type { PageBeanIssueTypeScheme } from '../models/PageBeanIssueTypeScheme';
import type { PageBeanIssueTypeSchemeMapping } from '../models/PageBeanIssueTypeSchemeMapping';
import type { PageBeanIssueTypeSchemeProjects } from '../models/PageBeanIssueTypeSchemeProjects';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueTypeSchemesService {
  /**
   * Get all issue type schemes
   * Returns a [paginated](#pagination) list of issue type schemes.
   *
   * Only issue type schemes used in classic projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `name` Sorts by issue type scheme name.
   * *  `id` Sorts by issue type scheme ID.
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `projects` For each issue type schemes, returns information about the projects the issue type scheme is assigned to.
   * *  `issueTypes` For each issue type schemes, returns information about the issueTypes the issue type scheme have.
   * @param queryString String used to perform a case-insensitive partial match with issue type scheme name.
   * @returns PageBeanIssueTypeScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllIssueTypeSchemes(
    startAt?: number,
    maxResults: number = 50,
    id?: Array<number>,
    orderBy: 'name' | '-name' | '+name' | 'id' | '-id' | '+id' = 'id',
    expand: string = '',
    queryString: string = '',
  ): CancelablePromise<PageBeanIssueTypeScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuetypescheme',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'orderBy': orderBy,
        'expand': expand,
        'queryString': queryString,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Create issue type scheme
   * Creates an issue type scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns IssueTypeSchemeID Returned if the request is successful.
   * @throws ApiError
   */
  public static createIssueTypeScheme(
    requestBody: IssueTypeSchemeDetails,
  ): CancelablePromise<IssueTypeSchemeID> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issuetypescheme',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        409: `Returned if the scheme name is used by another scheme.`,
      },
    });
  }
  /**
   * Get issue type scheme items
   * Returns a [paginated](#pagination) list of issue type scheme items.
   *
   * Only issue type scheme items used in classic projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param issueTypeSchemeId The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `issueTypeSchemeId=10000&issueTypeSchemeId=10001`.
   * @returns PageBeanIssueTypeSchemeMapping Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssueTypeSchemesMapping(
    startAt?: number,
    maxResults: number = 50,
    issueTypeSchemeId?: Array<number>,
  ): CancelablePromise<PageBeanIssueTypeSchemeMapping> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuetypescheme/mapping',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'issueTypeSchemeId': issueTypeSchemeId,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Get issue type schemes for projects
   * Returns a [paginated](#pagination) list of issue type schemes and, for each issue type scheme, a list of the projects that use it.
   *
   * Only issue type schemes used in classic projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectId The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanIssueTypeSchemeProjects Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssueTypeSchemeForProjects(
    projectId: Array<number>,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanIssueTypeSchemeProjects> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issuetypescheme/project',
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
   * Assign issue type scheme to project
   * Assigns an issue type scheme to a project.
   *
   * If any issues in the project are assigned issue types not present in the new scheme, the operation will fail. To complete the assignment those issues must be updated to use issue types in the new scheme.
   *
   * Issue type schemes can only be assigned to classic projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static assignIssueTypeSchemeToProject(
    requestBody: IssueTypeSchemeProjectAssociation,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuetypescheme/project',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type scheme or the project is not found.`,
      },
    });
  }
  /**
   * Delete issue type scheme
   * Deletes an issue type scheme.
   *
   * Only issue type schemes used in classic projects can be deleted.
   *
   * Any projects assigned to the scheme are reassigned to the default issue type scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueTypeSchemeId The ID of the issue type scheme.
   * @returns void
   * @throws ApiError
   */
  public static deleteIssueTypeScheme(
    issueTypeSchemeId: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issuetypescheme/{issueTypeSchemeId}',
      path: {
        'issueTypeSchemeId': issueTypeSchemeId,
      },
      errors: {
        400: `Returned if the request is to delete the default issue type scheme.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type scheme is not found.`,
      },
    });
  }
  /**
   * Update issue type scheme
   * Updates an issue type scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueTypeSchemeId The ID of the issue type scheme.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateIssueTypeScheme(
    issueTypeSchemeId: number,
    requestBody: IssueTypeSchemeUpdateDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuetypescheme/{issueTypeSchemeId}',
      path: {
        'issueTypeSchemeId': issueTypeSchemeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type scheme is not found.`,
      },
    });
  }
  /**
   * Add issue types to issue type scheme
   * Adds issue types to an issue type scheme.
   *
   * The added issue types are appended to the issue types list.
   *
   * If any of the issue types exist in the issue type scheme, the operation fails and no issue types are added.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueTypeSchemeId The ID of the issue type scheme.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static addIssueTypesToIssueTypeScheme(
    issueTypeSchemeId: number,
    requestBody: IssueTypeIds,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuetypescheme/{issueTypeSchemeId}/issuetype',
      path: {
        'issueTypeSchemeId': issueTypeSchemeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type or the issue type scheme is not found.`,
      },
    });
  }
  /**
   * Change order of issue types
   * Changes the order of issue types in an issue type scheme.
   *
   * The request body parameters must meet the following requirements:
   *
   * *  all of the issue types must belong to the issue type scheme.
   * *  either `after` or `position` must be provided.
   * *  the issue type in `after` must not be in the issue type list.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueTypeSchemeId The ID of the issue type scheme.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static reorderIssueTypesInIssueTypeScheme(
    issueTypeSchemeId: number,
    requestBody: OrderOfIssueTypes,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issuetypescheme/{issueTypeSchemeId}/issuetype/move',
      path: {
        'issueTypeSchemeId': issueTypeSchemeId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type scheme is not found.`,
      },
    });
  }
  /**
   * Remove issue type from issue type scheme
   * Removes an issue type from an issue type scheme.
   *
   * This operation cannot remove:
   *
   * *  any issue type used by issues.
   * *  any issue types from the default issue type scheme.
   * *  the last standard issue type from an issue type scheme.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param issueTypeSchemeId The ID of the issue type scheme.
   * @param issueTypeId The ID of the issue type.
   * @returns void
   * @throws ApiError
   */
  public static removeIssueTypeFromIssueTypeScheme(
    issueTypeSchemeId: number,
    issueTypeId: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issuetypescheme/{issueTypeSchemeId}/issuetype/{issueTypeId}',
      path: {
        'issueTypeSchemeId': issueTypeSchemeId,
        'issueTypeId': issueTypeId,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the issue type scheme is missing or the issue type is not found in the issue type scheme.`,
      },
    });
  }
}
