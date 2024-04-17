/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { PageBeanWorkflowTransitionRules } from '../models/PageBeanWorkflowTransitionRules';
import type { WorkflowsWithTransitionRulesDetails } from '../models/WorkflowsWithTransitionRulesDetails';
import type { WorkflowTransitionRulesUpdate } from '../models/WorkflowTransitionRulesUpdate';
import type { WorkflowTransitionRulesUpdateErrors } from '../models/WorkflowTransitionRulesUpdateErrors';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WorkflowTransitionRulesService {
  /**
   * Get workflow transition rule configurations
   * Returns a [paginated](#pagination) list of workflows with transition rules. The workflows can be filtered to return only those containing workflow transition rules:
   *
   * *  of one or more transition rule types, such as [workflow post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/).
   * *  matching one or more transition rule keys.
   *
   * Only workflows containing transition rules created by the calling [Connect](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) or [Forge](https://developer.atlassian.com/cloud/jira/platform/index/#forge-apps) app are returned.
   *
   * Due to server-side optimizations, workflows with an empty list of rules may be returned; these workflows can be ignored.
   *
   * **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) or [Forge](https://developer.atlassian.com/cloud/jira/platform/index/#forge-apps) apps can use this operation.
   * @param types The types of the transition rules to return.
   * @param startAt The index of the first item to return in a page of results (page offset).
   * @param maxResults The maximum number of items to return per page.
   * @param keys The transition rule class keys, as defined in the Connect or the Forge app descriptor, of the transition rules to return.
   * @param workflowNames The list of workflow names to filter by.
   * @param withTags The list of `tags` to filter by.
   * @param draft Whether draft or published workflows are returned. If not provided, both workflow types are returned.
   * @param expand Use [expand](#expansion) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to.
   * @returns PageBeanWorkflowTransitionRules Returned if the request is successful.
   * @throws ApiError
   */
  public static getWorkflowTransitionRuleConfigurations(
    types: Array<'postfunction' | 'condition' | 'validator'>,
    startAt?: number,
    maxResults: number = 10,
    keys?: Array<string>,
    workflowNames?: Array<string>,
    withTags?: Array<string>,
    draft?: boolean,
    expand?: string,
  ): CancelablePromise<PageBeanWorkflowTransitionRules> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/workflow/rule/config',
      query: {
        'startAt': startAt,
        'maxResults': maxResults,
        'types': types,
        'keys': keys,
        'workflowNames': workflowNames,
        'withTags': withTags,
        'draft': draft,
        'expand': expand,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if the caller is not a Connect or Forge app.`,
        404: `Returned if any transition rule type is not supported.`,
        503: `Returned if we encounter a problem while trying to access the required data.`,
      },
    });
  }
  /**
   * Update workflow transition rule configurations
   * Updates configuration of workflow transition rules. The following rule types are supported:
   *
   * *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)
   * *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)
   * *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)
   *
   * Only rules created by the calling [Connect](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) or [Forge](https://developer.atlassian.com/cloud/jira/platform/index/#forge-apps) app can be updated.
   *
   * To assist with app migration, this operation can be used to:
   *
   * *  Disable a rule.
   * *  Add a `tag`. Use this to filter rules in the [Get workflow transition rule configurations](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-workflow-transition-rules/#api-rest-api-3-workflow-rule-config-get).
   *
   * Rules are enabled if the `disabled` parameter is not provided.
   *
   * **[Permissions](#permissions) required:** Only [Connect](https://developer.atlassian.com/cloud/jira/platform/index/#connect-apps) or [Forge](https://developer.atlassian.com/cloud/jira/platform/index/#forge-apps) apps can use this operation.
   * @param requestBody
   * @returns WorkflowTransitionRulesUpdateErrors Returned if the request is successful.
   * @throws ApiError
   */
  public static updateWorkflowTransitionRuleConfigurations(
    requestBody: WorkflowTransitionRulesUpdate,
  ): CancelablePromise<WorkflowTransitionRulesUpdateErrors> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflow/rule/config',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if the caller is not a Connect or Forge app.`,
        503: `Returned if we encounter a problem while trying to access the required data.`,
      },
    });
  }
  /**
   * Delete workflow transition rule configurations
   * Deletes workflow transition rules from one or more workflows. These rule types are supported:
   *
   * *  [post functions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-post-function/)
   * *  [conditions](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-condition/)
   * *  [validators](https://developer.atlassian.com/cloud/jira/platform/modules/workflow-validator/)
   *
   * Only rules created by the calling Connect app can be deleted.
   *
   * **[Permissions](#permissions) required:** Only Connect apps can use this operation.
   * @param requestBody
   * @returns WorkflowTransitionRulesUpdateErrors Returned if the request is successful.
   * @throws ApiError
   */
  public static deleteWorkflowTransitionRuleConfigurations(
    requestBody: WorkflowsWithTransitionRulesDetails,
  ): CancelablePromise<WorkflowTransitionRulesUpdateErrors> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/workflow/rule/config/delete',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if the request is invalid.`,
        403: `Returned if the caller is not a Connect app.`,
      },
    });
  }
}
