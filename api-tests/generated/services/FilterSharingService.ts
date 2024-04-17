/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { DefaultShareScope } from '../models/DefaultShareScope';
import type { SharePermission } from '../models/SharePermission';
import type { SharePermissionInputBean } from '../models/SharePermissionInputBean';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FilterSharingService {
  /**
   * Get default share scope
   * Returns the default sharing settings for new filters and dashboards for a user.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @returns DefaultShareScope Returned if the request is successful.
   * @throws ApiError
   */
  public static getDefaultShareScope(): CancelablePromise<DefaultShareScope> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/filter/defaultShareScope',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Set default share scope
   * Sets the default sharing for new filters and dashboards for a user.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param requestBody
   * @returns DefaultShareScope Returned if the request is successful.
   * @throws ApiError
   */
  public static setDefaultShareScope(
    requestBody: DefaultShareScope,
  ): CancelablePromise<DefaultShareScope> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/filter/defaultShareScope',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if an invalid scope is set.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get share permissions
   * Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None, however, share permissions are only returned for:
   *
   * *  filters owned by the user.
   * *  filters shared with a group that the user is a member of.
   * *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
   * *  filters shared with a public project.
   * *  filters shared with the public.
   * @param id The ID of the filter.
   * @returns SharePermission Returned if the request is successful.
   * @throws ApiError
   */
  public static getSharePermissions(
    id: number,
  ): CancelablePromise<Array<SharePermission>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/filter/{id}/permission',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  the filter is not found.
         *  the user does not have permission to view the filter.`,
      },
    });
  }
  /**
   * Add share permission
   * Add a share permissions to a filter. If you add a global share permission (one for all logged-in users or the public) it will overwrite all share permissions for the filter.
   *
   * Be aware that this operation uses different objects for updating share permissions compared to [Update filter](#api-rest-api-2-filter-id-put).
   *
   * **[Permissions](#permissions) required:** *Share dashboards and filters* [global permission](https://confluence.atlassian.com/x/x4dKLg) and the user must own the filter.
   * @param id The ID of the filter.
   * @param requestBody
   * @returns SharePermission Returned if the request is successful.
   * @throws ApiError
   */
  public static addSharePermission(
    id: number,
    requestBody: SharePermissionInputBean,
  ): CancelablePromise<Array<SharePermission>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/filter/{id}/permission',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  the request object is invalid. For example, it contains an invalid type, the ID does not match the type, or the project or group is not found.
         *  the user does not own the filter.
         *  the user does not have the required permissions.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  the filter is not found.
         *  the user does not have permission to view the filter.`,
      },
    });
  }
  /**
   * Delete share permission
   * Deletes a share permission from a filter.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira and the user must own the filter.
   * @param id The ID of the filter.
   * @param permissionId The ID of the share permission.
   * @returns void
   * @throws ApiError
   */
  public static deleteSharePermission(
    id: number,
    permissionId: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/filter/{id}/permission/{permissionId}',
      path: {
        'id': id,
        'permissionId': permissionId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  the filter is not found.
         *  the user does not own the filter.`,
      },
    });
  }
  /**
   * Get share permission
   * Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None, however, a share permission is only returned for:
   *
   * *  filters owned by the user.
   * *  filters shared with a group that the user is a member of.
   * *  filters shared with a private project that the user has *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.
   * *  filters shared with a public project.
   * *  filters shared with the public.
   * @param id The ID of the filter.
   * @param permissionId The ID of the share permission.
   * @returns SharePermission Returned if the request is successful.
   * @throws ApiError
   */
  public static getSharePermission(
    id: number,
    permissionId: number,
  ): CancelablePromise<SharePermission> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/filter/{id}/permission/{permissionId}',
      path: {
        'id': id,
        'permissionId': permissionId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  the filter is not found.
         *  the permission is not found.
         *  the user does not have permission to view the filter.`,
      },
    });
  }
}
