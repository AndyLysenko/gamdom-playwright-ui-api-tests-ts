/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CreatePriorityDetails } from '../models/CreatePriorityDetails';
import type { PageBeanPriority } from '../models/PageBeanPriority';
import type { Priority } from '../models/Priority';
import type { PriorityId } from '../models/PriorityId';
import type { ReorderIssuePriorities } from '../models/ReorderIssuePriorities';
import type { SetDefaultPriorityRequest } from '../models/SetDefaultPriorityRequest';
import type { UpdatePriorityDetails } from '../models/UpdatePriorityDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssuePrioritiesService {
  /**
   * @deprecated
   * Get priorities
   * Returns the list of all issue priorities.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @returns Priority Returned if the request is successful.
   * @throws ApiError
   */
  public static getPriorities(): CancelablePromise<Array<Priority>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/priority',
      errors: {
        401: `Returned if the authentication credentials are incorrect.`,
      },
    });
  }
  /**
   * Create priority
   * Creates an issue priority.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns PriorityId Returned if the request is successful.
   * @throws ApiError
   */
  public static createPriority(
    requestBody: CreatePriorityDetails,
  ): CancelablePromise<PriorityId> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/priority',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
      },
    });
  }
  /**
   * Set default priority
   * Sets default issue priority.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static setDefaultPriority(
    requestBody: SetDefaultPriorityRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/priority/default',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue priority isn't found.`,
      },
    });
  }
  /**
   * Move priorities
   * Changes the order of issue priorities.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static movePriorities(
    requestBody: ReorderIssuePriorities,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/priority/move',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue priority isn't found.`,
      },
    });
  }
  /**
   * Search priorities
   * Returns a [paginated](#pagination) list of priorities. The list can contain all priorities or a subset determined by any combination of these criteria:
   *
   * *  a list of priority IDs. Any invalid priority IDs are ignored.
   * *  a list of project IDs. Only priorities that are available in these projects will be returned. Any invalid project IDs are ignored.
   * *  whether the field configuration is a default. This returns priorities from company-managed (classic) projects only, as there is no concept of default priorities in team-managed projects.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of priority IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=2&id=3`.
   * @param projectId The list of projects IDs. To include multiple IDs, provide an ampersand-separated list. For example, `projectId=10010&projectId=10111`.
   * @param priorityName The name of priority to search for.
   * @param onlyDefault Whether only the default priority is returned.
   * @param expand Use `schemes` to return the associated priority schemes for each priority. Limited to returning first 15 priority schemes per priority.
   * @returns PageBeanPriority Returned if the request is successful.
   * @throws ApiError
   */
  public static searchPriorities(
    startAt: string = '0',
    maxResults: string = '50',
    id?: Array<string>,
    projectId?: Array<string>,
    priorityName: string = '',
    onlyDefault: boolean = false,
    expand: string = '',
  ): CancelablePromise<PageBeanPriority> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/priority/search',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'projectId': projectId,
        'priorityName': priorityName,
        'onlyDefault': onlyDefault,
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * @deprecated
   * Delete priority
   * *Deprecated: please refer to the* [changelog](https://developer.atlassian.com/changelog/#CHANGE-1066) *for more details.*
   *
   * Deletes an issue priority.
   *
   * This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the issue priority.
   * @param replaceWith The ID of the issue priority that will replace the currently selected resolution.
   * @returns void
   * @throws ApiError
   */
  public static deletePriority(
    id: string,
    replaceWith: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/priority/{id}',
      path: {
        'id': id,
      },
      query: {
        'replaceWith': replaceWith,
      },
      errors: {
        303: `Returned if the request is successful.`,
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue priority isn't found.`,
        409: `Returned if a task to delete the issue priority is already running.`,
      },
    });
  }
  /**
   * Get priority
   * Returns an issue priority.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param id The ID of the issue priority.
   * @returns Priority Returned if the request is successful.
   * @throws ApiError
   */
  public static getPriority(
    id: string,
  ): CancelablePromise<Priority> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/priority/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect.`,
        404: `Returned if the issue priority isn't found.`,
      },
    });
  }
  /**
   * Update priority
   * Updates an issue priority.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the issue priority.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updatePriority(
    id: string,
    requestBody: UpdatePriorityDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/priority/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue priority isn't found.`,
      },
    });
  }
}
