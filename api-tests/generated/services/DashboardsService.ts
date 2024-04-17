/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AvailableDashboardGadgetsResponse } from '../models/AvailableDashboardGadgetsResponse';
import type { BulkEditShareableEntityRequest } from '../models/BulkEditShareableEntityRequest';
import type { BulkEditShareableEntityResponse } from '../models/BulkEditShareableEntityResponse';
import type { Dashboard } from '../models/Dashboard';
import type { DashboardDetails } from '../models/DashboardDetails';
import type { DashboardGadget } from '../models/DashboardGadget';
import type { DashboardGadgetResponse } from '../models/DashboardGadgetResponse';
import type { DashboardGadgetSettings } from '../models/DashboardGadgetSettings';
import type { DashboardGadgetUpdateRequest } from '../models/DashboardGadgetUpdateRequest';
import type { EntityProperty } from '../models/EntityProperty';
import type { PageBeanDashboard } from '../models/PageBeanDashboard';
import type { PageOfDashboards } from '../models/PageOfDashboards';
import type { PropertyKeys } from '../models/PropertyKeys';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DashboardsService {
  /**
   * Get all dashboards
   * Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None.
   * @param filter The filter applied to the list of dashboards. Valid values are:
   *
   * *  `favourite` Returns dashboards the user has marked as favorite.
   * *  `my` Returns dashboards owned by the user.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageOfDashboards Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllDashboards(
    filter?: 'my' | 'favourite',
    startAt?: number,
    maxResults: number = 20,
  ): CancelablePromise<PageOfDashboards> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/dashboard',
      query: {
        'filter': filter,
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Create dashboard
   * Creates a dashboard.
   *
   * **[Permissions](#permissions) required:** None.
   * @param requestBody Dashboard details.
   * @returns Dashboard Returned if the request is successful.
   * @throws ApiError
   */
  public static createDashboard(
    requestBody: DashboardDetails,
  ): CancelablePromise<Dashboard> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/dashboard',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Bulk edit dashboards
   * Bulk edit dashboards. Maximum number of dashboards to be edited at the same time is 100.
   *
   * **[Permissions](#permissions) required:** None
   *
   * The dashboards to be updated must be owned by the user, or the user must be an administrator.
   * @param requestBody The details of dashboards being updated in bulk.
   * @returns BulkEditShareableEntityResponse Returned if the request is successful.
   * @throws ApiError
   */
  public static bulkEditDashboards(
    requestBody: BulkEditShareableEntityRequest,
  ): CancelablePromise<BulkEditShareableEntityResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/dashboard/bulk/edit',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get available gadgets
   * Gets a list of all available gadgets that can be added to all dashboards.
   *
   * **[Permissions](#permissions) required:** None.
   * @returns AvailableDashboardGadgetsResponse Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllAvailableDashboardGadgets(): CancelablePromise<AvailableDashboardGadgetsResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/dashboard/gadgets',
      errors: {
        400: `400 response`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Search for dashboards
   * Returns a [paginated](#pagination) list of dashboards. This operation is similar to [Get dashboards](#api-rest-api-2-dashboard-get) except that the results can be refined to include dashboards that have specific attributes. For example, dashboards with a particular name. When multiple attributes are specified only filters matching all attributes are returned.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** The following dashboards that match the query parameters are returned:
   *
   * *  Dashboards owned by the user. Not returned for anonymous users.
   * *  Dashboards shared with a group that the user is a member of. Not returned for anonymous users.
   * *  Dashboards shared with a private project that the user can browse. Not returned for anonymous users.
   * *  Dashboards shared with a public project.
   * *  Dashboards shared with the public.
   * @param dashboardName String used to perform a case-insensitive partial match with `name`.
   * @param accountId User account ID used to return dashboards with the matching `owner.accountId`. This parameter cannot be used with the `owner` parameter.
   * @param owner This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching `owner.name`. This parameter cannot be used with the `accountId` parameter.
   * @param groupname As a group's name can change, use of `groupId` is recommended. Group name used to return dashboards that are shared with a group that matches `sharePermissions.group.name`. This parameter cannot be used with the `groupId` parameter.
   * @param groupId Group ID used to return dashboards that are shared with a group that matches `sharePermissions.group.groupId`. This parameter cannot be used with the `groupname` parameter.
   * @param projectId Project ID used to returns dashboards that are shared with a project that matches `sharePermissions.project.id`.
   * @param orderBy [Order](#ordering) the results by a field:
   *
   * *  `description` Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.
   * *  `favourite_count` Sorts by dashboard popularity.
   * *  `id` Sorts by dashboard ID.
   * *  `is_favourite` Sorts by whether the dashboard is marked as a favorite.
   * *  `name` Sorts by dashboard name.
   * *  `owner` Sorts by dashboard owner name.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param status The status to filter by. It may be active, archived or deleted.
   * @param expand Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `description` Returns the description of the dashboard.
   * *  `owner` Returns the owner of the dashboard.
   * *  `viewUrl` Returns the URL that is used to view the dashboard.
   * *  `favourite` Returns `isFavourite`, an indicator of whether the user has set the dashboard as a favorite.
   * *  `favouritedCount` Returns `popularity`, a count of how many users have set this dashboard as a favorite.
   * *  `sharePermissions` Returns details of the share permissions defined for the dashboard.
   * *  `editPermissions` Returns details of the edit permissions defined for the dashboard.
   * *  `isWritable` Returns whether the current user has permission to edit the dashboard.
   * @returns PageBeanDashboard Returned if the request is successful.
   * @throws ApiError
   */
  public static getDashboardsPaginated(
    dashboardName?: string,
    accountId?: string,
    owner?: string,
    groupname?: string,
    groupId?: string,
    projectId?: number,
    orderBy: 'description' | '-description' | '+description' | 'favorite_count' | '-favorite_count' | '+favorite_count' | 'id' | '-id' | '+id' | 'is_favorite' | '-is_favorite' | '+is_favorite' | 'name' | '-name' | '+name' | 'owner' | '-owner' | '+owner' = 'name',
    startAt?: number,
    maxResults: number = 50,
    status: 'active' | 'archived' | 'deleted' = 'active',
    expand?: string,
  ): CancelablePromise<PageBeanDashboard> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/dashboard/search',
      query: {
        'dashboardName': dashboardName,
        'accountId': accountId,
        'owner': owner,
        'groupname': groupname,
        'groupId': groupId,
        'projectId': projectId,
        'orderBy': orderBy,
        'startAt': startAt,
        'maxResults': maxResults,
        'status': status,
        'expand': expand,
      },
      errors: {
        400: `Returned if:
         *  \`orderBy\` is invalid.
         *  \`expand\` includes an invalid value.
         *  \`accountId\` and \`owner\` are provided.
         *  \`groupname\` and \`groupId\` are provided.`,
        401: `401 response`,
      },
    });
  }
  /**
   * Get gadgets
   * Returns a list of dashboard gadgets on a dashboard.
   *
   * This operation returns:
   *
   * *  Gadgets from a list of IDs, when `id` is set.
   * *  Gadgets with a module key, when `moduleKey` is set.
   * *  Gadgets from a list of URIs, when `uri` is set.
   * *  All gadgets, when no other parameters are set.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None.
   * @param dashboardId The ID of the dashboard.
   * @param moduleKey The list of gadgets module keys. To include multiple module keys, separate module keys with ampersand: `moduleKey=key:one&moduleKey=key:two`.
   * @param uri The list of gadgets URIs. To include multiple URIs, separate URIs with ampersand: `uri=/rest/example/uri/1&uri=/rest/example/uri/2`.
   * @param gadgetId The list of gadgets IDs. To include multiple IDs, separate IDs with ampersand: `gadgetId=10000&gadgetId=10001`.
   * @returns DashboardGadgetResponse Returned if the request is successful.
   * @throws ApiError
   */
  public static getAllGadgets(
    dashboardId: number,
    moduleKey?: Array<string>,
    uri?: Array<string>,
    gadgetId?: Array<number>,
  ): CancelablePromise<DashboardGadgetResponse> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/dashboard/{dashboardId}/gadget',
      path: {
        'dashboardId': dashboardId,
      },
      query: {
        'moduleKey': moduleKey,
        'uri': uri,
        'gadgetId': gadgetId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect.`,
        404: `Returned if the dashboard is not found.`,
      },
    });
  }
  /**
   * Add gadget to dashboard
   * Adds a gadget to a dashboard.
   *
   * **[Permissions](#permissions) required:** None.
   * @param dashboardId The ID of the dashboard.
   * @param requestBody
   * @returns DashboardGadget Returned if the request is successful.
   * @throws ApiError
   */
  public static addGadget(
    dashboardId: number,
    requestBody: DashboardGadgetSettings,
  ): CancelablePromise<DashboardGadget> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/dashboard/{dashboardId}/gadget',
      path: {
        'dashboardId': dashboardId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the dashboard is not found.`,
      },
    });
  }
  /**
   * Remove gadget from dashboard
   * Removes a dashboard gadget from a dashboard.
   *
   * When a gadget is removed from a dashboard, other gadgets in the same column are moved up to fill the emptied position.
   *
   * **[Permissions](#permissions) required:** None.
   * @param dashboardId The ID of the dashboard.
   * @param gadgetId The ID of the gadget.
   * @returns void
   * @throws ApiError
   */
  public static removeGadget(
    dashboardId: number,
    gadgetId: number,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/dashboard/{dashboardId}/gadget/{gadgetId}',
      path: {
        'dashboardId': dashboardId,
        'gadgetId': gadgetId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the gadget or the dashboard is not found.`,
      },
    });
  }
  /**
   * Update gadget on dashboard
   * Changes the title, position, and color of the gadget on a dashboard.
   *
   * **[Permissions](#permissions) required:** None.
   * @param dashboardId The ID of the dashboard.
   * @param gadgetId The ID of the gadget.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static updateGadget(
    dashboardId: number,
    gadgetId: number,
    requestBody: DashboardGadgetUpdateRequest,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/dashboard/{dashboardId}/gadget/{gadgetId}',
      path: {
        'dashboardId': dashboardId,
        'gadgetId': gadgetId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect.`,
        404: `Returned if the gadget or the dashboard is not found.`,
      },
    });
  }
  /**
   * Get dashboard item property keys
   * Returns the keys of all properties for a dashboard item.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** The user must be the owner of the dashboard or have the dashboard shared with them. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard. The System dashboard is considered to be shared with all other users, and is accessible to anonymous users when Jira\\u2019s anonymous access is permitted.
   * @param dashboardId The ID of the dashboard.
   * @param itemId The ID of the dashboard item.
   * @returns PropertyKeys Returned if the request is successful.
   * @throws ApiError
   */
  public static getDashboardItemPropertyKeys(
    dashboardId: string,
    itemId: string,
  ): CancelablePromise<PropertyKeys> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/dashboard/{dashboardId}/items/{itemId}/properties',
      path: {
        'dashboardId': dashboardId,
        'itemId': itemId,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the dashboard or dashboard item is not found, or the dashboard is not owned by or shared with the user.`,
      },
    });
  }
  /**
   * Delete dashboard item property
   * Deletes a dashboard item property.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** The user must be the owner of the dashboard. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard.
   * @param dashboardId The ID of the dashboard.
   * @param itemId The ID of the dashboard item.
   * @param propertyKey The key of the dashboard item property.
   * @returns void
   * @throws ApiError
   */
  public static deleteDashboardItemProperty(
    dashboardId: string,
    itemId: string,
    propertyKey: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}',
      path: {
        'dashboardId': dashboardId,
        'itemId': itemId,
        'propertyKey': propertyKey,
      },
      errors: {
        400: `Returned if the dashboard or dashboard item ID is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user is not the owner of the dashboard.`,
        404: `Returned if the dashboard item is not found or the dashboard is not shared with the user.`,
      },
    });
  }
  /**
   * Get dashboard item property
   * Returns the key and value of a dashboard item property.
   *
   * A dashboard item enables an app to add user-specific information to a user dashboard. Dashboard items are exposed to users as gadgets that users can add to their dashboards. For more information on how users do this, see [Adding and customizing gadgets](https://confluence.atlassian.com/x/7AeiLQ).
   *
   * When an app creates a dashboard item it registers a callback to receive the dashboard item ID. The callback fires whenever the item is rendered or, where the item is configurable, the user edits the item. The app then uses this resource to store the item's content or configuration details. For more information on working with dashboard items, see [ Building a dashboard item for a JIRA Connect add-on](https://developer.atlassian.com/server/jira/platform/guide-building-a-dashboard-item-for-a-jira-connect-add-on-33746254/) and the [Dashboard Item](https://developer.atlassian.com/cloud/jira/platform/modules/dashboard-item/) documentation.
   *
   * There is no resource to set or get dashboard items.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** The user must be the owner of the dashboard or have the dashboard shared with them. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard. The System dashboard is considered to be shared with all other users, and is accessible to anonymous users when Jira\\u2019s anonymous access is permitted.
   * @param dashboardId The ID of the dashboard.
   * @param itemId The ID of the dashboard item.
   * @param propertyKey The key of the dashboard item property.
   * @returns EntityProperty Returned if the request is successful.
   * @throws ApiError
   */
  public static getDashboardItemProperty(
    dashboardId: string,
    itemId: string,
    propertyKey: string,
  ): CancelablePromise<EntityProperty> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}',
      path: {
        'dashboardId': dashboardId,
        'itemId': itemId,
        'propertyKey': propertyKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the dashboard, the dashboard item, or dashboard item property is not found, or the dashboard is not owned by or shared with the user.`,
      },
    });
  }
  /**
   * Set dashboard item property
   * Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item.
   *
   * A dashboard item enables an app to add user-specific information to a user dashboard. Dashboard items are exposed to users as gadgets that users can add to their dashboards. For more information on how users do this, see [Adding and customizing gadgets](https://confluence.atlassian.com/x/7AeiLQ).
   *
   * When an app creates a dashboard item it registers a callback to receive the dashboard item ID. The callback fires whenever the item is rendered or, where the item is configurable, the user edits the item. The app then uses this resource to store the item's content or configuration details. For more information on working with dashboard items, see [ Building a dashboard item for a JIRA Connect add-on](https://developer.atlassian.com/server/jira/platform/guide-building-a-dashboard-item-for-a-jira-connect-add-on-33746254/) and the [Dashboard Item](https://developer.atlassian.com/cloud/jira/platform/modules/dashboard-item/) documentation.
   *
   * There is no resource to set or get dashboard items.
   *
   * The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** The user must be the owner of the dashboard. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard.
   * @param dashboardId The ID of the dashboard.
   * @param itemId The ID of the dashboard item.
   * @param propertyKey The key of the dashboard item property. The maximum length is 255 characters. For dashboard items with a spec URI and no complete module key, if the provided propertyKey is equal to "config", the request body's JSON must be an object with all keys and values as strings.
   * @param requestBody The value of the property. The value has to be a valid, non-empty [JSON](https://tools.ietf.org/html/rfc4627) value. The maximum length of the property value is 32768 bytes.
   * @returns any Returned if the dashboard item property is updated.
   * @throws ApiError
   */
  public static setDashboardItemProperty(
    dashboardId: string,
    itemId: string,
    propertyKey: string,
    requestBody: any,
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}',
      path: {
        'dashboardId': dashboardId,
        'itemId': itemId,
        'propertyKey': propertyKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  Request is invalid
         *  Or if all of these conditions are met in the request:

         *  The dashboard item has a spec URI and no complete module key
         *  The value of propertyKey is equal to "config"
         *  The request body contains a JSON object whose keys and values are not strings.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user is not the owner of the dashboard.`,
        404: `Returned if the dashboard item is not found or the dashboard is not shared with the user.`,
      },
    });
  }
  /**
   * Delete dashboard
   * Deletes a dashboard.
   *
   * **[Permissions](#permissions) required:** None
   *
   * The dashboard to be deleted must be owned by the user.
   * @param id The ID of the dashboard.
   * @returns void
   * @throws ApiError
   */
  public static deleteDashboard(
    id: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/dashboard/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `400 response`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get dashboard
   * Returns a dashboard.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None.
   *
   * However, to get a dashboard, the dashboard must be shared with the user or the user must own it. Note, users with the *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) are considered owners of the System dashboard. The System dashboard is considered to be shared with all other users.
   * @param id The ID of the dashboard.
   * @returns Dashboard Returned if the request is successful.
   * @throws ApiError
   */
  public static getDashboard(
    id: string,
  ): CancelablePromise<Dashboard> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/dashboard/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `400 response`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the dashboard is not found or the dashboard is not owned by or shared with the user.`,
      },
    });
  }
  /**
   * Update dashboard
   * Updates a dashboard, replacing all the dashboard details with those provided.
   *
   * **[Permissions](#permissions) required:** None
   *
   * The dashboard to be updated must be owned by the user.
   * @param id The ID of the dashboard to update.
   * @param requestBody Replacement dashboard details.
   * @returns Dashboard Returned if the request is successful.
   * @throws ApiError
   */
  public static updateDashboard(
    id: string,
    requestBody: DashboardDetails,
  ): CancelablePromise<Dashboard> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/dashboard/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the dashboard is not found or the dashboard is not owned by the user.`,
      },
    });
  }
  /**
   * Copy dashboard
   * Copies a dashboard. Any values provided in the `dashboard` parameter replace those in the copied dashboard.
   *
   * **[Permissions](#permissions) required:** None
   *
   * The dashboard to be copied must be owned by or shared with the user.
   * @param id
   * @param requestBody Dashboard details.
   * @returns Dashboard Returned if the request is successful.
   * @throws ApiError
   */
  public static copyDashboard(
    id: string,
    requestBody: DashboardDetails,
  ): CancelablePromise<Dashboard> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/dashboard/{id}/copy',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the dashboard is not found or the dashboard is not owned by or shared with the user.`,
      },
    });
  }
}
