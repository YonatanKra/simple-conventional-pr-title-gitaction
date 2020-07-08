import { testTitle } from "./testTitle";

describe('testTitle', function () {
    it('should throw an error for non conventional syntax', async () => {
        let error: Boolean = false;
        try {
            await testTitle("invalid commit message")
        } catch(e) {
            error = true;
        }
        expect(error).toEqual(true);
    });

    it('should not throw an error for conventional syntax', async () => {
        let error: Boolean = false;
        try {
            await testTitle("fix: invalid commit message")
        } catch(e) {
            error = true;
        }
        expect(error).toEqual(false);
    });
});