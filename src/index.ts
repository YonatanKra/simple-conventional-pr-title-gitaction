import {testTitle} from './testTitle';
import * as github from '@actions/github';
import * as core from "@actions/core";

function getTitle() {
    return github.context.payload.pull_request.title;
}

export async function run() {
    await testTitle(getTitle());
}

run().catch(e => {
    console.log('RAN!!!')
    core.setFailed(e)
});