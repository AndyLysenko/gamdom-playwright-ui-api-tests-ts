/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ChangedWorklogs } from '../models/ChangedWorklogs';
import type { PageOfWorklogs } from '../models/PageOfWorklogs';
import type { Worklog } from '../models/Worklog';
import type { WorklogIdsRequestBean } from '../models/WorklogIdsRequestBean';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueWorklogsService {
  /**
   * Get issue worklogs
   * Returns worklogs for an issue, starting from the oldest worklog or from the worklog started on or after a date and time.
   *
   * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** Workloads are only returned where the user has:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   * @param issueIdOrKey The ID or key of the issue.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param startedAfter The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned.
   * @param startedBefore The worklog start date and time, as a UNIX timestamp in milliseconds, before which worklogs are returned.
   * @param expand Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts`properties`, which returns worklog properties.
   * @returns PageOfWorklogs Returned if the request is successful
   * @throws ApiError
   */
  public static getIssueWorklog(
    issueIdOrKey: string,
    startAt?: number,
    maxResults: number = 5000,
    startedAfter?: number,
    startedBefore?: number,
    expand: string = '',
  ): CancelablePromise<PageOfWorklogs> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/worklog',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'startedAfter': startedAfter,
        'startedBefore': startedBefore,
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        404: `Returned if:
         *  the issue is not found or the user does not have permission to view the issue.
         *  \`startAt\` or \`maxResults\` has non-numeric values.
         *  time tracking is disabled.`,
      },
    });
  }
  /**
   * Add worklog
   * Adds a worklog to an issue.
   *
   * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* and *Work on issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param issueIdOrKey The ID or key the issue.
   * @param requestBody
   * @param notifyUsers Whether users watching the issue are notified by email.
   * @param adjustEstimate Defines how to update the issue's time estimate, the options are:
   *
   * *  `new` Sets the estimate to a specific value, defined in `newEstimate`.
   * *  `leave` Leaves the estimate unchanged.
   * *  `manual` Reduces the estimate by amount specified in `reduceBy`.
   * *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog.
   * @param newEstimate The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`.
   * @param reduceBy The amount to reduce the issue's remaining estimate by, as days (\#d), hours (\#h), or minutes (\#m). For example, *2d*. Required when `adjustEstimate` is `manual`.
   * @param expand Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts `properties`, which returns worklog properties.
   * @param overrideEditableFlag Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag.
   * @returns Worklog Returned if the request is successful.
   * @throws ApiError
   */
  public static addWorklog(
    issueIdOrKey: string,
    requestBody: Worklog,
    notifyUsers: boolean = true,
    adjustEstimate: 'new' | 'leave' | 'manual' | 'auto' = 'auto',
    newEstimate?: string,
    reduceBy?: string,
    expand: string = '',
    overrideEditableFlag: boolean = false,
  ): CancelablePromise<Worklog> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/issue/{issueIdOrKey}/worklog',
      path: {
        'issueIdOrKey': issueIdOrKey,
      },
      query: {
        'notifyUsers': notifyUsers,
        'adjustEstimate': adjustEstimate,
        'newEstimate': newEstimate,
        'reduceBy': reduceBy,
        'expand': expand,
        'overrideEditableFlag': overrideEditableFlag,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  \`adjustEstimate\` is set to \`new\` but \`newEstimate\` is not provided or is invalid.
         *  \`adjustEstimate\` is set to \`manual\` but \`reduceBy\` is not provided or is invalid.
         *  the user does not have permission to add the worklog.
         *  the request JSON is malformed.`,
        401: `Returned if the authentication credentials are incorrect.`,
        404: `Returned if the issue is not found or the user does not have permission to view it.`,
      },
    });
  }
  /**
   * Delete worklog
   * Deletes a worklog from an issue.
   *
   * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  *Delete all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any worklog or *Delete own worklogs* to delete worklogs created by the user,
   * *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   * @param issueIdOrKey The ID or key of the issue.
   * @param id The ID of the worklog.
   * @param notifyUsers Whether users watching the issue are notified by email.
   * @param adjustEstimate Defines how to update the issue's time estimate, the options are:
   *
   * *  `new` Sets the estimate to a specific value, defined in `newEstimate`.
   * *  `leave` Leaves the estimate unchanged.
   * *  `manual` Increases the estimate by amount specified in `increaseBy`.
   * *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog.
   * @param newEstimate The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`.
   * @param increaseBy The amount to increase the issue's remaining estimate by, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `manual`.
   * @param overrideEditableFlag Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag.
   * @returns void
   * @throws ApiError
   */
  public static deleteWorklog(
    issueIdOrKey: string,
    id: string,
    notifyUsers: boolean = true,
    adjustEstimate: 'new' | 'leave' | 'manual' | 'auto' = 'auto',
    newEstimate?: string,
    increaseBy?: string,
    overrideEditableFlag: boolean = false,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/issue/{issueIdOrKey}/worklog/{id}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'id': id,
      },
      query: {
        'notifyUsers': notifyUsers,
        'adjustEstimate': adjustEstimate,
        'newEstimate': newEstimate,
        'increaseBy': increaseBy,
        'overrideEditableFlag': overrideEditableFlag,
      },
      errors: {
        400: `Returned if:
         *  \`adjustEstimate\` is set to \`new\` but \`newEstimate\` is not provided or is invalid.
         *  \`adjustEstimate\` is set to \`manual\` but \`reduceBy\` is not provided or is invalid.
         *  the user does not have permission to delete the worklog.`,
        401: `Returned if the authentication credentials are incorrect.`,
        404: `Returned if:
         *  the issue is not found or user does not have permission to view the issue.
         *  the worklog is not found or the user does not have permission to view it.
         *  time tracking is disabled.`,
      },
    });
  }
  /**
   * Get worklog
   * Returns a worklog.
   *
   * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   * @param issueIdOrKey The ID or key of the issue.
   * @param id The ID of the worklog.
   * @param expand Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts
   *
   * `properties`, which returns worklog properties.
   * @returns Worklog Returned if the request is successful.
   * @throws ApiError
   */
  public static getWorklog(
    issueIdOrKey: string,
    id: string,
    expand: string = '',
  ): CancelablePromise<Worklog> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/{issueIdOrKey}/worklog/{id}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'id': id,
      },
      query: {
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect.`,
        404: `Returned if:
         *  the issue is not found or the user does not have permission to view it.
         *  the worklog is not found or the user does not have permission to view it.
         *  time tracking is disabled.
        .`,
      },
    });
  }
  /**
   * Update worklog
   * Updates a worklog.
   *
   * Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * *  *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit own worklogs* to update worklogs created by the user.
   * *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.
   * @param issueIdOrKey The ID or key the issue.
   * @param id The ID of the worklog.
   * @param requestBody
   * @param notifyUsers Whether users watching the issue are notified by email.
   * @param adjustEstimate Defines how to update the issue's time estimate, the options are:
   *
   * *  `new` Sets the estimate to a specific value, defined in `newEstimate`.
   * *  `leave` Leaves the estimate unchanged.
   * *  `auto` Updates the estimate by the difference between the original and updated value of `timeSpent` or `timeSpentSeconds`.
   * @param newEstimate The value to set as the issue's remaining time estimate, as days (\#d), hours (\#h), or minutes (\#m or \#). For example, *2d*. Required when `adjustEstimate` is `new`.
   * @param expand Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties`, which returns worklog properties.
   * @param overrideEditableFlag Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag.
   * @returns Worklog Returned if the request is successful
   * @throws ApiError
   */
  public static updateWorklog(
    issueIdOrKey: string,
    id: string,
    requestBody: Worklog,
    notifyUsers: boolean = true,
    adjustEstimate: 'new' | 'leave' | 'manual' | 'auto' = 'auto',
    newEstimate?: string,
    expand: string = '',
    overrideEditableFlag: boolean = false,
  ): CancelablePromise<Worklog> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/issue/{issueIdOrKey}/worklog/{id}',
      path: {
        'issueIdOrKey': issueIdOrKey,
        'id': id,
      },
      query: {
        'notifyUsers': notifyUsers,
        'adjustEstimate': adjustEstimate,
        'newEstimate': newEstimate,
        'expand': expand,
        'overrideEditableFlag': overrideEditableFlag,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if:
         *  \`adjustEstimate\` is set to \`new\` but \`newEstimate\` is not provided or is invalid.
         *  the user does not have permission to update the worklog.
         *  the request JSON is malformed.`,
        401: `Returned if the authentication credentials are incorrect.`,
        404: `Returned if:
         *  the issue is not found or user does not have permission to view the issue.
         *  the worklog is not found or the user does not have permission to view it.
         *  time tracking is disabled.`,
      },
    });
  }
  /**
   * Get IDs of deleted worklogs
   * Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.
   *
   * This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set to true on the last page of worklogs.
   *
   * This resource does not return worklogs deleted during the minute preceding the request.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira.
   * @param since The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned.
   * @returns ChangedWorklogs Returned if the request is successful.
   * @throws ApiError
   */
  public static getIdsOfWorklogsDeletedSince(
    since?: number,
  ): CancelablePromise<ChangedWorklogs> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/worklog/deleted',
      query: {
        'since': since,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get worklogs
   * Returns worklog details for a list of worklog IDs.
   *
   * The returned list of worklogs is limited to 1000 items.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira, however, worklogs are only returned where either of the following is true:
   *
   * *  the worklog is set as *Viewable by All Users*.
   * *  the user is a member of a project role or group with permission to view the worklog.
   * @param requestBody A JSON object containing a list of worklog IDs.
   * @param expand Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.
   * @returns Worklog Returned if the request is successful.
   * @throws ApiError
   */
  public static getWorklogsForIds(
    requestBody: WorklogIdsRequestBean,
    expand: string = '',
  ): CancelablePromise<Array<Worklog>> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/worklog/list',
      query: {
        'expand': expand,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request contains more than 1000 worklog IDs or is empty.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get IDs of updated worklogs
   * Returns a list of IDs and update timestamps for worklogs updated after a date and time.
   *
   * This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set to true on the last page of worklogs.
   *
   * This resource does not return worklogs updated during the minute preceding the request.
   *
   * **[Permissions](#permissions) required:** Permission to access Jira, however, worklogs are only returned where either of the following is true:
   *
   * *  the worklog is set as *Viewable by All Users*.
   * *  the user is a member of a project role or group with permission to view the worklog.
   * @param since The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned.
   * @param expand Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.
   * @returns ChangedWorklogs Returned if the request is successful.
   * @throws ApiError
   */
  public static getIdsOfWorklogsModifiedSince(
    since?: number,
    expand: string = '',
  ): CancelablePromise<ChangedWorklogs> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/worklog/updated',
      query: {
        'since': since,
        'expand': expand,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
}
