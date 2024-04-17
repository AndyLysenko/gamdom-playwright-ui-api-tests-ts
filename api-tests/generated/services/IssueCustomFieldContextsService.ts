/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CreateCustomFieldContext } from '../models/CreateCustomFieldContext';
import type { CustomFieldContextDefaultValueUpdate } from '../models/CustomFieldContextDefaultValueUpdate';
import type { CustomFieldContextUpdateDetails } from '../models/CustomFieldContextUpdateDetails';
import type { IssueTypeIds } from '../models/IssueTypeIds';
import type { PageBeanContextForProjectAndIssueType } from '../models/PageBeanContextForProjectAndIssueType';
import type { PageBeanCustomFieldContext } from '../models/PageBeanCustomFieldContext';
import type { PageBeanCustomFieldContextDefaultValue } from '../models/PageBeanCustomFieldContextDefaultValue';
import type { PageBeanCustomFieldContextProjectMapping } from '../models/PageBeanCustomFieldContextProjectMapping';
import type { PageBeanIssueTypeToContextMapping } from '../models/PageBeanIssueTypeToContextMapping';
import type { ProjectIds } from '../models/ProjectIds';
import type { ProjectIssueTypeMappings } from '../models/ProjectIssueTypeMappings';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueCustomFieldContextsService {
  /**
   * Get custom field contexts
   * Returns a [paginated](#pagination) list of [ contexts](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html) for a custom field. Contexts can be returned as follows:
   *
   * *  With no other parameters set, all contexts.
   * *  By defining `id` only, all contexts from the list of IDs.
   * *  By defining `isAnyIssueType`, limit the list of contexts returned to either those that apply to all issue types (true) or those that apply to only a subset of issue types (false)
   * *  By defining `isGlobalContext`, limit the list of contexts return to either those that apply to all projects (global contexts) (true) or those that apply to only a subset of projects (false).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param isAnyIssueType Whether to return contexts that apply to all issue types.
   * @param isGlobalContext Whether to return contexts that apply to all projects.
   * @param contextId The list of context IDs. To include multiple contexts, separate IDs with ampersand: `contextId=10000&contextId=10001`.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanCustomFieldContext Returned if the request is successful.
   * @throws ApiError
   */
  public static getContextsForField(
    fieldId: string,
    isAnyIssueType?: boolean,
    isGlobalContext?: boolean,
    contextId?: Array<number>,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanCustomFieldContext> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/{fieldId}/context',
      path: {
        'fieldId': fieldId,
      },
      query: {
        'isAnyIssueType': isAnyIssueType,
        'isGlobalContext': isGlobalContext,
        'contextId': contextId,
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field was not found.`,
      },
    });
  }
  /**
   * Create custom field context
   * Creates a custom field context.
   *
   * If `projectIds` is empty, a global context is created. A global context is one that applies to all project. If `issueTypeIds` is empty, the context applies to all issue types.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param requestBody
   * @returns CreateCustomFieldContext Returned if the custom field context is created.
   * @throws ApiError
   */
  public static createCustomFieldContext(
    fieldId: string,
    requestBody: CreateCustomFieldContext,
  ): CancelablePromise<CreateCustomFieldContext> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/field/{fieldId}/context',
      path: {
        'fieldId': fieldId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the field, project, or issue type is not found.`,
        409: `Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings.`,
      },
    });
  }
  /**
   * Get custom field contexts default values
   * Returns a [paginated](#pagination) list of defaults for a custom field. The results can be filtered by `contextId`, otherwise all values are returned. If no defaults are set for a context, nothing is returned.
   * The returned object depends on type of the custom field:
   *
   * *  `CustomFieldContextDefaultValueDate` (type `datepicker`) for date fields.
   * *  `CustomFieldContextDefaultValueDateTime` (type `datetimepicker`) for date-time fields.
   * *  `CustomFieldContextDefaultValueSingleOption` (type `option.single`) for single choice select lists and radio buttons.
   * *  `CustomFieldContextDefaultValueMultipleOption` (type `option.multiple`) for multiple choice select lists and checkboxes.
   * *  `CustomFieldContextDefaultValueCascadingOption` (type `option.cascading`) for cascading select lists.
   * *  `CustomFieldContextSingleUserPickerDefaults` (type `single.user.select`) for single users.
   * *  `CustomFieldContextDefaultValueMultiUserPicker` (type `multi.user.select`) for user lists.
   * *  `CustomFieldContextDefaultValueSingleGroupPicker` (type `grouppicker.single`) for single choice group pickers.
   * *  `CustomFieldContextDefaultValueMultipleGroupPicker` (type `grouppicker.multiple`) for multiple choice group pickers.
   * *  `CustomFieldContextDefaultValueURL` (type `url`) for URLs.
   * *  `CustomFieldContextDefaultValueProject` (type `project`) for project pickers.
   * *  `CustomFieldContextDefaultValueFloat` (type `float`) for floats (floating-point numbers).
   * *  `CustomFieldContextDefaultValueLabels` (type `labels`) for labels.
   * *  `CustomFieldContextDefaultValueTextField` (type `textfield`) for text fields.
   * *  `CustomFieldContextDefaultValueTextArea` (type `textarea`) for text area fields.
   * *  `CustomFieldContextDefaultValueReadOnly` (type `readonly`) for read only (text) fields.
   * *  `CustomFieldContextDefaultValueMultipleVersion` (type `version.multiple`) for single choice version pickers.
   * *  `CustomFieldContextDefaultValueSingleVersion` (type `version.single`) for multiple choice version pickers.
   *
   * Forge custom fields [types](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/#data-types) are also supported, returning:
   *
   * *  `CustomFieldContextDefaultValueForgeStringFieldBean` (type `forge.string`) for Forge string fields.
   * *  `CustomFieldContextDefaultValueForgeMultiStringFieldBean` (type `forge.string.list`) for Forge string collection fields.
   * *  `CustomFieldContextDefaultValueForgeObjectFieldBean` (type `forge.object`) for Forge object fields.
   * *  `CustomFieldContextDefaultValueForgeDateTimeFieldBean` (type `forge.datetime`) for Forge date-time fields.
   * *  `CustomFieldContextDefaultValueForgeGroupFieldBean` (type `forge.group`) for Forge group fields.
   * *  `CustomFieldContextDefaultValueForgeMultiGroupFieldBean` (type `forge.group.list`) for Forge group collection fields.
   * *  `CustomFieldContextDefaultValueForgeNumberFieldBean` (type `forge.number`) for Forge number fields.
   * *  `CustomFieldContextDefaultValueForgeUserFieldBean` (type `forge.user`) for Forge user fields.
   * *  `CustomFieldContextDefaultValueForgeMultiUserFieldBean` (type `forge.user.list`) for Forge user collection fields.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field, for example `customfield\_10000`.
   * @param contextId The IDs of the contexts.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanCustomFieldContextDefaultValue Returned if the request is successful.
   * @throws ApiError
   */
  public static getDefaultValues(
    fieldId: string,
    contextId?: Array<number>,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanCustomFieldContextDefaultValue> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/{fieldId}/context/defaultValue',
      path: {
        'fieldId': fieldId,
      },
      query: {
        'contextId': contextId,
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field is not found.`,
      },
    });
  }
  /**
   * Set custom field contexts default values
   * Sets default for contexts of a custom field. Default are defined using these objects:
   *
   * *  `CustomFieldContextDefaultValueDate` (type `datepicker`) for date fields.
   * *  `CustomFieldContextDefaultValueDateTime` (type `datetimepicker`) for date-time fields.
   * *  `CustomFieldContextDefaultValueSingleOption` (type `option.single`) for single choice select lists and radio buttons.
   * *  `CustomFieldContextDefaultValueMultipleOption` (type `option.multiple`) for multiple choice select lists and checkboxes.
   * *  `CustomFieldContextDefaultValueCascadingOption` (type `option.cascading`) for cascading select lists.
   * *  `CustomFieldContextSingleUserPickerDefaults` (type `single.user.select`) for single users.
   * *  `CustomFieldContextDefaultValueMultiUserPicker` (type `multi.user.select`) for user lists.
   * *  `CustomFieldContextDefaultValueSingleGroupPicker` (type `grouppicker.single`) for single choice group pickers.
   * *  `CustomFieldContextDefaultValueMultipleGroupPicker` (type `grouppicker.multiple`) for multiple choice group pickers.
   * *  `CustomFieldContextDefaultValueURL` (type `url`) for URLs.
   * *  `CustomFieldContextDefaultValueProject` (type `project`) for project pickers.
   * *  `CustomFieldContextDefaultValueFloat` (type `float`) for floats (floating-point numbers).
   * *  `CustomFieldContextDefaultValueLabels` (type `labels`) for labels.
   * *  `CustomFieldContextDefaultValueTextField` (type `textfield`) for text fields.
   * *  `CustomFieldContextDefaultValueTextArea` (type `textarea`) for text area fields.
   * *  `CustomFieldContextDefaultValueReadOnly` (type `readonly`) for read only (text) fields.
   * *  `CustomFieldContextDefaultValueMultipleVersion` (type `version.multiple`) for single choice version pickers.
   * *  `CustomFieldContextDefaultValueSingleVersion` (type `version.single`) for multiple choice version pickers.
   *
   * Forge custom fields [types](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/#data-types) are also supported, returning:
   *
   * *  `CustomFieldContextDefaultValueForgeStringFieldBean` (type `forge.string`) for Forge string fields.
   * *  `CustomFieldContextDefaultValueForgeMultiStringFieldBean` (type `forge.string.list`) for Forge string collection fields.
   * *  `CustomFieldContextDefaultValueForgeObjectFieldBean` (type `forge.object`) for Forge object fields.
   * *  `CustomFieldContextDefaultValueForgeDateTimeFieldBean` (type `forge.datetime`) for Forge date-time fields.
   * *  `CustomFieldContextDefaultValueForgeGroupFieldBean` (type `forge.group`) for Forge group fields.
   * *  `CustomFieldContextDefaultValueForgeMultiGroupFieldBean` (type `forge.group.list`) for Forge group collection fields.
   * *  `CustomFieldContextDefaultValueForgeNumberFieldBean` (type `forge.number`) for Forge number fields.
   * *  `CustomFieldContextDefaultValueForgeUserFieldBean` (type `forge.user`) for Forge user fields.
   * *  `CustomFieldContextDefaultValueForgeMultiUserFieldBean` (type `forge.user.list`) for Forge user collection fields.
   *
   * Only one type of default object can be included in a request. To remove a default for a context, set the default parameter to `null`.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static setDefaultValues(
    fieldId: string,
    requestBody: CustomFieldContextDefaultValueUpdate,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/field/{fieldId}/context/defaultValue',
      path: {
        'fieldId': fieldId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field, a context, an option, or a cascading option is not found.`,
      },
    });
  }
  /**
   * Get issue types for custom field context
   * Returns a [paginated](#pagination) list of context to issue type mappings for a custom field. Mappings are returned for all contexts or a list of contexts. Mappings are ordered first by context ID and then by issue type ID.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context. To include multiple contexts, provide an ampersand-separated list. For example, `contextId=10001&contextId=10002`.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanIssueTypeToContextMapping Returned if operation is successful.
   * @throws ApiError
   */
  public static getIssueTypeMappingsForContexts(
    fieldId: string,
    contextId?: Array<number>,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanIssueTypeToContextMapping> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/{fieldId}/context/issuetypemapping',
      path: {
        'fieldId': fieldId,
      },
      query: {
        'contextId': contextId,
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Get custom field contexts for projects and issue types
   * Returns a [paginated](#pagination) list of project and issue type mappings and, for each mapping, the ID of a [custom field context](https://confluence.atlassian.com/x/k44fOw) that applies to the project and issue type.
   *
   * If there is no custom field context assigned to the project then, if present, the custom field context that applies to all projects is returned if it also applies to the issue type or all issue types. If a custom field context is not found, the returned custom field context ID is `null`.
   *
   * Duplicate project and issue type mappings cannot be provided in the request.
   *
   * The order of the returned values is the same as provided in the request.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param requestBody The list of project and issue type mappings.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanContextForProjectAndIssueType Returned if the request is successful.
   * @throws ApiError
   */
  public static getCustomFieldContextsForProjectsAndIssueTypes(
    fieldId: string,
    requestBody: ProjectIssueTypeMappings,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanContextForProjectAndIssueType> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/field/{fieldId}/context/mapping',
      path: {
        'fieldId': fieldId,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field, project, or issue type is not found.`,
      },
    });
  }
  /**
   * Get project mappings for custom field context
   * Returns a [paginated](#pagination) list of context to project mappings for a custom field. The result can be filtered by `contextId`. Otherwise, all mappings are returned. Invalid IDs are ignored.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field, for example `customfield\_10000`.
   * @param contextId The list of context IDs. To include multiple context, separate IDs with ampersand: `contextId=10000&contextId=10001`.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanCustomFieldContextProjectMapping Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectContextMapping(
    fieldId: string,
    contextId?: Array<number>,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanCustomFieldContextProjectMapping> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/{fieldId}/context/projectmapping',
      path: {
        'fieldId': fieldId,
      },
      query: {
        'contextId': contextId,
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field is not found.`,
      },
    });
  }
  /**
   * Delete custom field context
   * Deletes a [ custom field context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context.
   * @returns void
   * @throws ApiError
   */
  public static deleteCustomFieldContext(
    fieldId: string,
    contextId: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}',
      path: {
        'fieldId': fieldId,
        'contextId': contextId,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field or the context is not found.`,
      },
    });
  }
  /**
   * Update custom field context
   * Updates a [ custom field context](https://confluence.atlassian.com/adminjiracloud/what-are-custom-field-contexts-991923859.html).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateCustomFieldContext(
    fieldId: string,
    contextId: number,
    requestBody: CustomFieldContextUpdateDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}',
      path: {
        'fieldId': fieldId,
        'contextId': contextId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field or the context is not found.`,
      },
    });
  }
  /**
   * Add issue types to context
   * Adds issue types to a custom field context, appending the issue types to the issue types list.
   *
   * A custom field context without any issue types applies to all issue types. Adding issue types to such a custom field context would result in it applying to only the listed issue types.
   *
   * If any of the issue types exists in the custom field context, the operation fails and no issue types are added.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static addIssueTypesToContext(
    fieldId: string,
    contextId: number,
    requestBody: IssueTypeIds,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}/issuetype',
      path: {
        'fieldId': fieldId,
        'contextId': contextId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field, context, or one or more issue types are not found.`,
        409: `Returned if the issue type is a sub-task, but sub-tasks are disabled in Jira settings.`,
      },
    });
  }
  /**
   * Remove issue types from context
   * Removes issue types from a custom field context.
   *
   * A custom field context without any issue types applies to all issue types.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static removeIssueTypesFromContext(
    fieldId: string,
    contextId: number,
    requestBody: IssueTypeIds,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}/issuetype/remove',
      path: {
        'fieldId': fieldId,
        'contextId': contextId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field, context, or one or more issue types are not found.`,
      },
    });
  }
  /**
   * Assign custom field context to projects
   * Assigns a custom field context to projects.
   *
   * If any project in the request is assigned to any context of the custom field, the operation fails.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static assignProjectsToCustomFieldContext(
    fieldId: string,
    contextId: number,
    requestBody: ProjectIds,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}/project',
      path: {
        'fieldId': fieldId,
        'contextId': contextId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field, context, or project is not found.`,
      },
    });
  }
  /**
   * Remove custom field context from projects
   * Removes a custom field context from projects.
   *
   * A custom field context without any projects applies to all projects. Removing all projects from a custom field context would result in it applying to all projects.
   *
   * If any project in the request is not assigned to the context, or the operation would result in two global contexts for the field, the operation fails.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param fieldId The ID of the custom field.
   * @param contextId The ID of the context.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static removeCustomFieldContextFromProjects(
    fieldId: string,
    contextId: number,
    requestBody: ProjectIds,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/field/{fieldId}/context/{contextId}/project/remove',
      path: {
        'fieldId': fieldId,
        'contextId': contextId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the custom field, context, or one or more projects are not found.`,
      },
    });
  }
}
