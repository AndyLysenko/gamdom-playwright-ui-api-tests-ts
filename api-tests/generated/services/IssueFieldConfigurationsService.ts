/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AssociateFieldConfigurationsWithIssueTypesRequest } from '../models/AssociateFieldConfigurationsWithIssueTypesRequest';
import type { FieldConfiguration } from '../models/FieldConfiguration';
import type { FieldConfigurationDetails } from '../models/FieldConfigurationDetails';
import type { FieldConfigurationItemsDetails } from '../models/FieldConfigurationItemsDetails';
import type { FieldConfigurationScheme } from '../models/FieldConfigurationScheme';
import type { FieldConfigurationSchemeProjectAssociation } from '../models/FieldConfigurationSchemeProjectAssociation';
import type { IssueTypeIdsToRemove } from '../models/IssueTypeIdsToRemove';
import type { PageBeanFieldConfigurationDetails } from '../models/PageBeanFieldConfigurationDetails';
import type { PageBeanFieldConfigurationIssueTypeItem } from '../models/PageBeanFieldConfigurationIssueTypeItem';
import type { PageBeanFieldConfigurationItem } from '../models/PageBeanFieldConfigurationItem';
import type { PageBeanFieldConfigurationScheme } from '../models/PageBeanFieldConfigurationScheme';
import type { PageBeanFieldConfigurationSchemeProjects } from '../models/PageBeanFieldConfigurationSchemeProjects';
import type { UpdateFieldConfigurationSchemeDetails } from '../models/UpdateFieldConfigurationSchemeDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueFieldConfigurationsService {
  /**
   * Get all field configurations
   * Returns a [paginated](#pagination) list of field configurations. The list can be for all field configurations or a subset determined by any combination of these criteria:
   *
   * *  a list of field configuration item IDs.
   * *  whether the field configuration is a default.
   * *  whether the field configuration name or description contains a query string.
   *
   * Only field configurations used in company-managed (classic) projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
   * @param isDefault If *true* returns default field configurations only.
   * @param query The query string used to match against field configuration names and descriptions.
   * @returns PageBeanFieldConfigurationDetails Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllFieldConfigurations(
    startAt?: number,
    maxResults: number = 50,
    id?: Array<number>,
    isDefault: boolean = false,
    query: string = '',
  ): CancelablePromise<PageBeanFieldConfigurationDetails> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/fieldconfiguration',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
        'isDefault': isDefault,
        'query': query,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Create field configuration
   * Creates a field configuration. The field configuration is created with the same field properties as the default configuration, with all the fields being optional.
   *
   * This operation can only create configurations for use in company-managed (classic) projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns FieldConfiguration Returned if the request is successful.
   * @throws ApiError
   */
  public static createFieldConfiguration(
    requestBody: FieldConfigurationDetails,
  ): CancelablePromise<FieldConfiguration> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/fieldconfiguration',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Delete field configuration
   * Deletes a field configuration.
   *
   * This operation can only delete configurations used in company-managed (classic) projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the field configuration.
   * @returns void
   * @throws ApiError
   */
  public static deleteFieldConfiguration(
    id: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/fieldconfiguration/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field configuration is not found.`,
      },
    });
  }
  /**
   * Update field configuration
   * Updates a field configuration. The name and the description provided in the request override the existing values.
   *
   * This operation can only update configurations used in company-managed (classic) projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the field configuration.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateFieldConfiguration(
    id: number,
    requestBody: FieldConfigurationDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/fieldconfiguration/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field configuration is not found.`,
      },
    });
  }
  /**
   * Get field configuration items
   * Returns a [paginated](#pagination) list of all fields for a configuration.
   *
   * Only the fields from configurations used in company-managed (classic) projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the field configuration.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanFieldConfigurationItem Returned if the request is successful.
   * @throws ApiError
   */
  public static getFieldConfigurationItems(
    id: number,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanFieldConfigurationItem> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/fieldconfiguration/{id}/fields',
      path: {
        'id': id,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field configuration is not found.`,
      },
    });
  }
  /**
   * Update field configuration items
   * Updates fields in a field configuration. The properties of the field configuration fields provided override the existing values.
   *
   * This operation can only update field configurations used in company-managed (classic) projects.
   *
   * The operation can set the renderer for text fields to the default text renderer (`text-renderer`) or wiki style renderer (`wiki-renderer`). However, the renderer cannot be updated for fields using the autocomplete renderer (`autocomplete-renderer`).
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the field configuration.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateFieldConfigurationItems(
    id: number,
    requestBody: FieldConfigurationItemsDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/fieldconfiguration/{id}/fields',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field configuration is not found.`,
      },
    });
  }
  /**
   * Get all field configuration schemes
   * Returns a [paginated](#pagination) list of field configuration schemes.
   *
   * Only field configuration schemes used in classic projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param id The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
   * @returns PageBeanFieldConfigurationScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllFieldConfigurationSchemes(
    startAt?: number,
    maxResults: number = 50,
    id?: Array<number>,
  ): CancelablePromise<PageBeanFieldConfigurationScheme> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/fieldconfigurationscheme',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'id': id,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permissions.`,
      },
    });
  }
  /**
   * Create field configuration scheme
   * Creates a field configuration scheme.
   *
   * This operation can only create field configuration schemes used in company-managed (classic) projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody The details of the field configuration scheme.
   * @returns FieldConfigurationScheme Returned if the request is successful.
   * @throws ApiError
   */
  public static createFieldConfigurationScheme(
    requestBody: UpdateFieldConfigurationSchemeDetails,
  ): CancelablePromise<FieldConfigurationScheme> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/fieldconfigurationscheme',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permissions.`,
      },
    });
  }
  /**
   * Get field configuration issue type items
   * Returns a [paginated](#pagination) list of field configuration issue type items.
   *
   * Only items used in classic projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param fieldConfigurationSchemeId The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`.
   * @returns PageBeanFieldConfigurationIssueTypeItem Returned if the request is successful.
   * @throws ApiError
   */
  public static getFieldConfigurationSchemeMappings(
    startAt?: number,
    maxResults: number = 50,
    fieldConfigurationSchemeId?: Array<number>,
  ): CancelablePromise<PageBeanFieldConfigurationIssueTypeItem> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/fieldconfigurationscheme/mapping',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'fieldConfigurationSchemeId': fieldConfigurationSchemeId,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if no field configuration schemes are found.`,
      },
    });
  }
  /**
   * Get field configuration schemes for projects
   * Returns a [paginated](#pagination) list of field configuration schemes and, for each scheme, a list of the projects that use it.
   *
   * The list is sorted by field configuration scheme ID. The first item contains the list of project IDs assigned to the default field configuration scheme.
   *
   * Only field configuration schemes used in classic projects are returned.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param projectId The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanFieldConfigurationSchemeProjects Returned if the request is successful.
   * @throws ApiError
   */
  public static getFieldConfigurationSchemeProjectMapping(
    projectId: Array<number>,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageBeanFieldConfigurationSchemeProjects> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/fieldconfigurationscheme/project',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'projectId': projectId,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Assign field configuration scheme to project
   * Assigns a field configuration scheme to a project. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme.
   *
   * Field configuration schemes can only be assigned to classic projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static assignFieldConfigurationSchemeToProject(
    requestBody: FieldConfigurationSchemeProjectAssociation,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/fieldconfigurationscheme/project',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the project is not a classic project.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permissions.`,
        404: `Returned if the project is missing.`,
      },
    });
  }
  /**
   * Delete field configuration scheme
   * Deletes a field configuration scheme.
   *
   * This operation can only delete field configuration schemes used in company-managed (classic) projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the field configuration scheme.
   * @returns void
   * @throws ApiError
   */
  public static deleteFieldConfigurationScheme(
    id: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/fieldconfigurationscheme/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field configuration scheme is not found.`,
      },
    });
  }
  /**
   * Update field configuration scheme
   * Updates a field configuration scheme.
   *
   * This operation can only update field configuration schemes used in company-managed (classic) projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the field configuration scheme.
   * @param requestBody The details of the field configuration scheme.
   * @returns void
   * @throws ApiError
   */
  public static updateFieldConfigurationScheme(
    id: number,
    requestBody: UpdateFieldConfigurationSchemeDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/fieldconfigurationscheme/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permissions.`,
        404: `Returned if the field configuration scheme is not found.`,
      },
    });
  }
  /**
   * Assign issue types to field configurations
   * Assigns issue types to field configurations on field configuration scheme.
   *
   * This operation can only modify field configuration schemes used in company-managed (classic) projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the field configuration scheme.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static setFieldConfigurationSchemeMapping(
    id: number,
    requestBody: AssociateFieldConfigurationsWithIssueTypesRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/fieldconfigurationscheme/{id}/mapping',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field configuration scheme, the field configuration, or the issue type is not found.`,
      },
    });
  }
  /**
   * Remove issue types from field configuration scheme
   * Removes issue types from the field configuration scheme.
   *
   * This operation can only modify field configuration schemes used in company-managed (classic) projects.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param id The ID of the field configuration scheme.
   * @param requestBody The issue type IDs to remove.
   * @returns void
   * @throws ApiError
   */
  public static removeIssueTypesFromGlobalFieldConfigurationScheme(
    id: number,
    requestBody: IssueTypeIdsToRemove,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/fieldconfigurationscheme/{id}/mapping/delete',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the field configuration scheme or the issue types are not found.`,
      },
    });
  }
}
