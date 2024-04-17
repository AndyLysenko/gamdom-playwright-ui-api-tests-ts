/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { BulkCustomFieldOptionCreateRequest } from '../models/BulkCustomFieldOptionCreateRequest';
import type { BulkCustomFieldOptionUpdateRequest } from '../models/BulkCustomFieldOptionUpdateRequest';
import type { CustomFieldCreatedContextOptionsList } from '../models/CustomFieldCreatedContextOptionsList';
import type { CustomFieldOption } from '../models/CustomFieldOption';
import type { CustomFieldUpdatedContextOptionsList } from '../models/CustomFieldUpdatedContextOptionsList';
import type { OrderOfCustomFieldOptions } from '../models/OrderOfCustomFieldOptions';
import type { PageBeanCustomFieldContextOption } from '../models/PageBeanCustomFieldContextOption';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueCustomFieldOptionsService {
  /**
   * Get custom field option
   * Returns a custom field option. For example, an option in a select list.
   *
   * Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect apps.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** The custom field option is returned as follows:
   *
   * *  if the user has the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * *  if the user has the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for at least one project the custom field is used in, and the field is visible in at least one layout the user has permission to view.
   * @param id The ID of the custom field option.
   * @returns CustomFieldOption Returned if the request is successful.
   * @throws ApiError
   */
  public static getCustomFieldOption(
    id: string,
  ): CancelablePromise<CustomFieldOption> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/customFieldOption/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  the custom field option is not found.
         *  the user does not have permission to view the custom field.`,
      },
    });
  }
  /**
   * Get custom field options (context)
   * Returns a [paginated](#pagination) list of all custom field option for a context. Options are returned first then cascading options, in the order they display in Jira.
   *
   * This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context.
   * @param optionId The ID of the option.
   * @param onlyOptions Whether only options are returned.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanCustomFieldContextOption Returned if the request is successful.
   * @throws ApiError
   */
  public static getOptionsForContext(
    fieldId: string,
    contextId: number,
    optionId?: number,
    onlyOptions: boolean = false,
    startAt?: number,
    maxResults: number = 100,
  ): CancelablePromise<PageBeanCustomFieldContextOption> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}/option',
      path: {
        'fieldId': fieldId,
        'contextId': contextId,
      },
      query: {
        'optionId': optionId,
        'onlyOptions': onlyOptions,
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the custom field is not found or the context doesn't match the custom field.`,
      },
    });
  }
  /**
   * Create custom field options (context)
   * Creates options and, where the custom select field is of the type Select List (cascading), cascading options for a custom select field. The options are added to a context of the field.
   *
   * The maximum number of options that can be created per request is 1000 and each field can have a maximum of 10000 options.
   *
   * This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context.
   * @param requestBody
   * @returns CustomFieldCreatedContextOptionsList Returned if the request is successful.
   * @throws ApiError
   */
  public static createCustomFieldOption(
    fieldId: string,
    contextId: number,
    requestBody: BulkCustomFieldOptionCreateRequest,
  ): CancelablePromise<CustomFieldCreatedContextOptionsList> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}/option',
      path: {
        'fieldId': fieldId,
        'contextId': contextId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the custom field is not found or the context doesn't match the custom field.`,
      },
    });
  }
  /**
   * Update custom field options (context)
   * Updates the options of a custom field.
   *
   * If any of the options are not found, no options are updated. Options where the values in the request match the current values aren't updated and aren't reported in the response.
   *
   * Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect apps.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context.
   * @param requestBody
   * @returns CustomFieldUpdatedContextOptionsList Returned if the request is successful.
   * @throws ApiError
   */
  public static updateCustomFieldOption(
    fieldId: string,
    contextId: number,
    requestBody: BulkCustomFieldOptionUpdateRequest,
  ): CancelablePromise<CustomFieldUpdatedContextOptionsList> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}/option',
      path: {
        'fieldId': fieldId,
        'contextId': contextId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field, context, or one or more options is not found.`,
      },
    });
  }
  /**
   * Reorder custom field options (context)
   * Changes the order of custom field options or cascading options in a context.
   *
   * This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static reorderCustomFieldOptions(
    fieldId: string,
    contextId: number,
    requestBody: OrderOfCustomFieldOptions,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}/option/move',
      path: {
        'fieldId': fieldId,
        'contextId': contextId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field, the context, or one or more of the options is not found..`,
      },
    });
  }
  /**
   * Delete custom field options (context)
   * Deletes a custom field option.
   *
   * Options with cascading options cannot be deleted without deleting the cascading options first.
   *
   * This operation works for custom field options created in Jira or the operations from this resource. **To work with issue field select list options created for Connect apps use the [Issue custom field options (apps)](#api-group-issue-custom-field-options--apps-) operations.**
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context from which an option should be deleted.
   * @param optionId The ID of the option to delete.
   * @returns void
   * @throws ApiError
   */
  public static deleteCustomFieldOption(
    fieldId: string,
    contextId: number,
    optionId: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}/option/{optionId}',
      path: {
        'fieldId': fieldId,
        'contextId': contextId,
        'optionId': optionId,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field, the context, or the option is not found.`,
      },
    });
  }
  /**
   * Replace custom field options
   * Replaces the options of a custom field.
   *
   * Note that this operation **only works for issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource**, it cannot be used with issue field select list options created by Connect or Forge apps.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param optionId The ID of the option to be deselected.
   * @param contextId The ID of the context.
   * @param replaceWith The ID of the option that will replace the currently selected option.
   * @param jql A JQL query that specifies the issues to be updated. For example, *project=10000*.
   * @returns void
   * @throws ApiError
   */
  public static replaceCustomFieldOption(
    fieldId: string,
    optionId: number,
    contextId: number,
    replaceWith?: number,
    jql?: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}/option/{optionId}/issue',
      path: {
        'fieldId': fieldId,
        'optionId': optionId,
        'contextId': contextId,
      },
      query: {
        'replaceWith': replaceWith,
        'jql': jql,
      },
      errors: {
        303: `Returned if the long-running task to deselect the option is started.`,
        400: `Returned if the request is not valid.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field is not found or does not support options, or the options to be replaced are not found.`,
      },
    });
  }
}
