import load from '@commitlint/load';
import lint from '@commitlint/lint';

const CONFIG = {
    extends: ['@commitlint/config-conventional'],
};

function buildLintError(lintErrors: []) {
    return lintErrors.map((error: any) => error.message);
}

export async function testTitle(title: string) {
    const lintOptions = await load(CONFIG);
    const lintResult = await lint(
        title,
        lintOptions.rules,
        lintOptions.parserPreset ? lintOptions.parserPreset : {}
    );
    if (!lintResult.valid) {
        // @ts-ignore
        throw new Error(buildLintError(lintResult.errors));
    }
}