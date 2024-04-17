/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details of the time tracking configuration.
 */
export type TimeTrackingConfiguration = {
  /**
   * The default unit of time applied to logged time.
   */
  defaultUnit: 'minute' | 'hour' | 'day' | 'week';
  /**
   * The format that will appear on an issue's *Time Spent* field.
   */
  timeFormat: 'pretty' | 'days' | 'hours';
  /**
   * The number of days in a working week.
   */
  workingDaysPerWeek: number;
  /**
   * The number of hours in a working day.
   */
  workingHoursPerDay: number;
};

