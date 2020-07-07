const testTitle = require('./testTitle');
const github = require('@actions/github');
const core = require('@actions/core');

function getTitle() {
    return github.context.payload.pull_request.title;
}

async function run() {
    await testTitle(getTitle());
}

run().catch(e => core.setFailed(e));