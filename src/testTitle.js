const load = require('@commitlint/load').default;
const lint = require('@commitlint/lint').default;

const CONFIG = {
    extends: ['@commitlint/config-conventional'],
};

function buildLintError(lintErrors) {
    return lintErrors.map((error) => error.message);
}

async function testTitle(title) {
    const lintOptions = await load(CONFIG);
    const lintResult = await lint(
        title,
        lintOptions.rules,
        lintOptions.parserPreset ? lintOptions.parserPreset : {}
    );
    if (!lintResult.valid) {
        throw new Error(buildLintError(lintResult.errors));
    }
}

module.exports = testTitle;