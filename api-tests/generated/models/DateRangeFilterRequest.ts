/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * List issues archived within a specified date range.
 */
export type DateRangeFilterRequest = {
  /**
   * List issues archived after a specified date, passed in the YYYY-MM-DD format.
   */
  dateAfter: string;
  /**
   * List issues archived before a specified date provided in the YYYY-MM-DD format.
   */
  dateBefore: string;
};

