/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AttachmentArchiveItemReadable } from './AttachmentArchiveItemReadable';
/**
 * Metadata for an archive (for example a zip) and its contents.
 */
export type AttachmentArchiveMetadataReadable = {
  /**
   * The list of the items included in the archive.
   */
  readonly entries?: Array<AttachmentArchiveItemReadable>;
  /**
   * The ID of the attachment.
   */
  readonly id?: number;
  /**
   * The MIME type of the attachment.
   */
  readonly mediaType?: string;
  /**
   * The name of the archive file.
   */
  readonly name?: string;
  /**
   * The number of items included in the archive.
   */
  readonly totalEntryCount?: number;
};

