/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CustomFieldConfigurations } from '../models/CustomFieldConfigurations';
import type { PageBeanContextualConfiguration } from '../models/PageBeanContextualConfiguration';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueCustomFieldConfigurationAppsService {
  /**
   * Get custom field configurations
   * Returns a [paginated](#pagination) list of configurations for a custom field of a [type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) created by a [Forge app](https://developer.atlassian.com/platform/forge/).
   *
   * The result can be filtered by one of these criteria:
   *
   * *  `id`.
   * *  `fieldContextId`.
   * *  `issueId`.
   * *  `projectKeyOrId` and `issueTypeId`.
   *
   * Otherwise, all configurations are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that provided the custom field type.
   * @param fieldIdOrKey The ID or key of the custom field, for example `customfield_10000`.
   * @param id The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: `id=10000&id=10001`. Can't be provided with `fieldContextId`, `issueId`, `projectKeyOrId`, or `issueTypeId`.
   * @param fieldContextId The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: `fieldContextId=10000&fieldContextId=10001`. Can't be provided with `id`, `issueId`, `projectKeyOrId`, or `issueTypeId`.
   * @param issueId The ID of the issue to filter results by. If the issue doesn't exist, an empty list is returned. Can't be provided with `projectKeyOrId`, or `issueTypeId`.
   * @param projectKeyOrId The ID or key of the project to filter results by. Must be provided with `issueTypeId`. Can't be provided with `issueId`.
   * @param issueTypeId The ID of the issue type to filter results by. Must be provided with `projectKeyOrId`. Can't be provided with `issueId`.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanContextualConfiguration Returned if the request is successful.
   * @throws ApiError
   */
  public static getCustomFieldConfiguration(
    fieldIdOrKey: string,
    id?: Array<number>,
    fieldContextId?: Array<number>,
    issueId?: number,
    projectKeyOrId?: string,
    issueTypeId?: string,
    startAt?: number,
    maxResults: number = 100,
  ): CancelablePromise<PageBeanContextualConfiguration> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/app/field/{fieldIdOrKey}/context/configuration',
      path: {
        'fieldIdOrKey': fieldIdOrKey,
      },
      query: {
        'id': id,
        'fieldContextId': fieldContextId,
        'issueId': issueId,
        'projectKeyOrId': projectKeyOrId,
        'issueTypeId': issueTypeId,
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field.`,
        404: `Returned if the custom field is not found.`,
      },
    });
  }
  /**
   * Update custom field configurations
   * Update the configuration for contexts of a custom field of a [type](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) created by a [Forge app](https://developer.atlassian.com/platform/forge/).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field type.
   * @param fieldIdOrKey The ID or key of the custom field, for example `customfield_10000`.
   * @param requestBody
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static updateCustomFieldConfiguration(
    fieldIdOrKey: string,
    requestBody: CustomFieldConfigurations,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/app/field/{fieldIdOrKey}/context/configuration',
      path: {
        'fieldIdOrKey': fieldIdOrKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field.`,
        404: `Returned if the custom field is not found.`,
      },
    });
  }
}
