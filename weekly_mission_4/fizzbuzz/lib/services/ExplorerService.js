
class ExplorerServices {

    static filterByMission(explorers, mission) {
        const ExplorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return ExplorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const CountExplorersByMission = explorers.filter((explorer) => explorer.mission == mission).length;
        return CountExplorersByMission;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const ExplorersUsernamesByMission = explorers.filter((explorer) => explorer.mission == mission).map((explorer) => explorer.githubUsername);
        return ExplorersUsernamesByMission;
    }
}

module.exports = ExplorerServices;