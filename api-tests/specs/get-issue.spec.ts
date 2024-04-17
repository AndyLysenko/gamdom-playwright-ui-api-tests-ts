import { IssuesService, IssueBean } from '../generated';
import { getIssue } from '../helpers/test-data-helper'; 

describe('IssuesService', () => {
  describe('#getIssue()', () => {
    it('should get an issue without error', async () => {
      const issueIdOrKey = '10002';

      const issue: IssueBean = await IssuesService.getIssue(issueIdOrKey);
      
      // Check the properties of the issue
      expect(issue).toHaveProperty('id');
      expect(issue).toHaveProperty('key');
      expect(issue).toHaveProperty('self');
    });

    it('should throw an error if the issue id or key is invalid', async () => {
      const issueIdOrKey = 'INVALID';

      await expect(IssuesService.getIssue(issueIdOrKey)).rejects.toThrow();
    });

    it('should get an issue with correct values', async () => {
        const issueId = '10007';
        const expectedIssue: IssueBean = getIssue(issueId);

        const issue: IssueBean = await IssuesService.getIssue(issueId);
        
        // Check the properties of the issue
        expect(issue).toStrictEqual(expectedIssue)
      });
      
    // TODO:
    // Test that the getIssue method throws an error when the issueIdOrKey parameter is missing.
    // Test that the getIssue method returns the correct fields when the fields parameter is used.
    // Test that the getIssue method returns fields by keys when the fieldsByKeys parameter is set to true.
    // Test that the getIssue method returns the correct expanded information when the expand parameter is used.
    // Test that the getIssue method returns the correct issue properties when the properties parameter is used.
    // Test that the getIssue method updates the user's "Recently viewed" project list when the updateHistory parameter is set to true.
    // Test that the getIssue method throws an error when the authentication credentials are incorrect or missing.
    // Test that the getIssue method throws an error when the issue is not found or the user does not have permission to view it.
  });
});