
class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        explorer.trick = FizzbuzzService.applyValidationInNumber(explorer.score);
        return explorer;
    }

    static applyValidationInNumber(number) {
        if (number % 3 == 0 && number % 5 == 0) {
            return "FIZZBUZZ";
        } else if (number % 3 == 0) {
            return "FIZZ";
        } else if (number % 5 == 0) {
            return "BUZZ";
        } else {
            return number;
        }
    }
}

module.exports = FizzbuzzService;