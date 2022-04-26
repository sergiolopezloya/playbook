const ExplorerService = require("./../../lib/services/ExplorerService");

describe("ExplorerService", () => {
    test("should return a list of explorers in node", () => {
        const explorers = [
            {
                mission: "node"
            }
        ];
        const ExplorersWithNode = ExplorerService.filterByMission(explorers, "node");
        expect(ExplorersWithNode.length).toBe(1);
    });

    test("should return amount of explorers in node", () => {
        const explorers = [
            {
                mission: "node"
            }
        ];
        const ExplorersWithNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(ExplorersWithNode).toBe(1);
    });

    test("should return a list of explorers usernames in node", () => {
        const explorers = [
            {
                mission: "node",
                githubUsername: "ajolonauta15"
            }
        ];
        const ExplorersUsernamesWithNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(ExplorersUsernamesWithNode[0]).toBe("ajolonauta15");
    });
});