import lint from '@commitlint/lint';
const conventionalConfig = require('@commitlint/config-conventional');

function buildLintError(lintErrors: any[]) {
    return lintErrors.map((error: any) => error.message);
}

export async function testTitle(title: string) {
    const lintResult = await lint(
        title,
        conventionalConfig.rules,
        {}
    );
    if (!lintResult.valid) {
        throw buildLintError(lintResult.errors);
    }
}