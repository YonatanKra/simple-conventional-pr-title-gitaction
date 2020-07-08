let title = 'no go';

jest.mock('@actions/github', () => ({
    context: {
        payload: {
            pull_request: {
                title
            }
        }
    }
}));

jest.mock('@actions/core');
import * as github from '@actions/github';
import * as core from "@actions/core";
import { run } from "./index";

describe('PR linter action', function () {
    beforeEach(() => {
       // @ts-ignore
        core.setFailed.mockClear();
    });
    it('should set CI as failed if bad title', async function () {
        title = 'bad title';
        try {
            await run();
        } catch(e) {

        }
        expect(core.setFailed).toHaveBeenCalled();
    });

    it('should not set CI as failed if bad title', async function () {
        title = 'fix: good title';
        try {
            await run();
        } catch(e) {

        }
        expect(core.setFailed).not.toHaveBeenCalled();
    });
});