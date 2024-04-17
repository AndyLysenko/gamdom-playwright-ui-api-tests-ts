/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CreateResolutionDetails } from '../models/CreateResolutionDetails';
import type { PageBeanResolutionJsonBean } from '../models/PageBeanResolutionJsonBean';
import type { ReorderIssueResolutionsRequest } from '../models/ReorderIssueResolutionsRequest';
import type { Resolution } from '../models/Resolution';
import type { ResolutionId } from '../models/ResolutionId';
import type { SetDefaultResolutionRequest } from '../models/SetDefaultResolutionRequest';
import type { UpdateResolutionDetails } from '../models/UpdateResolutionDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueResolutionsService {
  /**
   * @deprecated
   * Get resolutions
   * Returns a list of all issue resolution values.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @returns Resolution Returned if the request is successful.
   * @throws ApiError
   */
  public static getResolutions(): CancelablePromise<Array<Resolution>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/resolution',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Create resolution
   * Creates an issue resolution.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns ResolutionId Returned if the request is successful.
   * @throws ApiError
   */
  public static createResolution(
    requestBody: CreateResolutionDetails,
  ): CancelablePromise<ResolutionId> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/resolution',
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
   * Set default resolution
   * Sets default issue resolution.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static setDefaultResolution(
    requestBody: SetDefaultResolutionRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/resolution/default',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue resolution isn't found.`,
      },
    });
  }
  /**
   * Move resolutions
   * Changes the order of issue resolutions.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static moveResolutions(
    requestBody: ReorderIssueResolutionsRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/resolution/move',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue resolution isn't found.`,
      },
    });
  }
  /**
   * Search resolutions
   * Returns a [paginated](#pagination) list of resolutions. The list can contain all resolutions or a subset determined by any combination of these criteria:
   *
   * *  a list of resolutions IDs.
   * *  whether the field configuration is a default. This returns resolutions from company-managed (classic) projects only, as there is no concept of default resolutions in team-managed projects.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of resolutions IDs to be filtered out
   * @param onlyDefault When set to true, return default only, when IDs provided, if none of them is default, return empty page. Default value is false
   * @returns PageBeanResolutionJsonBean Returned if the request is successful.
   * @throws ApiError
   */
  public static searchResolutions(
    startAt: string = '0',
    maxResults: string = '50',
    id?: Array<string>,
    onlyDefault: boolean = false,
  ): CancelablePromise<PageBeanResolutionJsonBean> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/resolution/search',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'onlyDefault': onlyDefault,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Delete resolution
   * Deletes an issue resolution.
   *
   * This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the issue resolution.
   * @param replaceWith The ID of the issue resolution that will replace the currently selected resolution.
   * @returns void
   * @throws ApiError
   */
  public static deleteResolution(
    id: string,
    replaceWith: string = '',
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/resolution/{id}',
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
        404: `Returned if the issue resolution isn't found.`,
        409: `Returned if a task to delete the issue resolution is already running.`,
      },
    });
  }
  /**
   * Get resolution
   * Returns an issue resolution value.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param id The ID of the issue resolution value.
   * @returns Resolution Returned if the request is successful.
   * @throws ApiError
   */
  public static getResolution(
    id: string,
  ): CancelablePromise<Resolution> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/resolution/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the issue resolution value is not found.`,
      },
    });
  }
  /**
   * Update resolution
   * Updates an issue resolution.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the issue resolution.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateResolution(
    id: string,
    requestBody: UpdateResolutionDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/resolution/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request isn't valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user doesn't have the necessary permission.`,
        404: `Returned if the issue resolution isn't found.`,
      },
    });
  }
}
