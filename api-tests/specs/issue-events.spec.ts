import { IssueEvent, IssuesService } from '../generated';
import { loadIssueEvents } from '../helpers/test-data-helper';

describe('IssuesService', () => {
  describe('#getEvents()', () => {
    it('should return events without error', async () => {
      const events: IssueEvent[] = await IssuesService.getEvents();
      expect(Array.isArray(events)).toBe(true);
      events.forEach((event: IssueEvent) => {
        expect('id' in event).toBe(true);
        expect('name' in event).toBe(true);
      });
    });

    it('should return events with valid id and name', async () => {
      const events: IssueEvent[] = await IssuesService.getEvents();
      events.forEach((event: IssueEvent) => {
        expect(typeof event.id).toBe('number');
        expect(typeof event.name).toBe('string');
      });
    });

    it('should return at least one event', async () => {
      const events: IssueEvent[] = await IssuesService.getEvents();
      expect(events.length).toBeGreaterThan(0);
    });

    it('should return correct events', async () => {
      const expectedEventsList = loadIssueEvents();
      const events: IssueEvent[] = await IssuesService.getEvents();
      expect(events).toStrictEqual(expectedEventsList);
    });

    // TODO:
    // Test that the getEvents method throws an error when the authentication credentials are incorrect or missing.
    // Test that the getEvents method throws an error when the user does not have the Administer Jira global permission.
    // Test that the getEvents method returns an empty array when there are no issue events.
    // Test that the getEvents method returns an array of IssueEvent objects when there are one or more issue events.
    // Test that the getEvents method returns IssueEvent objects with the correct properties when there are one or more issue events.
  });
});