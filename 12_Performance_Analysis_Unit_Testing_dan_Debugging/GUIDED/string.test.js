import test from 'node:test';
import assert from 'node:assert';

test.describe("Truthy dan Falsy", () => {
    test.it("nilai kosong adalah falsy", () => {
        assert.ok(!"");
        assert.equal("", false);
    });

    test.it("nilai adalah truthy", () => {
        assert.ok("Hello, World!");
    });
});