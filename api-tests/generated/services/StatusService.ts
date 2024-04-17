/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JiraStatus } from '../models/JiraStatus';
import type { PageOfStatuses } from '../models/PageOfStatuses';
import type { StatusCreateRequest } from '../models/StatusCreateRequest';
import type { StatusUpdateRequest } from '../models/StatusUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StatusService {
  /**
   * Bulk delete Statuses
   * Deletes statuses by ID.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)
   * *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
   * @param id The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.
   *
   * Min items `1`, Max items `50`
   * @returns void
   * @throws ApiError
   */
  public static deleteStatusesById(
    id: Array<string>,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/statuses',
      query: {
        'id': id,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation.`,
      },
    });
  }
  /**
   * Bulk get statuses
   * Returns a list of the statuses specified by one or more status IDs.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)
   * *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
   * @param id The list of status IDs. To include multiple IDs, provide an ampersand-separated list. For example, id=10000&id=10001.
   *
   * Min items `1`, Max items `50`
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `usages` Returns the project and issue types that use the status in their workflow.
   * *  `workflowUsages` Returns the workflows that use the status.
   * @returns JiraStatus Returned if the request is successful.
   * @throws ApiError
   */
  public static getStatusesById(
    id: Array<string>,
    expand?: string,
  ): CancelablePromise<Array<JiraStatus>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/statuses',
      query: {
        'expand': expand,
        'id': id,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation.`,
      },
    });
  }
  /**
   * Bulk create statuses
   * Creates statuses for a global or project scope.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)
   * *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
   * @param requestBody Details of the statuses being created and their scope.
   * @returns JiraStatus Returned if the request is successful.
   * @throws ApiError
   */
  public static createStatuses(
    requestBody: StatusCreateRequest,
  ): CancelablePromise<Array<JiraStatus>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/statuses',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation.`,
        409: `Returned if another workflow configuration update task is ongoing.`,
      },
    });
  }
  /**
   * Bulk update statuses
   * Updates statuses by ID.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)
   * *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
   * @param requestBody The list of statuses that will be updated.
   * @returns void
   * @throws ApiError
   */
  public static updateStatuses(
    requestBody: StatusUpdateRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/statuses',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation.`,
        409: `Returned if another workflow configuration update task is ongoing.`,
      },
    });
  }
  /**
   * Search statuses paginated
   * Returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of statuses that match a search on name or project.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Administer projects* [project permission.](https://confluence.atlassian.com/x/yodKLg)
   * *  *Administer Jira* [project permission.](https://confluence.atlassian.com/x/yodKLg)
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `usages` Returns the project and issue types that use the status in their workflow.
   * *  `workflowUsages` Returns the workflows that use the status.
   * @param projectId The project the status is part of or null for global statuses.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param searchString Term to match status names against or null to search for all statuses in the search scope.
   * @param statusCategory Category of the status to filter by. The supported values are: `TODO`, `IN_PROGRESS`, and `DONE`.
   * @returns PageOfStatuses Returned if the request is successful.
   * @throws ApiError
   */
  public static search(
    expand?: string,
    projectId?: string,
    startAt?: number,
    maxResults: number = 200,
    searchString?: string,
    statusCategory?: string,
  ): CancelablePromise<PageOfStatuses> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/statuses/search',
      query: {
        'expand': expand,
        'projectId': projectId,
        'startAt': startAt,
        'maxResults': maxResults,
        'searchString': searchString,
        'statusCategory': statusCategory,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing, or the caller doesn't have permissions to perform the operation.`,
      },
    });
  }
}
