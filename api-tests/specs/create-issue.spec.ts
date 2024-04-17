import { IssuesService, IssueUpdateDetails, CreatedIssue, IssueBean } from '../generated';
import { v4 as uuidv4 } from 'uuid';

describe('IssuesService', () => {
  describe('#createIssue()', () => {
    it('should create an issue without error', async () => {
      const guid = uuidv4()
      const summary = `ALY Test Issue ${guid}`
      const description = `Description ${guid}`
      const issueDetails: IssueUpdateDetails = {
        "fields":{
          "project":{
              "id": "10000"
            },
            "issuetype": {
              "id": "10001"},
            "summary": summary,
            "description": description
      }};

      const createdIssue: CreatedIssue = await IssuesService.createIssue(issueDetails, false);
      
      // Check the properties of the created issue
      expect(createdIssue).toHaveProperty('id');
      expect(createdIssue).toHaveProperty('key');
      expect(createdIssue).toHaveProperty('self');

      // check values
      const fetchedIssue: IssueBean = await IssuesService.getIssue(createdIssue.id as string)
      expect(fetchedIssue.fields?.['summary']).toBe(summary);
      expect(fetchedIssue.fields?.['description']).toBe(description);
    });

    it('should throw an error if the project id is missing', async () => {
      const guid = uuidv4()
      const summary = `ALY Test Issue ${guid}`
      const description = `Description ${guid}`
      const issueDetails: IssueUpdateDetails = {
        "fields":{
          "issuetype": {
            "id": "10001"},
          "summary": summary,
          "description": description
      }};

      await expect(IssuesService.createIssue(issueDetails, false)).rejects.toThrow();
    });

    it('should throw an error if the issue type id is missing', async () => {
      const guid = uuidv4()
      const summary = `ALY Test Issue ${guid}`
      const description = `Description ${guid}`
      const issueDetails: IssueUpdateDetails = {
        "fields":{
          "project":{
            "id": "10000"
          },
          "summary": summary,
          "description": description
      }};

      await expect(IssuesService.createIssue(issueDetails, false)).rejects.toThrow();
    });

    // TODO:
    // Test that the createIssue method throws an error when the requestBody parameter is missing.
    // Test that the createIssue method throws an error when the requestBody parameter contains invalid field values.
    // Test that the createIssue method throws an error when the requestBody parameter contains fields that cannot be set for the issue type.
    // Test that the createIssue method throws an error when the requestBody parameter is used to create a subtype in a project different than that of the parent issue.
    // Test that the createIssue method throws an error when the requestBody parameter is used to create a subtask when the option to create subtasks is disabled.
    // Test that the createIssue method throws an error when the requestBody parameter is invalid for any other reason.
    // Test that the createIssue method throws an error when the authentication credentials are incorrect or missing.
  });
});