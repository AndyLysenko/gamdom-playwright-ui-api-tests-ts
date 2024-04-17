/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { IdSearchRequestBean } from '../models/IdSearchRequestBean';
import type { IdSearchResults } from '../models/IdSearchResults';
import type { IssueMatches } from '../models/IssueMatches';
import type { IssuePickerSuggestions } from '../models/IssuePickerSuggestions';
import type { IssuesAndJQLQueries } from '../models/IssuesAndJQLQueries';
import type { SearchRequestBean } from '../models/SearchRequestBean';
import type { SearchResults } from '../models/SearchResults';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueSearchService {
  /**
   * Get issue picker suggestions
   * Returns lists of issues matching a query string. Use this resource to provide auto-completion suggestions when the user is looking for an issue using a word or string.
   *
   * This operation returns two lists:
   *
   * *  `History Search` which includes issues from the user's history of created, edited, or viewed issues that contain the string in the `query` parameter.
   * *  `Current Search` which includes issues that match the JQL expression in `currentJQL` and contain the string in the `query` parameter.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None.
   * @param query A string to match against text fields in the issue such as title, description, or comments.
   * @param currentJql A JQL query defining a list of issues to search for the query term. Note that `username` and `userkey` cannot be used as search terms for this parameter, due to privacy reasons. Use `accountId` instead.
   * @param currentIssueKey The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query.
   * @param currentProjectId The ID of a project that suggested issues must belong to.
   * @param showSubTasks Indicate whether to include subtasks in the suggestions list.
   * @param showSubTaskParent When `currentIssueKey` is a subtask, whether to include the parent issue in the suggestions if it matches the query.
   * @returns IssuePickerSuggestions Returned if the request is successful.
   * @throws ApiError
   */
  public static getIssuePickerResource(
    query?: string,
    currentJql?: string,
    currentIssueKey?: string,
    currentProjectId?: string,
    showSubTasks?: boolean,
    showSubTaskParent?: boolean,
  ): CancelablePromise<IssuePickerSuggestions> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/issue/picker',
      query: {
        'query': query,
        'currentJQL': currentJql,
        'currentIssueKey': currentIssueKey,
        'currentProjectId': currentProjectId,
        'showSubTasks': showSubTasks,
        'showSubTaskParent': showSubTaskParent,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Check issues against JQL
   * Checks whether one or more issues would be returned by one or more JQL queries.
   *
   * **[Permissions](#permissions) required:** None, however, issues are only matched against JQL queries where the user has:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param requestBody
   * @returns IssueMatches Returned if the request is successful.
   * @throws ApiError
   */
  public static matchIssues(
    requestBody: IssuesAndJQLQueries,
  ): CancelablePromise<IssueMatches> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/jql/match',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if \`jqls\` exceeds the maximum number of JQL queries or \`issueIds\` exceeds the maximum number of issue IDs.`,
      },
    });
  }
  /**
   * Search for issues using JQL (GET)
   * Searches for issues using [JQL](https://confluence.atlassian.com/x/egORLQ).
   *
   * If the JQL query expression is too large to be encoded as a query parameter, use the [POST](#api-rest-api-2-search-post) version of this resource.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** Issues are included in the response where the user has:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param jql The [JQL](https://confluence.atlassian.com/x/egORLQ) that defines the search. Note:
   *
   * *  If no JQL expression is provided, all issues are returned.
   * *  `username` and `userkey` cannot be used as search terms due to privacy reasons. Use `accountId` instead.
   * *  If a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page. To manage page size, Jira may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only.
   * @param validateQuery Determines how to validate the JQL query and treat the validation results. Supported values are:
   *
   * *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).
   * *  `warn` Returns all errors as warnings.
   * *  `none` No validation is performed.
   * *  `true` *Deprecated* A legacy synonym for `strict`.
   * *  `false` *Deprecated* A legacy synonym for `warn`.
   *
   * Note: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value.
   * @param fields A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `*all` Returns all fields.
   * *  `*navigable` Returns navigable fields.
   * *  Any issue field, prefixed with a minus to exclude.
   *
   * Examples:
   *
   * *  `summary,comment` Returns only the summary and comments fields.
   * *  `-description` Returns all navigable (default) fields except description.
   * *  `*all,-comment` Returns all fields except comments.
   *
   * This parameter may be specified multiple times. For example, `fields=field1,field2&fields=field3`.
   *
   * Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-2-issue-issueIdOrKey-get) where the default is all fields.
   * @param expand Use [expand](#expansion) to include additional information about issues in the response. This parameter accepts a comma-separated list. Expand options include:
   *
   * *  `renderedFields` Returns field values rendered in HTML format.
   * *  `names` Returns the display name of each field.
   * *  `schema` Returns the schema describing a field type.
   * *  `transitions` Returns all possible transitions for the issue.
   * *  `operations` Returns all possible operations for the issue.
   * *  `editmeta` Returns information about how each field can be edited.
   * *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.
   * *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.
   * @param properties A list of issue property keys for issue properties to include in the results. This parameter accepts a comma-separated list. Multiple properties can also be provided using an ampersand separated list. For example, `properties=prop1,prop2&properties=prop3`. A maximum of 5 issue property keys can be specified.
   * @param fieldsByKeys Reference fields by their key (rather than ID).
   * @returns SearchResults Returned if the request is successful.
   * @throws ApiError
   */
  public static searchForIssuesUsingJql(
    jql?: string,
    startAt?: number,
    maxResults: number = 50,
    validateQuery: 'strict' | 'warn' | 'none' | 'true' | 'false' = 'strict',
    fields?: Array<string>,
    expand?: string,
    properties?: Array<string>,
    fieldsByKeys: boolean = false,
  ): CancelablePromise<SearchResults> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/search',
      query: {
        'jql': jql,
        'startAt': startAt,
        'maxResults': maxResults,
        'validateQuery': validateQuery,
        'fields': fields,
        'expand': expand,
        'properties': properties,
        'fieldsByKeys': fieldsByKeys,
      },
      errors: {
        400: `Returned if the JQL query is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Search for issues using JQL (POST)
   * Searches for issues using [JQL](https://confluence.atlassian.com/x/egORLQ).
   *
   * There is a [GET](#api-rest-api-2-search-get) version of this resource that can be used for smaller JQL query expressions.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** Issues are included in the response where the user has:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param requestBody A JSON object containing the search request.
   * @returns SearchResults Returned if the request is successful.
   * @throws ApiError
   */
  public static searchForIssuesUsingJqlPost(
    requestBody: SearchRequestBean,
  ): CancelablePromise<SearchResults> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/search',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the JQL query is invalid.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Search issue IDs using JQL
   * Searches for IDs of issues using [JQL](https://confluence.atlassian.com/x/egORLQ).
   *
   * Use the [Search](#api-rest-api-2-search-post) endpoint if you need to fetch more than just issue IDs. The Search endpoint returns more information, but may take much longer to respond to requests. This is because it uses a different mechanism for ordering results than this endpoint and doesn't provide the total number of results for your query.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** Issues are included in the response where the user has:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project containing the issue.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param requestBody A JSON object containing the search request.
   * @returns IdSearchResults Returned if the request is successful.
   * @throws ApiError
   */
  public static searchForIssuesIds(
    requestBody: IdSearchRequestBean,
  ): CancelablePromise<IdSearchResults> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/rest/api/2/search/id',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the JQL query is invalid.`,
        401: `Returned if the authentication credentials are incorrect.`,
      },
    });
  }
}
