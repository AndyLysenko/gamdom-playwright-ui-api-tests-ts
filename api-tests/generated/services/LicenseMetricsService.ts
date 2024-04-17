/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { License } from '../models/License';
import type { LicenseMetric } from '../models/LicenseMetric';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LicenseMetricsService {
  /**
   * Get license
   * Returns licensing information about the Jira instance.
   *
   * **[Permissions](#permissions) required:** None.
   * @returns License Returned if the request is successful.
   * @throws ApiError
   */
  public static getLicense(): CancelablePromise<License> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/instance/license',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get approximate license count
   * Returns the approximate number of user accounts across all Jira licenses. Note that this information is cached with a 7-day lifecycle and could be stale at the time of call.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns LicenseMetric Returned if the request is successful.
   * @throws ApiError
   */
  public static getApproximateLicenseCount(): CancelablePromise<LicenseMetric> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/license/approximateLicenseCount',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to complete this request.`,
      },
    });
  }
  /**
   * Get approximate application license count
   * Returns the total approximate number of user accounts for a single Jira license. Note that this information is cached with a 7-day lifecycle and could be stale at the time of call.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param applicationKey The ID of the application, represents a specific version of Jira.
   * @returns LicenseMetric Returned if the request is successful.
   * @throws ApiError
   */
  public static getApproximateApplicationLicenseCount(
    applicationKey: 'jira-core' | 'jira-product-discovery' | 'jira-software' | 'jira-servicedesk',
  ): CancelablePromise<LicenseMetric> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/license/approximateLicenseCount/product/{applicationKey}',
      path: {
        'applicationKey': applicationKey,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have permission to complete this request.`,
      },
    });
  }
}
