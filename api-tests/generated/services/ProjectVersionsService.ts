/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { DeleteAndReplaceVersionBean } from '../models/DeleteAndReplaceVersionBean';
import type { PageBeanVersion } from '../models/PageBeanVersion';
import type { Version } from '../models/Version';
import type { VersionIssueCounts } from '../models/VersionIssueCounts';
import type { VersionMoveBean } from '../models/VersionMoveBean';
import type { VersionRelatedWork } from '../models/VersionRelatedWork';
import type { VersionUnresolvedIssuesCount } from '../models/VersionUnresolvedIssuesCount';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProjectVersionsService {
  /**
   * Get project versions paginated
   * Returns a [paginated](#pagination) list of all versions in a project. See the [Get project versions](#api-rest-api-2-project-projectIdOrKey-versions-get) resource if you want to get a full list of versions without pagination.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `description` Sorts by version description.
   * *  `name` Sorts by version name.
   * *  `releaseDate` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.
   * *  `sequence` Sorts by the order of appearance in the user interface.
   * *  `startDate` Sorts by start date, starting with the oldest date. Versions with no start date are listed last.
   * @param query Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive).
   * @param status A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`.
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `issuesstatus` Returns the number of issues in each status category for each version.
   * *  `operations` Returns actions that can be performed on the specified version.
   * *  `driver` Returns the Atlassian account ID of the version driver.
   * *  `approvers` Returns a list containing the approvers for this version.
   * @returns PageBeanVersion Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectVersionsPaginated(
    projectIdOrKey: string,
    startAt?: number,
    maxResults: number = 50,
    orderBy?: 'description' | '-description' | '+description' | 'name' | '-name' | '+name' | 'releaseDate' | '-releaseDate' | '+releaseDate' | 'sequence' | '-sequence' | '+sequence' | 'startDate' | '-startDate' | '+startDate',
    query?: string,
    status?: string,
    expand?: string,
  ): CancelablePromise<PageBeanVersion> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/version',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'orderBy': orderBy,
        'query': query,
        'status': status,
        'expand': expand,
      },
      errors: {
        404: `Returned if the project is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Get project versions
   * Returns all versions in a project. The response is not paginated. Use [Get project versions paginated](#api-rest-api-2-project-projectIdOrKey-version-get) if you want to get the versions in a project with pagination.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.
   * @param projectIdOrKey The project ID or project key (case sensitive).
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts `operations`, which returns actions that can be performed on the version.
   * @returns Version Returned if the request is successful.
   * @throws ApiError
   */
  public static getProjectVersions(
    projectIdOrKey: string,
    expand?: string,
  ): CancelablePromise<Array<Version>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/project/{projectIdOrKey}/versions',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      query: {
        'expand': expand,
      },
      errors: {
        404: `Returned if the project is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Create version
   * Creates a project version.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project the version is added to.
   * @param requestBody
   * @returns Version Returned if the request is successful.
   * @throws ApiError
   */
  public static createVersion(
    requestBody: Version,
  ): CancelablePromise<Version> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/version',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  the project is not found.
         *  the user does not have the required permissions.`,
      },
    });
  }
  /**
   * @deprecated
   * Delete version
   * Deletes a project version.
   *
   * Deprecated, use [ Delete and replace version](#api-rest-api-2-version-id-removeAndSwap-post) that supports swapping version values in custom fields, in addition to the swapping for `fixVersion` and `affectedVersion` provided in this resource.
   *
   * Alternative versions can be provided to update issues that use the deleted version in `fixVersion` or `affectedVersion`. If alternatives are not provided, occurrences of `fixVersion` and `affectedVersion` that contain the deleted version are cleared.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
   * @param id The ID of the version.
   * @param moveFixIssuesTo The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
   * @param moveAffectedIssuesTo The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
   * @returns void
   * @throws ApiError
   */
  public static deleteVersion(
    id: string,
    moveFixIssuesTo?: string,
    moveAffectedIssuesTo?: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/version/{id}',
      path: {
        'id': id,
      },
      query: {
        'moveFixIssuesTo': moveFixIssuesTo,
        'moveAffectedIssuesTo': moveAffectedIssuesTo,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if:
         *  the authentication credentials are incorrect.
         *  the user does not have the required permissions.`,
        404: `Returned if the version is not found.`,
      },
    });
  }
  /**
   * Get version
   * Returns a project version.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the version.
   * @param id The ID of the version.
   * @param expand Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `operations` Returns the list of operations available for this version.
   * *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*.
   * *  `driver` Returns the Atlassian account ID of the version driver.
   * *  `approvers` Returns a list containing the Atlassian account IDs of approvers for this version.
   * @returns Version Returned if the request is successful.
   * @throws ApiError
   */
  public static getVersion(
    id: string,
    expand?: string,
  ): CancelablePromise<Version> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/version/{id}',
      path: {
        'id': id,
      },
      query: {
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the version is not found or the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Update version
   * Updates a project version.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
   * @param id The ID of the version.
   * @param requestBody
   * @returns Version Returned if the request is successful.
   * @throws ApiError
   */
  public static updateVersion(
    id: string,
    requestBody: Version,
  ): CancelablePromise<Version> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/version/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  the request is invalid.
         *  the user does not have the required permissions.`,
        401: `Returned if the authentication credentials are incorrect.`,
        404: `Returned if the version is not found.`,
      },
    });
  }
  /**
   * Merge versions
   * Merges two project versions. The merge is completed by deleting the version specified in `id` and replacing any occurrences of its ID in `fixVersion` with the version ID specified in `moveIssuesTo`.
   *
   * Consider using [ Delete and replace version](#api-rest-api-2-version-id-removeAndSwap-post) instead. This resource supports swapping version values in `fixVersion`, `affectedVersion`, and custom fields.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
   * @param id The ID of the version to delete.
   * @param moveIssuesTo The ID of the version to merge into.
   * @returns void
   * @throws ApiError
   */
  public static mergeVersions(
    id: string,
    moveIssuesTo: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/version/{id}/mergeto/{moveIssuesTo}',
      path: {
        'id': id,
        'moveIssuesTo': moveIssuesTo,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if:
         *  the authentication credentials are incorrect or missing.
         *  the user does not have the required permissions.`,
        404: `Returned if the version to be deleted or the version to merge to are not found.`,
      },
    });
  }
  /**
   * Move version
   * Modifies the version's sequence within the project, which affects the display order of the versions in Jira.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.
   * @param id The ID of the version to be moved.
   * @param requestBody
   * @returns Version Returned if the request is successful.
   * @throws ApiError
   */
  public static moveVersion(
    id: string,
    requestBody: VersionMoveBean,
  ): CancelablePromise<Version> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/version/{id}/move',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  no body parameters are provided.
         *  \`after\` and \`position\` are provided.
         *  \`position\` is invalid.`,
        401: `Returned if:
         *  the authentication credentials are incorrect or missing
         *  the user does not have the required commissions.`,
        404: `Returned if the version or move after version are not found.`,
      },
    });
  }
  /**
   * Get version's related issues count
   * Returns the following counts for a version:
   *
   * *  Number of issues where the `fixVersion` is set to the version.
   * *  Number of issues where the `affectedVersion` is set to the version.
   * *  Number of issues where a version custom field is set to the version.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.
   * @param id The ID of the version.
   * @returns VersionIssueCounts Returned if the request is successful.
   * @throws ApiError
   */
  public static getVersionRelatedIssues(
    id: string,
  ): CancelablePromise<VersionIssueCounts> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/version/{id}/relatedIssueCounts',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect.`,
        404: `Returned if:
         *  the version is not found.
         *  the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Get related work
   * Returns related work items for the given version id.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the version.
   * @param id The ID of the version.
   * @returns VersionRelatedWork Returned if the request is successful.
   * @throws ApiError
   */
  public static getRelatedWork(
    id: string,
  ): CancelablePromise<Array<VersionRelatedWork>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/version/{id}/relatedwork',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the version is not found or the user does not have the necessary permission.`,
        500: `Returned if reading related work fails`,
      },
    });
  }
  /**
   * Create related work
   * Creates a related work for the given version. You can only create a generic link type of related works via this API. relatedWorkId will be auto-generated UUID, that does not need to be provided.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Resolve issues:* and *Edit issues* [Managing project permissions](https://confluence.atlassian.com/adminjiraserver/managing-project-permissions-938847145.html) for the project that contains the version.
   * @param id
   * @param requestBody
   * @returns VersionRelatedWork Returned if the request is successful.
   * @throws ApiError
   */
  public static createRelatedWork(
    id: string,
    requestBody: VersionRelatedWork,
  ): CancelablePromise<VersionRelatedWork> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/version/{id}/relatedwork',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the version is not found.`,
      },
    });
  }
  /**
   * Update related work
   * Updates the given related work. You can only update generic link related works via Rest APIs. Any archived version related works can't be edited.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Resolve issues:* and *Edit issues* [Managing project permissions](https://confluence.atlassian.com/adminjiraserver/managing-project-permissions-938847145.html) for the project that contains the version.
   * @param id The ID of the version to update the related work on. For the related work id, pass it to the input JSON.
   * @param requestBody
   * @returns VersionRelatedWork Returned if the request is successful together with updated related work.
   * @throws ApiError
   */
  public static updateRelatedWork(
    id: string,
    requestBody: VersionRelatedWork,
  ): CancelablePromise<VersionRelatedWork> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/version/{id}/relatedwork',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request data is invalid`,
        401: `Returned if the authentication credentials are incorrect.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the version or the related work is not found.`,
      },
    });
  }
  /**
   * Delete and replace version
   * Deletes a project version.
   *
   * Alternative versions can be provided to update issues that use the deleted version in `fixVersion`, `affectedVersion`, or any version picker custom fields. If alternatives are not provided, occurrences of `fixVersion`, `affectedVersion`, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) or *Administer Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that contains the version.
   * @param id The ID of the version.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static deleteAndReplaceVersion(
    id: string,
    requestBody: DeleteAndReplaceVersionBean,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/version/{id}/removeAndSwap',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  the version to delete is not found.
         *  the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Get version's unresolved issues count
   * Returns counts of the issues and unresolved issues for the project version.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Browse projects* project permission for the project that contains the version.
   * @param id The ID of the version.
   * @returns VersionUnresolvedIssuesCount Returned if the request is successful.
   * @throws ApiError
   */
  public static getVersionUnresolvedIssues(
    id: string,
  ): CancelablePromise<VersionUnresolvedIssuesCount> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/version/{id}/unresolvedIssueCount',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  the version is not found.
         *  the user does not have the required permissions.`,
      },
    });
  }
  /**
   * Delete related work
   * Deletes the given related work for the given version.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Resolve issues:* and *Edit issues* [Managing project permissions](https://confluence.atlassian.com/adminjiraserver/managing-project-permissions-938847145.html) for the project that contains the version.
   * @param versionId The ID of the version that the target related work belongs to.
   * @param relatedWorkId The ID of the related work to delete.
   * @returns void
   * @throws ApiError
   */
  public static deleteRelatedWork(
    versionId: string,
    relatedWorkId: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/version/{versionId}/relatedwork/{relatedWorkId}',
      path: {
        'versionId': versionId,
        'relatedWorkId': relatedWorkId,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if
        the authentication credentials are incorrect.`,
        403: `Returned if the user does not have the required permissions.`,
        404: `Returned if the version/related work is not found.`,
      },
    });
  }
}
