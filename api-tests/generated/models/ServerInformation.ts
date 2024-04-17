/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { HealthCheckResult } from './HealthCheckResult';
/**
 * Details about the Jira instance.
 */
export type ServerInformation = {
  /**
   * The base URL of the Jira instance.
   */
  baseUrl?: string;
  /**
   * The timestamp when the Jira version was built.
   */
  buildDate?: string;
  /**
   * The build number of the Jira version.
   */
  buildNumber?: number;
  /**
   * The type of server deployment. This is always returned as *Cloud*.
   */
  deploymentType?: string;
  /**
   * The display URL of the Jira instance.
   */
  displayUrl?: string;
  /**
   * The display URL of the Servicedesk Help Center.
   */
  displayUrlServicedeskHelpCenter?: string;
  /**
   * Jira instance health check results. Deprecated and no longer returned.
   */
  healthChecks?: Array<HealthCheckResult>;
  /**
   * The unique identifier of the Jira version.
   */
  scmInfo?: string;
  /**
   * The time in Jira when this request was responded to.
   */
  serverTime?: string;
  /**
   * The default timezone of the Jira server. In a format known as Olson Time Zones, IANA Time Zones or TZ Database Time Zones.
   */
  serverTimeZone?: {
    displayName?: string;
    dstsavings?: number;
    id?: string;
    rawOffset?: number;
  };
  /**
   * The name of the Jira instance.
   */
  serverTitle?: string;
  /**
   * The version of Jira.
   */
  version?: string;
  /**
   * The major, minor, and revision version numbers of the Jira version.
   */
  versionNumbers?: Array<number>;
};

