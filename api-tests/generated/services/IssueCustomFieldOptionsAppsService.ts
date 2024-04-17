/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { IssueFieldOption } from '../models/IssueFieldOption';
import type { IssueFieldOptionCreateBean } from '../models/IssueFieldOptionCreateBean';
import type { PageBeanIssueFieldOption } from '../models/PageBeanIssueFieldOption';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueCustomFieldOptionsAppsService {
  /**
   * Get all issue field options
   * Returns a [paginated](#pagination) list of all the options of a select list issue field. A select list issue field is a type of [issue field](https://developer.atlassian.com/cloud/jira/platform/modules/issue-field/) that enables a user to select a value from a list of options.
   *
   * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   * @param fieldKey The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
   *
   * *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
   * *  run [Get fields](#api-rest-api-2-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"`
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanIssueFieldOption Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllIssueFieldOptions(
    fieldKey: string,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanIssueFieldOption> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/{fieldKey}/option',
      path: {
        'fieldKey': fieldKey,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        400: `Returned if the field is not found or does not support options.`,
        403: `Returned if the request is not authenticated as a Jira administrator or the app that provided the field.`,
      },
    });
  }
  /**
   * Create issue field option
   * Creates an option for a select list issue field.
   *
   * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.
   *
   * Each field can have a maximum of 10000 options, and each option can have a maximum of 10000 scopes.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   * @param fieldKey The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
   *
   * *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
   * *  run [Get fields](#api-rest-api-2-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"`
   * @param requestBody
   * @returns IssueFieldOption Returned if the request is successful.
   * @throws ApiError
   */
  public static createIssueFieldOption(
    fieldKey: string,
    requestBody: IssueFieldOptionCreateBean,
  ): CancelablePromise<IssueFieldOption> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/field/{fieldKey}/option',
      path: {
        'fieldKey': fieldKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the option is invalid.`,
        403: `Returned if the request is not authenticated as a Jira administrator or the app that provided the field.`,
        404: `Returned if the field is not found or does not support options.`,
      },
    });
  }
  /**
   * Get selectable issue field options
   * Returns a [paginated](#pagination) list of options for a select list issue field that can be viewed and selected by the user.
   *
   * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param fieldKey The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
   *
   * *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
   * *  run [Get fields](#api-rest-api-2-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"`
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param projectId Filters the results to options that are only available in the specified project.
   * @returns PageBeanIssueFieldOption Returned if the request is successful.
   * @throws ApiError
   */
  public static getSelectableIssueFieldOptions(
    fieldKey: string,
    startAt?: number,
    maxResults: number = 50,
    projectId?: number,
  ): CancelablePromise<PageBeanIssueFieldOption> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/{fieldKey}/option/suggestions/edit',
      path: {
        'fieldKey': fieldKey,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'projectId': projectId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the field is not found or does not support options.`,
      },
    });
  }
  /**
   * Get visible issue field options
   * Returns a [paginated](#pagination) list of options for a select list issue field that can be viewed by the user.
   *
   * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param fieldKey The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
   *
   * *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
   * *  run [Get fields](#api-rest-api-2-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"`
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param projectId Filters the results to options that are only available in the specified project.
   * @returns PageBeanIssueFieldOption Returned if the request is successful.
   * @throws ApiError
   */
  public static getVisibleIssueFieldOptions(
    fieldKey: string,
    startAt?: number,
    maxResults: number = 50,
    projectId?: number,
  ): CancelablePromise<PageBeanIssueFieldOption> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/{fieldKey}/option/suggestions/search',
      path: {
        'fieldKey': fieldKey,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'projectId': projectId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the field is not found or does not support options.`,
      },
    });
  }
  /**
   * Delete issue field option
   * Deletes an option from a select list issue field.
   *
   * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   * @param fieldKey The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
   *
   * *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
   * *  run [Get fields](#api-rest-api-2-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"`
   * @param optionId The ID of the option to be deleted.
   * @returns void
   * @throws ApiError
   */
  public static deleteIssueFieldOption(
    fieldKey: string,
    optionId: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/field/{fieldKey}/option/{optionId}',
      path: {
        'fieldKey': fieldKey,
        'optionId': optionId,
      },
      errors: {
        403: `Returned if the request is not authenticated as a Jira administrator or the app that provided the field.`,
        404: `Returned if the field or option is not found.`,
        409: `Returned if the option is selected for the field in any issue.`,
      },
    });
  }
  /**
   * Get issue field option
   * Returns an option from a select list issue field.
   *
   * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   * @param fieldKey The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
   *
   * *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
   * *  run [Get fields](#api-rest-api-2-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"`
   * @param optionId The ID of the option to be returned.
   * @returns IssueFieldOption Returned if the requested option is returned.
   * @throws ApiError
   */
  public static getIssueFieldOption(
    fieldKey: string,
    optionId: number,
  ): CancelablePromise<IssueFieldOption> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/field/{fieldKey}/option/{optionId}',
      path: {
        'fieldKey': fieldKey,
        'optionId': optionId,
      },
      errors: {
        400: `Returned if the field is not found or does not support options.`,
        403: `Returned if the request is not authenticated as a Jira administrator or the app that provided the field.`,
        404: `Returned if the option is not found.`,
      },
    });
  }
  /**
   * Update issue field option
   * Updates or creates an option for a select list issue field. This operation requires that the option ID is provided when creating an option, therefore, the option ID needs to be specified as a path and body parameter. The option ID provided in the path and body must be identical.
   *
   * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   * @param fieldKey The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
   *
   * *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
   * *  run [Get fields](#api-rest-api-2-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"`
   * @param optionId The ID of the option to be updated.
   * @param requestBody
   * @returns IssueFieldOption Returned if the option is updated or created.
   * @throws ApiError
   */
  public static updateIssueFieldOption(
    fieldKey: string,
    optionId: number,
    requestBody: IssueFieldOption,
  ): CancelablePromise<IssueFieldOption> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/field/{fieldKey}/option/{optionId}',
      path: {
        'fieldKey': fieldKey,
        'optionId': optionId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the option is invalid, or the *ID* in the request object does not match the *optionId* parameter.`,
        403: `Returned if the request is not authenticated as a Jira administrator or the app that provided the field.`,
        404: `Returned if field is not found.`,
      },
    });
  }
  /**
   * Replace issue field option
   * Deselects an issue-field select-list option from all issues where it is selected. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.
   *
   * Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can override the screen security configuration using `overrideScreenSecurity` and `overrideEditableFlag`.
   *
   * This is an [asynchronous operation](#async). The response object contains a link to the long-running task.
   *
   * Note that this operation **only works for issue field select list options added by Connect apps**, it cannot be used with issue field select list options created in Jira or using operations from the [Issue custom field options](#api-group-Issue-custom-field-options) resource.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the app providing the field.
   * @param fieldKey The field key is specified in the following format: **$(app-key)\_\_$(field-key)**. For example, *example-add-on\_\_example-issue-field*. To determine the `fieldKey` value, do one of the following:
   *
   * *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.
   * *  run [Get fields](#api-rest-api-2-field-get) and in the field details the value is returned in `key`. For example, `"key": "teams-add-on__team-issue-field"`
   * @param optionId The ID of the option to be deselected.
   * @param replaceWith The ID of the option that will replace the currently selected option.
   * @param jql A JQL query that specifies the issues to be updated. For example, *project=10000*.
   * @param overrideScreenSecurity Whether screen security is overridden to enable hidden fields to be edited. Available to Connect and Forge app users with admin permission.
   * @param overrideEditableFlag Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns void
   * @throws ApiError
   */
  public static replaceIssueFieldOption(
    fieldKey: string,
    optionId: number,
    replaceWith?: number,
    jql?: string,
    overrideScreenSecurity: boolean = false,
    overrideEditableFlag: boolean = false,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/field/{fieldKey}/option/{optionId}/issue',
      path: {
        'fieldKey': fieldKey,
        'optionId': optionId,
      },
      query: {
        'replaceWith': replaceWith,
        'jql': jql,
        'overrideScreenSecurity': overrideScreenSecurity,
        'overrideEditableFlag': overrideEditableFlag,
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
