/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { User } from './User';
/**
 * Metadata for an issue attachment.
 */
export type AttachmentMetadata = {
  /**
   * Details of the user who attached the file.
   */
  readonly author?: User;
  /**
   * The URL of the attachment.
   */
  readonly content?: string;
  /**
   * The datetime the attachment was created.
   */
  readonly created?: string;
  /**
   * The name of the attachment file.
   */
  readonly filename?: string;
  /**
   * The ID of the attachment.
   */
  readonly id?: number;
  /**
   * The MIME type of the attachment.
   */
  readonly mimeType?: string;
  /**
   * Additional properties of the attachment.
   */
  readonly properties?: Record<string, any>;
  /**
   * The URL of the attachment metadata details.
   */
  readonly self?: string;
  /**
   * The size of the attachment.
   */
  readonly size?: number;
  /**
   * The URL of a thumbnail representing the attachment.
   */
  readonly thumbnail?: string;
};

