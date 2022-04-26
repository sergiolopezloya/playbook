
class ExplorerServices {

    static filterByMission(explorers, mission) {
        const ExplorersByMission = explorers.filter((explorer) => explorer.mission == mission)
        return ExplorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission) {

    }

    static getExplorersUsernamesByMission(explorers, mission) {

    }
}

module.exports = ExplorerServices