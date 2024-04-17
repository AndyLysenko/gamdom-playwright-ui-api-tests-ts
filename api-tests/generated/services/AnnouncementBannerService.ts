/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AnnouncementBannerConfiguration } from '../models/AnnouncementBannerConfiguration';
import type { AnnouncementBannerConfigurationUpdate } from '../models/AnnouncementBannerConfigurationUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnnouncementBannerService {
  /**
   * Get announcement banner configuration
   * Returns the current announcement banner configuration.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @returns AnnouncementBannerConfiguration Returned if the request is successful.
   * @throws ApiError
   */
  public static getBanner(): CancelablePromise<AnnouncementBannerConfiguration> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/announcementBanner',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
  /**
   * Update announcement banner configuration
   * Updates the announcement banner configuration.
   *
   * **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public static setBanner(
    requestBody: AnnouncementBannerConfigurationUpdate,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/rest/api/2/announcementBanner',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Returned if an invalid parameter is passed.`,
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
      },
    });
  }
}
