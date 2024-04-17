/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AuditRecordBean } from './AuditRecordBean';
/**
 * Container for a list of audit records.
 */
export type AuditRecords = {
  /**
   * The requested or default limit on the number of audit items to be returned.
   */
  readonly limit?: number;
  /**
   * The number of audit items skipped before the first item in this list.
   */
  readonly offset?: number;
  /**
   * The list of audit items.
   */
  readonly records?: Array<AuditRecordBean>;
  /**
   * The total number of audit items returned.
   */
  readonly total?: number;
};

