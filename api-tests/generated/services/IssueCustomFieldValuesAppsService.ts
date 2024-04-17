/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CustomFieldValueUpdateDetails } from '../models/CustomFieldValueUpdateDetails';
import type { MultipleCustomFieldValuesUpdateDetails } from '../models/MultipleCustomFieldValuesUpdateDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueCustomFieldValuesAppsService {
  /**
   * Update custom fields
   * Updates the value of one or more custom fields on one or more issues. Combinations of custom field and issue should be unique within the request.
   *
   * Apps can only perform this operation on [custom fields](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/) and [custom field types](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) declared in their own manifests.
   *
   * **[Permissions](#permissions) required:** Only the app that owns the custom field or custom field type can update its values with this operation.
   * @param requestBody
   * @param generateChangelog Whether to generate a changelog for this update.
   * @returns void
   * @throws ApiError
   */
  public static updateMultipleCustomFieldValues(
    requestBody: MultipleCustomFieldValuesUpdateDetails,
    generateChangelog: boolean = true,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/app/field/value',
      query: {
        'generateChangelog': generateChangelog,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if the request is not authenticated as the app that provided all the fields.`,
        404: `Returned if any field is not found.`,
      },
    });
  }
  /**
   * Update custom field value
   * Updates the value of a custom field on one or more issues.
   *
   * Apps can only perform this operation on [custom fields](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field/) and [custom field types](https://developer.atlassian.com/platform/forge/manifest-reference/modules/jira-custom-field-type/) declared in their own manifests.
   *
   * **[Permissions](#permissions) required:** Only the app that owns the custom field or custom field type can update its values with this operation.
   * @param fieldIdOrKey The ID or key of the custom field. For example, `customfield_10010`.
   * @param requestBody
   * @param generateChangelog Whether to generate a changelog for this update.
   * @returns void
   * @throws ApiError
   */
  public static updateCustomFieldValue(
    fieldIdOrKey: string,
    requestBody: CustomFieldValueUpdateDetails,
    generateChangelog: boolean = true,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/app/field/{fieldIdOrKey}/value',
      path: {
        'fieldIdOrKey': fieldIdOrKey,
      },
      query: {
        'generateChangelog': generateChangelog,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if the request is not authenticated as the app that provided the field.`,
        404: `Returned if the field is not found.`,
      },
    });
  }
}
