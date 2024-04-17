/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Announcement banner configuration.
 */
export type AnnouncementBannerConfiguration = {
  /**
   * Hash of the banner data. The client detects updates by comparing hash IDs.
   */
  readonly hashId?: string;
  /**
   * Flag indicating if the announcement banner can be dismissed by the user.
   */
  readonly isDismissible?: boolean;
  /**
   * Flag indicating if the announcement banner is enabled or not.
   */
  readonly isEnabled?: boolean;
  /**
   * The text on the announcement banner.
   */
  readonly message?: string;
  /**
   * Visibility of the announcement banner.
   */
  readonly visibility?: 'PUBLIC' | 'PRIVATE';
};

