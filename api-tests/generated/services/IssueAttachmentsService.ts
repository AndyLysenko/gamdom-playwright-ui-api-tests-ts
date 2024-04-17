/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Attachment } from '../models/Attachment';
import type { AttachmentArchiveImpl } from '../models/AttachmentArchiveImpl';
import type { AttachmentArchiveMetadataReadable } from '../models/AttachmentArchiveMetadataReadable';
import type { AttachmentMetadata } from '../models/AttachmentMetadata';
import type { AttachmentSettings } from '../models/AttachmentSettings';
import type { MultipartFile } from '../models/MultipartFile';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class IssueAttachmentsService {
  /**
   * Get attachment content
   * Returns the contents of an attachment. A `Range` header can be set to define a range of bytes within the attachment to download. See the [HTTP Range header standard](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) for details.
   *
   * To return a thumbnail of the attachment, use [Get attachment thumbnail](#api-rest-api-2-attachment-thumbnail-id-get).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** For the issue containing the attachment:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param id The ID of the attachment.
   * @param redirect Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment.
   * @returns any Returned if the request is successful when `redirect` is set to `false`.
   * @throws ApiError
   */
  public static getAttachmentContent(
    id: string,
    redirect: boolean = true,
  ): CancelablePromise<Array<any>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/attachment/content/{id}',
      path: {
        'id': id,
      },
      query: {
        'redirect': redirect,
      },
      errors: {
        303: `Returned if the request is successful. See the \`Location\` header for the download URL.`,
        400: `Returned if the range supplied in the \`Range\` header is malformed.`,
        401: `Returned if the authentication credentials are incorrect.`,
        403: `The user does not have the necessary permission.`,
        404: `Returned if:
         *  the attachment is not found.
         *  attachments are disabled in the Jira settings.`,
        416: `Returned if the server is unable to satisfy the range of bytes provided.`,
      },
    });
  }
  /**
   * Get Jira attachment settings
   * Returns the attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.
   *
   * Note that there are also [project permissions](https://confluence.atlassian.com/x/yodKLg) that restrict whether users can create and delete attachments.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** None.
   * @returns AttachmentSettings Returned if the request is successful.
   * @throws ApiError
   */
  public static getAttachmentMeta(): CancelablePromise<AttachmentSettings> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/attachment/meta',
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
      },
    });
  }
  /**
   * Get attachment thumbnail
   * Returns the thumbnail of an attachment.
   *
   * To return the attachment contents, use [Get attachment content](#api-rest-api-2-attachment-content-id-get).
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** For the issue containing the attachment:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param id The ID of the attachment.
   * @param redirect Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment.
   * @param fallbackToDefault Whether a default thumbnail is returned when the requested thumbnail is not found.
   * @param width The maximum width to scale the thumbnail to.
   * @param height The maximum height to scale the thumbnail to.
   * @returns any Returned if the request is successful when `redirect` is set to `false`.
   * @throws ApiError
   */
  public static getAttachmentThumbnail(
    id: string,
    redirect: boolean = true,
    fallbackToDefault: boolean = true,
    width?: number,
    height?: number,
  ): CancelablePromise<Array<any>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/attachment/thumbnail/{id}',
      path: {
        'id': id,
      },
      query: {
        'redirect': redirect,
        'fallbackToDefault': fallbackToDefault,
        'width': width,
        'height': height,
      },
      errors: {
        303: `Returned if the request is successful. See the \`Location\` header for the download URL.`,
        400: `Returned if the request is invalid.`,
        401: `Returned if the authentication credentials are incorrect.`,
        403: `The user does not have the necessary permission.`,
        404: `Returned if:
         *  the attachment is not found.
         *  attachments are disabled in the Jira settings.
         *  \`fallbackToDefault\` is \`false\` and the request thumbnail cannot be downloaded.`,
      },
    });
  }
  /**
   * Delete attachment
   * Deletes an attachment from an issue.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** For the project holding the issue containing the attachment:
   *
   * *  *Delete own attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment created by the calling user.
   * *  *Delete all attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment created by any user.
   * @param id The ID of the attachment.
   * @returns void
   * @throws ApiError
   */
  public static removeAttachment(
    id: string,
  ): CancelablePromise<void> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/rest/api/2/attachment/{id}',
      path: {
        'id': id,
      },
      errors: {
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if:
         *  the attachment is not found.
         *  attachments are disabled in the Jira settings.`,
      },
    });
  }
  /**
   * Get attachment metadata
   * Returns the metadata for an attachment. Note that the attachment itself is not returned.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:**
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param id The ID of the attachment.
   * @returns AttachmentMetadata Returned if the request is successful.
   * @throws ApiError
   */
  public static getAttachment(
    id: string,
  ): CancelablePromise<AttachmentMetadata> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/attachment/{id}',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `Returned if the user does not have the necessary permission.`,
        404: `Returned if:
         *  the attachment is not found.
         *  attachments are disabled in the Jira settings.`,
      },
    });
  }
  /**
   * Get all metadata for an expanded attachment
   * Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.
   *
   * Use this operation to retrieve data that is presented to the user, as this operation returns the metadata for the attachment itself, such as the attachment's ID and name. Otherwise, use [ Get contents metadata for an expanded attachment](#api-rest-api-2-attachment-id-expand-raw-get), which only returns the metadata for the attachment's contents.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** For the issue containing the attachment:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param id The ID of the attachment.
   * @returns AttachmentArchiveMetadataReadable Returned if the request is successful. If an empty list is returned in the response, the attachment is empty, corrupt, or not an archive.
   * @throws ApiError
   */
  public static expandAttachmentForHumans(
    id: string,
  ): CancelablePromise<AttachmentArchiveMetadataReadable> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/attachment/{id}/expand/human',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `The user does not have the necessary permission.`,
        404: `Returned if:
         *  the attachment is not found.
         *  attachments are disabled in the Jira settings.`,
        409: `Returned if the attachment is an archive, but not a supported archive format.`,
      },
    });
  }
  /**
   * Get contents metadata for an expanded attachment
   * Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported.
   *
   * Use this operation if you are processing the data without presenting it to the user, as this operation only returns the metadata for the contents of the attachment. Otherwise, to retrieve data to present to the user, use [ Get all metadata for an expanded attachment](#api-rest-api-2-attachment-id-expand-human-get) which also returns the metadata for the attachment itself, such as the attachment's ID and name.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](#permissions) required:** For the issue containing the attachment:
   *
   * *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
   * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
   * @param id The ID of the attachment.
   * @returns AttachmentArchiveImpl Returned if the request is successful. If an empty list is returned in the response, the attachment is empty, corrupt, or not an archive.
   * @throws ApiError
   */
  public static expandAttachmentForMachines(
    id: string,
  ): CancelablePromise<AttachmentArchiveImpl> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/rest/api/2/attachment/{id}/expand/raw',
      path: {
        'id': id,
      },
      errors: {
        401: `Returned if the authentication credentials are incorrect or missing.`,
        403: `The user does not have the necessary permission.`,
        404: `Returned if:
         *  the attachment is not found.
         *  attachments are disabled in the Jira settings.`,
        409: `Returned if the attachment is an archive, but not a supported archive format.`,
      },
    });
  }
  /**
   * Add attachment
   * Adds one or more attachments to an issue. Attachments are posted as multipart/form-data ([RFC 1867](https://www.ietf.org/rfc/rfc1867.txt)).
   *
   * Note that:
   *
   * *  The request must have a `X-Atlassian-Token: no-check` header, if not it is blocked. See [Special headers](#special-request-headers) for more information.
   * *  The name of the multipart/form-data parameter that contains the attachments must be `file`.
   *
   * The following examples upload a file called *myfile.txt* to the issue *TEST-123*:
   *
   * #### curl ####
   *
   * curl --location --request POST 'https://your-domain.atlassian.net/rest/api/2/issue/TEST-123/attachments'
   * -u 'email@example.com:<api_token>'
   * -H 'X-Atlassian-Token: no-check'
   * --form 'file=@"myfile.txt"'
   *
   * #### Node.js ####
   *
   * // This code sample uses the 'node-fetch' and 'form-data' libraries:
   * // https://www.npmjs.com/package/node-fetch
   * // https://www.npmjs.com/package/form-data
   * const fetch = require('node-fetch');
   * const FormData = require('form-data');
   * const fs = require('fs');
   *
   * const filePath = 'myfile.txt';
   * const form = new FormData();
   * const stats = fs.statSync(filePath);
   * const fileSizeInBytes = stats.size;
   * const fileStream = fs.createReadStream(filePath);
   *
   * form.append('file', fileStream, {knownLength: fileSizeInBytes});
   *
   * fetch('https://your-domain.atlassian.net/rest/api/2/issue/TEST-123/attachments', {
     * method: 'POST',
     * body: form,
     * headers: {
       * 'Authorization': `Basic ${Buffer.from(
         * 'email@example.com:'
         * ).toString('base64')}`,
         * 'Accept': 'application/json',
         * 'X-Atlassian-Token': 'no-check'
         * }
         * })
         * .then(response => {
           * console.log(
             * `Response: ${response.status} ${response.statusText}`
             * );
             * return response.text();
             * })
             * .then(text => console.log(text))
             * .catch(err => console.error(err));
             *
             * #### Java ####
             *
             * // This code sample uses the  'Unirest' library:
             * // http://unirest.io/java.html
             * HttpResponse response = Unirest.post("https://your-domain.atlassian.net/rest/api/2/issue/{issueIdOrKey}/attachments")
             * .basicAuth("email@example.com", "")
             * .header("Accept", "application/json")
             * .header("X-Atlassian-Token", "no-check")
             * .field("file", new File("myfile.txt"))
             * .asJson();
             *
             * System.out.println(response.getBody());
             *
             * #### Python ####
             *
             * # This code sample uses the 'requests' library:
             * # http://docs.python-requests.org
             * import requests
             * from requests.auth import HTTPBasicAuth
             * import json
             *
             * url = "https://your-domain.atlassian.net/rest/api/2/issue/{issueIdOrKey}/attachments"
             *
             * auth = HTTPBasicAuth("email@example.com", "")
             *
             * headers = {
               * "Accept": "application/json",
               * "X-Atlassian-Token": "no-check"
               * }
               *
               * response = requests.request(
                 * "POST",
                 * url,
                 * headers = headers,
                 * auth = auth,
                 * files = {
                   * "file": ("myfile.txt", open("myfile.txt","rb"), "application-type")
                   * }
                   * )
                   *
                   * print(json.dumps(json.loads(response.text), sort_keys=True, indent=4, separators=(",", ": ")))
                   *
                   * #### PHP ####
                   *
                   * // This code sample uses the 'Unirest' library:
                   * // http://unirest.io/php.html
                   * Unirest\Request::auth('email@example.com', '');
                   *
                   * $headers = array(
                     * 'Accept' => 'application/json',
                     * 'X-Atlassian-Token' => 'no-check'
                     * );
                     *
                     * $parameters = array(
                       * 'file' => File::add('myfile.txt')
                       * );
                       *
                       * $response = Unirest\Request::post(
                         * 'https://your-domain.atlassian.net/rest/api/2/issue/{issueIdOrKey}/attachments',
                         * $headers,
                         * $parameters
                         * );
                         *
                         * var_dump($response)
                         *
                         * #### Forge ####
                         *
                         * // This sample uses Atlassian Forge and the `form-data` library.
                         * // https://developer.atlassian.com/platform/forge/
                         * // https://www.npmjs.com/package/form-data
                         * import api from "@forge/api";
                         * import FormData from "form-data";
                         *
                         * const form = new FormData();
                         * form.append('file', fileStream, {knownLength: fileSizeInBytes});
                         *
                         * const response = await api.asApp().requestJira('/rest/api/2/issue/{issueIdOrKey}/attachments', {
                           * method: 'POST',
                           * body: form,
                           * headers: {
                             * 'Accept': 'application/json',
                             * 'X-Atlassian-Token': 'no-check'
                             * }
                             * });
                             *
                             * console.log(`Response: ${response.status} ${response.statusText}`);
                             * console.log(await response.json());
                             *
                             * Tip: Use a client library. Many client libraries have classes for handling multipart POST operations. For example, in Java, the Apache HTTP Components library provides a [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html) class for multipart POST operations.
                             *
                             * This operation can be accessed anonymously.
                             *
                             * **[Permissions](#permissions) required:**
                             *
                             * *  *Browse Projects* and *Create attachments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.
                             * *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.
                             * @param issueIdOrKey The ID or key of the issue that attachments are added to.
                             * @param formData
                             * @returns Attachment Returned if the request is successful.
                             * @throws ApiError
                             */
                            public static addAttachment(
                              issueIdOrKey: string,
                              formData: Array<MultipartFile>,
                            ): CancelablePromise<Array<Attachment>> {
                              return __request(OpenAPI, {
                                method: 'POST',
                                url: '/rest/api/2/issue/{issueIdOrKey}/attachments',
                                path: {
                                  'issueIdOrKey': issueIdOrKey,
                                },
                                formData: formData,
                                mediaType: 'multipart/form-data',
                                errors: {
                                  403: `Returned if the user does not have the necessary permission.`,
                                  404: `Returned if any of the following is true:
                                   *  the issue is not found.
                                   *  the user does not have permission to view the issue.`,
                                  413: `The attachments exceed the maximum attachment size for issues, or more than 60 files are requested to be uploaded. See [Configuring file attachments](https://confluence.atlassian.com/x/wIXKM) for details.`,
                                },
                              });
                            }
                          }
