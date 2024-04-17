/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ServiceRegistry } from '../models/ServiceRegistry';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ServiceRegistryService {
  /**
   * Retrieve the attributes of service registries
   * Retrieve the attributes of given service registries.
   *
   * **[Permissions](#permissions) required:** Only Connect apps can make this request and the servicesIds belong to the tenant you are requesting
   * @param serviceIds The ID of the services (the strings starting with "b:" need to be decoded in Base64).
   * @returns ServiceRegistry Returned if the request is successful.
   * @throws ApiError
   */
  public static serviceRegistryResourceServicesGet(
    serviceIds: Array<string>,
  ): CancelablePromise<Array<ServiceRegistry>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/atlassian-connect/1/service-registry',
      query: {
        'serviceIds': serviceIds,
      },
      errors: {
        400: `Returned if the request is invalid.`,
        401: `The request needs to be authenticated.`,
        403: `The request isn't authorized.`,
        500: `The endpoint failed internally.`,
        501: `The endpoint isn't ready for receiving requests.`,
        504: `The upstream service is busy.`,
      },
    });
  }
}
