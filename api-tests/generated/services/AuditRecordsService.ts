/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AuditRecords } from '../models/AuditRecords';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuditRecordsService {
  /**
   * Get audit records
   * Returns a list of audit records. The list can be filtered to include items:
   *
   * *  where each item in `filter` has at least one match in any of these fields:
   *
   * *  `summary`
   * *  `category`
   * *  `eventSource`
   * *  `objectItem.name` If the object is a user, account ID is available to filter.
   * *  `objectItem.parentName`
   * *  `objectItem.typeName`
   * *  `changedValues.changedFrom`
   * *  `changedValues.changedTo`
   * *  `remoteAddress`
   *
   * For example, if `filter` contains *man ed*, an audit record containing `summary": "User added to group"` and `"category": "group management"` is returned.
   * *  created on or after a date and time.
   * *  created or or before a date and time.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param offset The number of records to skip before returning the first result.
   * @param limit The maximum number of results to return.
   * @param filter The strings to match with audit field content, space separated.
   * @param from The date and time on or after which returned audit records must have been created. If `to` is provided `from` must be before `to` or no audit records are returned.
   * @param to The date and time on or before which returned audit results must have been created. If `from` is provided `to` must be after `from` or no audit records are returned.
   * @returns AuditRecords Returned if the request is successful.
   * @throws ApiError
   */
  public static getAuditRecords(
    offset?: number,
    limit: number = 1000,
    filter?: string,
    from?: string,
    to?: string,
  ): CancelablePromise<AuditRecords> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/auditing/record',
      query: {
        'offset': offset,
        'limit': limit,
        'filter': filter,
        'from': from,
        'to': to,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if:
         *  the user does not have the required permissions.
         *  all Jira products are on free plans. Audit logs are available when at least one Jira product is on a paid plan.`,
      },
    });
  }
}
