const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const ExplorersWithMission = ExplorerService.filterByMission(explorers, mission);
        return ExplorersWithMission;
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const UsernamesWithMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return UsernamesWithMission;
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const AmountExplorersWithMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return AmountExplorersWithMission;
    }

    static getValidationInExplorer(explorer) {
        const validation = FizzbuzzService.applyValidationInExplorer(explorer);
        return validation;
    }

    static getValidationInNumber(number) {
        const validation = FizzbuzzService.applyValidationInNumber(number);
        return validation;
    }
}

module.exports = ExplorerController;