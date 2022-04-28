const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("FizzbuzzService", () => {
    test("applyValidationInExplorer explorer 1", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer1); 
        expect(explorer1.score).toBe(1);
        expect(explorer1.trick).toBe(1);
    });

    test("applyValidationInExplorer explorer 3", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer3); 
        expect(explorer3.score).toBe(3);
        expect(explorer3.trick).toBe("FIZZ");
    });

    test("applyValidationInExplorer explorer 5", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer5); 
        expect(explorer5.score).toBe(5);
        expect(explorer5.trick).toBe("BUZZ");
    });

    test("applyValidationInExplorer explorer 15", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer15); 
        expect(explorer15.score).toBe(15);
        expect(explorer15.trick).toBe("FIZZBUZZ");
    });
});