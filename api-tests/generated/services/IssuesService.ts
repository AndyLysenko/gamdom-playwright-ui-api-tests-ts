/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ArchivedIssuesFilterRequest } from '../models/ArchivedIssuesFilterRequest';
import type { ArchiveIssueAsyncRequest } from '../models/ArchiveIssueAsyncRequest';
import type { CreatedIssue } from '../models/CreatedIssue';
import type { CreatedIssues } from '../models/CreatedIssues';
import type { ExportArchivedIssuesTaskProgressResponse } from '../models/ExportArchivedIssuesTaskProgressResponse';
import type { IssueArchivalSyncRequest } from '../models/IssueArchivalSyncRequest';
import type { IssueArchivalSyncResponse } from '../models/IssueArchivalSyncResponse';
import type { IssueBean } from '../models/IssueBean';
import type { IssueChangelogIds } from '../models/IssueChangelogIds';
import type { IssueCreateMetadata } from '../models/IssueCreateMetadata';
import type { IssueEvent } from '../models/IssueEvent';
import type { IssueLimitReportRequest } from '../models/IssueLimitReportRequest';
import type { IssueLimitReportResponseBean } from '../models/IssueLimitReportResponseBean';
import type { IssuesUpdateBean } from '../models/IssuesUpdateBean';
import type { IssueUpdateDetails } from '../models/IssueUpdateDetails';
import type { IssueUpdateMetadata } from '../models/IssueUpdateMetadata';
import type { Notification } from '../models/Notification';
import type { PageBeanChangelog } from '../models/PageBeanChangelog';
import type { PageOfChangelogs } from '../models/PageOfChangelogs';
import type { PageOfCreateMetaIssueTypes } from '../models/PageOfCreateMetaIssueTypes';
import type { PageOfCreateMetaIssueTypeWithField } from '../models/PageOfCreateMetaIssueTypeWithField';
import type { Transitions } from '../models/Transitions';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssuesService {
  /**
   * Get events
   * Returns all issue events.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns IssueEvent Returned if the request is successful.
   * @throws ApiError
   */
  public static getEvents(): CancelablePromise<Array<IssueEvent>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/events',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to complete this request.`,
      },
    });
  }
  /**
   * Create issue
   * Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask. A transition may be applied, to move the issue or subtask to a workflow step other than the default start step, and issue properties set.
   *
   * The content of the issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get). These are the same fields that appear on the issue's create screen.
   *
   * Creating a subtask differs from creating an issue as follows:
   *
   * *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get) to find subtask issue types).
   * *  `parent` must contain the ID or key of the parent issue.
   *
   * **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which the issue or subtask is created.
   * @param requestBody
   * @param updateHistory Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. When provided, the issue type and request type are added to the user's history for a project. These values are then used to provide defaults on the issue create screen.
   * @returns CreatedIssue Returned if the request is successful.
   * @throws ApiError
   */
  public static createIssue(
    requestBody: IssueUpdateDetails,
    updateHistory: boolean = false,
  ): CancelablePromise<CreatedIssue> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue',
      query: {
        'updateHistory': updateHistory,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request:
         *  is missing required fields.
         *  contains invalid field values.
         *  contains fields that cannot be set for the issue type.
         *  is by a user who does not have the necessary permission.
         *  is to create a subtype in a project different that of the parent issue.
         *  is for a subtask when the option to create subtasks is disabled.
         *  is invalid for any other reason.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        422: `Returned if a configuration problem prevents the creation of the issue. (refer to the [changelog](https://developer.atlassian.com/changelog/#CHANGE-1364) *for more details.*`,
      },
    });
  }
  /**
   * Archive issue(s) by JQL
   * Enables admins to archive up to 100,000 issues in a single request using JQL, returning the URL to check the status of the submitted request.
   *
   * You can use the [get task](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-tasks/#api-rest-api-3-task-taskid-get) and [cancel task](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-tasks/#api-rest-api-3-task-taskid-cancel-post) APIs to manage the request.
   *
   * **Note that:**
   *
   * *  you can't archive subtasks directly, only through their parent issues
   * *  you can only archive issues from software, service management, and business projects
   *
   * **[Permissions](#permissions) required:** Jira admin or site admin: [global permission](https://confluence.atlassian.com/x/x4dKLg)
   *
   * **License required:** Premium or Enterprise
   *
   * **Signed-in users only:** This API can't be accessed anonymously.
   *
   * **Rate limiting:** Only a single request per jira instance can be active at any given time.
   *
   *
   *
   * @param requestBody A JQL query specifying the issues to archive. Note that subtasks can only be archived through their parent issues.
   * @returns string Returns the URL to check the status of the submitted request.
   * @throws ApiError
   */
  public static archiveIssuesAsync(
    requestBody: ArchiveIssueAsyncRequest,
  ): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/archive',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if no issues were archived due to a bad request, for example an invalid JQL query.`,
        401: `Returned if no issues were archived because the provided authentication credentials are either missing or invalid.`,
        403: `Returned if no issues were archived because the user lacks the required Jira admin or site admin permissions.`,
        412: `Returned if a request to archive issue(s) is already running.`,
      },
    });
  }
  /**
   * Archive issue(s) by issue ID/key
   * Enables admins to archive up to 1000 issues in a single request using issue ID/key, returning details of the issue(s) archived in the process and the errors encountered, if any.
   *
   * **Note that:**
   *
   * *  you can't archive subtasks directly, only through their parent issues
   * *  you can only archive issues from software, service management, and business projects
   *
   * **[Permissions](#permissions) required:** Jira admin or site admin: [global permission](https://confluence.atlassian.com/x/x4dKLg)
   *
   * **License required:** Premium or Enterprise
   *
   * **Signed-in users only:** This API can't be accessed anonymously.
   *
   *
   *
   * @param requestBody Contains a list of issue keys or IDs to be archived.
   * @returns IssueArchivalSyncResponse Returned if there is at least one valid issue to archive in the request. The return message will include the count of archived issues and subtasks, as well as error details for issues which failed to get archived.
   * @throws ApiError
   */
  public static archiveIssues(
    requestBody: IssueArchivalSyncRequest,
  ): CancelablePromise<IssueArchivalSyncResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issue/archive',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if none of the issues in the request can be archived. Possible reasons:
         *  the issues weren't found
         *  the issues are subtasks
         *  the issues belong to unlicensed projects
         *  the issues belong to archived projects`,
        401: `Returned if no issues were archived because the provided authentication credentials are either missing or invalid.`,
        403: `Returned if no issues were archived because the user lacks the required Jira admin or site admin permissions.`,
        412: `Returned if one or more issues were successfully archived, but the operation was incomplete because the number of issue IDs or keys provided exceeds 1000.`,
      },
    });
  }
  /**
   * Bulk create issue
   * Creates upto **50** issues and, where the option to create subtasks is enabled in Jira, subtasks. Transitions may be applied, to move the issues or subtasks to a workflow step other than the default start step, and issue properties set.
   *
   * The content of each issue or subtask is defined using `update` and `fields`. The fields that can be set in the issue or subtask are determined using the [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get). These are the same fields that appear on the issues' create screens.
   *
   * Creating a subtask differs from creating an issue as follows:
   *
   * *  `issueType` must be set to a subtask issue type (use [ Get create issue metadata](#api-rest-api-2-issue-createmeta-get) to find subtask issue types).
   * *  `parent` the must contain the ID or key of the parent issue.
   *
   * **[Permissions](#permissions) required:** *Browse projects* and *Create issues* [project permissions](https://confluence.atlassian.com/x/yodKLg) for the project in which each issue or subtask is created.
   * @param requestBody
   * @returns CreatedIssues Returned if any of the issue or subtask creation requests were successful. A request may be unsuccessful when it:
   *
   * *  is missing required fields.
   * *  contains invalid field values.
   * *  contains fields that cannot be set for the issue type.
   * *  is by a user who does not have the necessary permission.
   * *  is to create a subtype in a project different that of the parent issue.
   * *  is for a subtask when the option to create subtasks is disabled.
   * *  is invalid for any other reason.
   * @throws ApiError
   */
  public static createIssues(
    requestBody: IssuesUpdateBean,
  ): CancelablePromise<CreatedIssues> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/bulk',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if all requests are invalid. Requests may be unsuccessful when they:
         *  are missing required fields.
         *  contain invalid field values.
         *  contain fields that cannot be set for the issue type.
         *  are by a user who does not have the necessary permission.
         *  are to create a subtype in a project different that of the parent issue.
         *  is for a subtask when the option to create subtasks is disabled.
         *  are invalid for any other reason.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * @deprecated
   * Get create issue metadata
   * Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in [ Create issue](#api-rest-api-2-issue-post) and [Create issues](#api-rest-api-2-issue-bulk-post).
   *
   * Deprecated, see [Create Issue Meta Endpoint Deprecation Notice](https://developer.atlassian.com/cloud/jira/platform/changelog/#CHANGE-1304).
   *
   * The request can be restricted to specific projects or issue types using the query parameters. The response will contain information for the valid projects, issue types, or project and issue type combinations requested. Note that invalid project, issue type, or project and issue type combinations do not generate errors.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) in the requested projects.
   * @param projectIds List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, `projectIds=10000,10001&projectIds=10020,10021`. This parameter may be provided with `projectKeys`.
   * @param projectKeys List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, `projectKeys=proj1,proj2&projectKeys=proj3`. This parameter may be provided with `projectIds`.
   * @param issuetypeIds List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, `issuetypeIds=10000,10001&issuetypeIds=10020,10021`. This parameter may be provided with `issuetypeNames`.
   * @param issuetypeNames List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, `issuetypeNames=name1,name2&issuetypeNames=name3`. This parameter may be provided with `issuetypeIds`.
   * @param expand Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts `projects.issuetypes.fields`, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the `fields` and `update` fields in [Create issue](#api-rest-api-2-issue-post) and [Create issues](#api-rest-api-2-issue-bulk-post).
   * @returns IssueCreateMetadata Returned if the request is successful.
   * @throws ApiError
   */
  public static getCreateIssueMeta(
    projectIds?: Array<string>,
    projectKeys?: Array<string>,
    issuetypeIds?: Array<string>,
    issuetypeNames?: Array<string>,
    expand?: string,
  ): CancelablePromise<IssueCreateMetadata> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/createmeta',
      query: {
        'projectIds': projectIds,
        'projectKeys': projectKeys,
        'issuetypeIds': issuetypeIds,
        'issuetypeNames': issuetypeNames,
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get create metadata issue types for a project
   * Returns a page of issue type metadata for a specified project. Use the information to populate the requests in [ Create issue](#api-rest-api-2-issue-post) and [Create issues](#api-rest-api-2-issue-bulk-post).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) in the requested projects.
   * @param projectIdOrKey The ID or key of the project.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageOfCreateMetaIssueTypes Returned if the request is successful.
   * @throws ApiError
   */
  public static getCreateIssueMetaIssueTypes(
    projectIdOrKey: string,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageOfCreateMetaIssueTypes> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/createmeta/{projectIdOrKey}/issuetypes',
      path: {
        'projectIdOrKey': projectIdOrKey,
      },
      query: {
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
   * Get create field metadata for a project and issue type id
   * Returns a page of field metadata for a specified project and issuetype id. Use the information to populate the requests in [ Create issue](#api-rest-api-2-issue-post) and [Create issues](#api-rest-api-2-issue-bulk-post).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** *Create issues* [project permission](https://confluence.atlassian.com/x/yodKLg) in the requested projects.
   * @param projectIdOrKey The ID or key of the project.
   * @param issueTypeId The issuetype ID.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageOfCreateMetaIssueTypeWithField Returned if the request is successful.
   * @throws ApiError
   */
  public static getCreateIssueMetaIssueTypeId(
    projectIdOrKey: string,
    issueTypeId: string,
    startAt?: number,
    maxResults: number = 50,
  ): CancelablePromise<PageOfCreateMetaIssueTypeWithField> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/createmeta/{projectIdOrKey}/issuetypes/{issueTypeId}',
      path: {
        'projectIdOrKey': projectIdOrKey,
        'issueTypeId': issueTypeId,
      },
      query: {
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
   * Get issue limit report
   * Returns all issues breaching and approaching per-issue limits.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns IssueLimitReportResponseBean Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssueLimitReport(
    requestBody: IssueLimitReportRequest,
  ): CancelablePromise<IssueLimitReportResponseBean> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/limit/report',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid. Other possible reasons:
         *  the field queried is not supported
         *  the threshold is not within the supported range`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to complete this request.`,
      },
    });
  }
  /**
   * Unarchive issue(s) by issue keys/ID
   * Enables admins to unarchive up to 1000 issues in a single request using issue ID/key, returning details of the issue(s) unarchived in the process and the errors encountered, if any.
   *
   * **Note that:**
   *
   * *  you can't unarchive subtasks directly, only through their parent issues
   * *  you can only unarchive issues from software, service management, and business projects
   *
   * **[Permissions](#permissions) required:** Jira admin or site admin: [global permission](https://confluence.atlassian.com/x/x4dKLg)
   *
   * **License required:** Premium or Enterprise
   *
   * **Signed-in users only:** This API can't be accessed anonymously.
   *
   *
   *
   * @param requestBody Contains a list of issue keys or IDs to be unarchived.
   * @returns IssueArchivalSyncResponse Returned if there is at least one valid issue to unarchive in the request. It will return the count of unarchived issues, which also includes the count of the subtasks unarchived, and it will show the detailed errors for those issues which are not unarchived.
   * @throws ApiError
   */
  public static unarchiveIssues(
    requestBody: IssueArchivalSyncRequest,
  ): CancelablePromise<IssueArchivalSyncResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issue/unarchive',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if none of the issues in the request are eligible to be unarchived. Possible reasons:
         *  the issues weren't found
         *  the issues are subtasks
         *  the issues belong to archived projects`,
        401: `Returned if no issues were unarchived because the provided authentication credentials are either missing or invalid.`,
        403: `Returned if no issues were unarchived because the user lacks the required Jira admin or site admin permissions.`,
        412: `Returned if one or more issues were successfully unarchived, but the operation was incomplete because the number of issue IDs or keys provided exceeds 1000.`,
      },
    });
  }
  /**
   * Delete issue
   * Deletes an issue.
   *
   * An issue cannot be deleted if it has one or more subtasks. To delete an issue with subtasks, set `deleteSubtasks`. This causes the issue's subtasks to be deleted with the issue.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Delete issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param deleteSubtasks Whether the issue's subtasks are deleted when the issue is deleted.
   * @returns void
   * @throws ApiError
   */
  public static deleteIssue(
    issueIdOrKey: string,
    deleteSubtasks: 'true' | 'false' = 'false',
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issue/{issueIdOrKey}',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'deleteSubtasks': deleteSubtasks,
      },
      errors: {
        400: `Returned if the issue has subtasks and \`deleteSubtasks\` is not set to *true*.`,
        401: `Returned if the authentication credentials are incorrect.`,
        403: `Returned if the user does not have permission to delete the issue.`,
        404: `Returned if the issue is not found or the user does not have permission to view the issue.`,
      },
    });
  }
  /**
   * Get issue
   * Returns the details for an issue.
   *
   * The issue is identified by its ID or key, however, if the identifier doesn't match an issue, a case-insensitive search and check for moved issues is performed. If a matching issue is found its details are returned, a 302 or other redirect is **not** returned. The issue key returned in the response is the key of the issue found.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param fields A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:
   *
   * *  `*all` Returns all fields.
   * *  `*navigable` Returns navigable fields.
   * *  Any issue field, prefixed with a minus to exclude.
   *
   * Examples:
   *
   * *  `summary,comment` Returns only the summary and comments fields.
   * *  `-description` Returns all (default) fields except description.
   * *  `*navigable,-comment` Returns all navigable fields except comment.
   *
   * This parameter may be specified multiple times. For example, `fields=field1,field2& fields=field3`.
   *
   * Note: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-2-search-get) and [Search for issues using JQL (POST)](#api-rest-api-2-search-post) where the default is all navigable fields.
   * @param fieldsByKeys Whether fields in `fields` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.
   * @param expand Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `renderedFields` Returns field values rendered in HTML format.
   * *  `names` Returns the display name of each field.
   * *  `schema` Returns the schema describing a field type.
   * *  `transitions` Returns all possible transitions for the issue.
   * *  `editmeta` Returns information about how each field can be edited.
   * *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.
   * *  `versionedRepresentations` Returns a JSON array for each version of a field's value, with the highest number representing the most recent version. Note: When included in the request, the `fields` parameter is ignored.
   * @param properties A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:
   *
   * *  `*all` Returns all issue properties.
   * *  Any issue property key, prefixed with a minus to exclude.
   *
   * Examples:
   *
   * *  `*all` Returns all properties.
   * *  `*all,-prop1` Returns all properties except `prop1`.
   * *  `prop1,prop2` Returns `prop1` and `prop2` properties.
   *
   * This parameter may be specified multiple times. For example, `properties=prop1,prop2& properties=prop3`.
   * @param updateHistory Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-2-search-get) `lastViewed` field.
   * @returns IssueBean Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssue(
    issueIdOrKey: string,
    fields?: Array<string>,
    fieldsByKeys: boolean = false,
    expand?: string,
    properties?: Array<string>,
    updateHistory: boolean = false,
  ): CancelablePromise<IssueBean> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'fields': fields,
        'fieldsByKeys': fieldsByKeys,
        'expand': expand,
        'properties': properties,
        'updateHistory': updateHistory,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the issue is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Edit issue
   * Edits an issue. Issue properties may be updated as part of the edit. Please note that issue transition will be ignored as it is not supported yet.
   *
   * The edits to the issue's fields are defined using `update` and `fields`. The fields that can be edited are determined using [ Get edit issue metadata](#api-rest-api-2-issue-issueIdOrKey-editmeta-get).
   *
   * The parent field may be set by key or ID. For standard issue types, the parent may be removed by setting `update.parent.set.none` to *true*.
   *
   * Connect apps having an app user with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), can override the screen security configuration using `overrideScreenSecurity` and `overrideEditableFlag`.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param requestBody
   * @param notifyUsers Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.
   * @param overrideScreenSecurity Whether screen security is overridden to enable hidden fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param overrideEditableFlag Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param returnIssue Whether the response should contain the issue with fields edited in this request. The returned issue will have the same format as in the [Get issue API](#api-rest-api-3-issue-issueidorkey-get).
   * @param expand The Get issue API expand parameter to use in the response if the `returnIssue` parameter is `true`.
   * @returns any Returned if the request is successful and the `returnIssue` parameter is `true`
   * @throws ApiError
   */
  public static editIssue(
    issueIdOrKey: string,
    requestBody: IssueUpdateDetails,
    notifyUsers: boolean = true,
    overrideScreenSecurity: boolean = false,
    overrideEditableFlag: boolean = false,
    returnIssue: boolean = false,
    expand: string = '',
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issue/{issueIdOrKey}',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'notifyUsers': notifyUsers,
        'overrideScreenSecurity': overrideScreenSecurity,
        'overrideEditableFlag': overrideEditableFlag,
        'returnIssue': returnIssue,
        'expand': expand,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  the request body is missing.
         *  the user does not have the necessary permission to edit one or more fields.
         *  the request includes one or more fields that are not found or are not associated with the issue's edit screen.
         *  the request includes an invalid transition.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user uses \`overrideScreenSecurity\` or \`overrideEditableFlag\` but doesn't have the necessary permission.`,
        404: `Returned if the issue is not found or the user does not have permission to view it.`,
        409: `Returned if the issue could not be updated due to a conflicting update. (refer to the [changelog](https://developer.atlassian.com/changelog/#CHANGE-1364) *for more details.*`,
        422: `Returned if a configuration problem prevents the issue being updated. (refer to the [changelog](https://developer.atlassian.com/changelog/#CHANGE-1364) *for more details.*`,
      },
    });
  }
  /**
   * Assign issue
   * Assigns an issue to a user. Use this operation when the calling user does not have the *Edit Issues* permission but has the *Assign issue* permission for the project that the issue is in.
   *
   * If `name` or `accountId` is set to:
   *
   * *  `"-1"`, the issue is assigned to the default assignee for the project.
   * *  `null`, the issue is set to unassigned.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse Projects* and *Assign Issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue to be assigned.
   * @param requestBody The request object with the user that the issue is assigned to.
   * @returns void
   * @throws ApiError
   */
  public static assignIssue(
    issueIdOrKey: string,
    requestBody: User,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issue/{issueIdOrKey}/assignee',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  the user is not found.
         *  \`name\`, \`key\`, or \`accountId\` is missing.
         *  more than one of \`name\`, \`key\`, and \`accountId\` are provided.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if the issue is not found.`,
      },
    });
  }
  /**
   * Get changelogs
   * Returns a [paginated](#pagination) list of all changelogs for an issue sorted by date, starting from the oldest.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @returns PageBeanChangelog Returned if the request is successful.
   * @throws ApiError
   */
  public static getChangeLogs(
    issueIdOrKey: string,
    startAt?: number,
    maxResults: number = 100,
  ): CancelablePromise<PageBeanChangelog> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/changelog',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
      },
      errors: {
        404: `Returned if the issue is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Get changelogs by IDs
   * Returns changelogs for an issue specified by a list of changelog IDs.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param requestBody
   * @returns PageOfChangelogs Returned if the request is successful.
   * @throws ApiError
   */
  public static getChangeLogsByIds(
    issueIdOrKey: string,
    requestBody: IssueChangelogIds,
  ): CancelablePromise<PageOfChangelogs> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/{issueIdOrKey}/changelog/list',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is not valid.`,
        404: `Returned if the issue is not found or the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Get edit issue metadata
   * Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in [Edit issue](#api-rest-api-2-issue-issueIdOrKey-put).
   *
   * This endpoint will check for these conditions:
   *
   * 1.  Field is available on a field screen - through screen, screen scheme, issue type screen scheme, and issue type scheme configuration. `overrideScreenSecurity=true` skips this condition.
   * 2.  Field is visible in the [field configuration](https://support.atlassian.com/jira-cloud-administration/docs/change-a-field-configuration/). `overrideScreenSecurity=true` skips this condition.
   * 3.  Field is shown on the issue: each field has different conditions here. For example: Attachment field only shows if attachments are enabled. Assignee only shows if user has permissions to assign the issue.
   * 4.  If a field is custom then it must have valid custom field context, applicable for its project and issue type. All system fields are assumed to have context in all projects and all issue types.
   * 5.  Issue has a project, issue type, and status defined.
   * 6.  Issue is assigned to a valid workflow, and the current status has assigned a workflow step. `overrideEditableFlag=true` skips this condition.
   * 7.  The current workflow step is editable. This is true by default, but [can be disabled by setting](https://support.atlassian.com/jira-cloud-administration/docs/use-workflow-properties/) the `jira.issue.editable` property to `false`. `overrideEditableFlag=true` skips this condition.
   * 8.  User has [Edit issues permission](https://support.atlassian.com/jira-cloud-administration/docs/permissions-for-company-managed-projects/).
   * 9.  Workflow permissions allow editing a field. This is true by default but [can be modified](https://support.atlassian.com/jira-cloud-administration/docs/use-workflow-properties/) using `jira.permission.*` workflow properties.
   *
   * Fields hidden using [Issue layout settings page](https://support.atlassian.com/jira-software-cloud/docs/configure-field-layout-in-the-issue-view/) remain editable.
   *
   * Connect apps having an app user with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), can return additional details using:
   *
   * *  `overrideScreenSecurity` When this flag is `true`, then this endpoint skips checking if fields are available through screens, and field configuration (conditions 1. and 2. from the list above).
   * *  `overrideEditableFlag` When this flag is `true`, then this endpoint skips checking if workflow is present and if the current step is editable (conditions 6. and 7. from the list above).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * Note: For any fields to be editable the user must have the *Edit issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param overrideScreenSecurity Whether hidden fields are returned. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param overrideEditableFlag Whether non-editable fields are returned. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns IssueUpdateMetadata Returned if the request is successful.
   * @throws ApiError
   */
  public static getEditIssueMeta(
    issueIdOrKey: string,
    overrideScreenSecurity: boolean = false,
    overrideEditableFlag: boolean = false,
  ): CancelablePromise<IssueUpdateMetadata> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/editmeta',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'overrideScreenSecurity': overrideScreenSecurity,
        'overrideEditableFlag': overrideEditableFlag,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user uses an override parameter but doesn't have permission to do so.`,
        404: `Returned if the issue is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Send notification for issue
   * Creates an email notification for an issue and adds it to the mail queue.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey ID or key of the issue that the notification is sent for.
   * @param requestBody The request object for the notification and recipients.
   * @returns void
   * @throws ApiError
   */
  public static notify(
    issueIdOrKey: string,
    requestBody: Notification,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/{issueIdOrKey}/notify',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  the recipient is the same as the calling user.
         *  the recipient is invalid. For example, the recipient is set to the assignee, but the issue is unassigned.
         *  the request is invalid. For example, required fields are missing or have invalid values.`,
        403: `Returned if:
         *  outgoing emails are disabled.
         *  no SMTP server is configured.`,
        404: `Returned if the issue is not found.`,
      },
    });
  }
  /**
   * Get transitions
   * Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue's status.
   *
   * Note, if a request is made for a transition that does not exist or cannot be performed on the issue, given its status, the response will return any empty transitions list.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required: A list or transition is returned only when the user has:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   *
   * However, if the user does not have the *Transition issues* [ project permission](https://confluence.atlassian.com/x/yodKLg) the response will not list any transitions.
   * @param issueIdOrKey The ID or key of the issue.
   * @param expand Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts `transitions.fields`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the `fields` and `update` fields in [Transition issue](#api-rest-api-2-issue-issueIdOrKey-transitions-post).
   * @param transitionId The ID of the transition.
   * @param skipRemoteOnlyCondition Whether transitions with the condition *Hide From User Condition* are included in the response.
   * @param includeUnavailableTransitions Whether details of transitions that fail a condition are included in the response
   * @param sortByOpsBarAndStatus Whether the transitions are sorted by ops-bar sequence value first then category order (Todo, In Progress, Done) or only by ops-bar sequence value.
   * @returns Transitions Returned if the request is successful.
   * @throws ApiError
   */
  public static getTransitions(
    issueIdOrKey: string,
    expand?: string,
    transitionId?: string,
    skipRemoteOnlyCondition: boolean = false,
    includeUnavailableTransitions: boolean = false,
    sortByOpsBarAndStatus: boolean = false,
  ): CancelablePromise<Transitions> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/transitions',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'expand': expand,
        'transitionId': transitionId,
        'skipRemoteOnlyCondition': skipRemoteOnlyCondition,
        'includeUnavailableTransitions': includeUnavailableTransitions,
        'sortByOpsBarAndStatus': sortByOpsBarAndStatus,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the issue is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Transition issue
   * Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen.
   *
   * sortByCategory To update the fields on the transition screen, specify the fields in the `fields` or `update` parameters in the request body. Get details about the fields using [ Get transitions](#api-rest-api-2-issue-issueIdOrKey-transitions-get) with the `transitions.fields` expand.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Transition issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key of the issue.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static doTransition(
    issueIdOrKey: string,
    requestBody: IssueUpdateDetails,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/{issueIdOrKey}/transitions',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  no transition is specified.
         *  the user does not have permission to transition the issue.
         *  a field that isn't included on the transition screen is defined in \`fields\` or \`update\`.
         *  a field is specified in both \`fields\` and \`update\`.
         *  the request is invalid for any other reason.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if the issue is not found or the user does not have permission to view it.`,
        409: `Returned if the issue could not be updated due to a conflicting update. (refer to the [changelog](https://developer.atlassian.com/changelog/#CHANGE-1364) *for more details.*`,
        422: `Returned if a configuration problem prevents the creation of the issue. (refer to the [changelog](https://developer.atlassian.com/changelog/#CHANGE-1364) *for more details.*`,
      },
    });
  }
  /**
   * Export archived issue(s)
   * Enables admins to retrieve details of all archived issues. Upon a successful request, the admin who submitted it will receive an email with a link to download a CSV file with the issue details.
   *
   * Note that this API only exports the values of system fields and archival-specific fields (`ArchivedBy` and `ArchivedDate`). Custom fields aren't supported.
   *
   * **[Permissions](#permissions) required:** Jira admin or site admin: [global permission](https://confluence.atlassian.com/x/x4dKLg)
   *
   * **License required:** Premium or Enterprise
   *
   * **Signed-in users only:** This API can't be accessed anonymously.
   *
   * **Rate limiting:** Only a single request can be active at any given time.
   *
   *
   *
   * @param requestBody You can filter the issues in your request by the `projects`, `archivedBy`, `archivedDate`, `issueTypes`, and `reporters` fields. All filters are optional. If you don't provide any filters, you'll get a list of up to one million archived issues.
   * @returns ExportArchivedIssuesTaskProgressResponse Returns the details of your export task. You can use the [get task](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-tasks/#api-rest-api-3-task-taskid-get) API to view the progress of your request.
   * @throws ApiError
   */
  public static exportArchivedIssues(
    requestBody: ArchivedIssuesFilterRequest,
  ): CancelablePromise<ExportArchivedIssuesTaskProgressResponse> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issues/archive/export',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned when:
         *  The request is invalid, or the filters provided are incorrect
         *  You requested too many issues for export. The limit is one million issues per request`,
        401: `Returned if no issues were unarchived because the provided authentication credentials are either missing or invalid.`,
        403: `Returned if no issues were unarchived because the user lacks the required Jira admin or site admin permissions.`,
        412: `Returned if a request to export archived issues is already running.`,
      },
    });
  }
}
