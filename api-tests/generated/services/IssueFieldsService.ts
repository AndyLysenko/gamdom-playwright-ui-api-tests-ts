/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CustomFieldDefinitionJsonBean } from '../models/CustomFieldDefinitionJsonBean';
import type { FieldDetails } from '../models/FieldDetails';
import type { PageBeanContext } from '../models/PageBeanContext';
import type { PageBeanField } from '../models/PageBeanField';
import type { UpdateCustomFieldDetails } from '../models/UpdateCustomFieldDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueFieldsService {
  /**
   * Get fields
   * Returns system and custom issue fields according to the following rules:
   *
   * *  Fields that cannot be added to the issue navigator are always returned.
   * *  Fields that cannot be placed on an issue screen are always returned.
   * *  Fields that depend on global Jira settings are only returned if the setting is enabled. That is, timetracking fields, subtasks, votes, and watches.
   * *  For all other fields, this operation only returns the fields that the user has permission to view (that is, the field is used in at least one project that the user has *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.)
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None.
   * @returns FieldDetails Returned if the request is successful.
   * @throws ApiError
   */
  public static getFields(): CancelablePromise<Array<FieldDetails>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Create custom field
   * Creates a custom field.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody Definition of the custom field to be created
   * @returns FieldDetails Returned if the custom field is created.
   * @throws ApiError
   */
  public static createCustomField(
    requestBody: CustomFieldDefinitionJsonBean,
  ): CancelablePromise<FieldDetails> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/field',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  the user does not have permission to create custom fields.
         *  any of the request object properties have invalid or missing values.`,
      },
    });
  }
  /**
   * Get fields paginated
   * Returns a [paginated](#pagination) list of fields for Classic Jira projects. The list can include:
   *
   * *  all fields
   * *  specific fields, by defining `id`
   * *  fields that contain a string in the field name or description, by defining `query`
   * *  specific fields that contain a string in the field name or description, by defining `id` and `query`
   *
   * Only custom fields can be queried, `type` must be set to `custom`.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param type The type of fields to search.
   * @param id The IDs of the custom fields to return or, where `query` is specified, filter.
   * @param query String used to perform a case-insensitive partial match with field names or descriptions.
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `contextsCount` sorts by the number of contexts related to a field
   * *  `lastUsed` sorts by the date when the value of the field last changed
   * *  `name` sorts by the field name
   * *  `screensCount` sorts by the number of screens related to a field
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `key` returns the key for each field
   * *  `lastUsed` returns the date when the value of the field last changed
   * *  `screensCount` returns the number of screens related to a field
   * *  `contextsCount` returns the number of contexts related to a field
   * *  `isLocked` returns information about whether the field is [locked](https://confluence.atlassian.com/x/ZSN7Og)
   * *  `searcherKey` returns the searcher key for each custom field
   * @returns PageBeanField Returned if the request is successful.
   * @throws ApiError
   */
  public static getFieldsPaginated(
    startAt?: number,
    maxResults: number = 50,
    type?: Array<'custom' | 'system'>,
    id?: Array<string>,
    query?: string,
    orderBy?: 'contextsCount' | '-contextsCount' | '+contextsCount' | 'lastUsed' | '-lastUsed' | '+lastUsed' | 'name' | '-name' | '+name' | 'screensCount' | '-screensCount' | '+screensCount' | 'projectsCount' | '-projectsCount' | '+projectsCount',
    expand?: string,
  ): CancelablePromise<PageBeanField> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/search',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'type': type,
        'id': id,
        'query': query,
        'orderBy': orderBy,
        'expand': expand,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Get fields in trash paginated
   * Returns a [paginated](#pagination) list of fields in the trash. The list may be restricted to fields whose field name or description partially match a string.
   *
   * Only custom fields can be queried, `type` must be set to `custom`.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id
   * @param query String used to perform a case-insensitive partial match with field names or descriptions.
   * @param expand
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `name` sorts by the field name
   * *  `trashDate` sorts by the date the field was moved to the trash
   * *  `plannedDeletionDate` sorts by the planned deletion date
   * @returns PageBeanField Returned if the request is successful.
   * @throws ApiError
   */
  public static getTrashedFieldsPaginated(
    startAt?: number,
    maxResults: number = 50,
    id?: Array<string>,
    query?: string,
    expand?: 'name' | '-name' | '+name' | 'trashDate' | '-trashDate' | '+trashDate' | 'plannedDeletionDate' | '-plannedDeletionDate' | '+plannedDeletionDate' | 'projectsCount' | '-projectsCount' | '+projectsCount',
    orderBy?: string,
  ): CancelablePromise<PageBeanField> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/search/trashed',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'query': query,
        'expand': expand,
        'orderBy': orderBy,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Update custom field
   * Updates a custom field.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param requestBody The custom field update details.
   * @returns void
   * @throws ApiError
   */
  public static updateCustomField(
    fieldId: string,
    requestBody: UpdateCustomFieldDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/field/{fieldId}',
      path: {
        'fieldId': fieldId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field is not found.`,
      },
    });
  }
  /**
   * @deprecated
   * Get contexts for a field
   * Returns a [paginated](#pagination) list of the contexts a field is used in. Deprecated, use [ Get custom field contexts](#api-rest-api-2-field-fieldId-context-get).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the field to return contexts for.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanContext Returned if the request is successful.
   * @throws ApiError
   */
  public static getContextsForFieldDeprecated(
    fieldId: string,
    startAt?: number,
    maxResults: number = 20,
  ): CancelablePromise<PageBeanContext> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/{fieldId}/contexts',
      path: {
        'fieldId': fieldId,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Delete custom field
   * Deletes a custom field. The custom field is deleted whether it is in the trash or not. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields.
   *
   * This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-2-task-taskId-get) to obtain subsequent updates.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of a custom field.
   * @returns void
   * @throws ApiError
   */
  public static deleteCustomField(
    id: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/field/{id}',
      path: {
        'id': id,
      },
      errors: {
        303: `Returned if the request is successful.`,
        400: `Returned if any of these are true:
         *  The custom field is locked.
         *  The custom field is used in a issue security scheme or a permission scheme.
         *  The custom field ID format is incorrect.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the custom field is not found.`,
        409: `Returned if a task to delete the custom field is running.`,
      },
    });
  }
  /**
   * Restore custom field from trash
   * Restores a custom field from trash. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of a custom field.
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static restoreCustomField(
    id: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/field/{id}/restore',
      path: {
        'id': id,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the custom field is not found.`,
      },
    });
  }
  /**
   * Move custom field to trash
   * Moves a custom field to trash. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of a custom field.
   * @returns any Returned if the request is successful.
   * @throws ApiError
   */
  public static trashCustomField(
    id: string,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/field/{id}/trash',
      path: {
        'id': id,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the custom field is not found.`,
      },
    });
  }
}
