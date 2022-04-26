const ExplorerService = require('./../../lib/services/ExplorerService')

describe('ExplorerService', () => {
    test('should return a list of explorers in node', () => {
        const explorers = [
            {
                mission: 'node'
            }
        ]
        const ExplorersWithNode = ExplorerService.filterByMission(explorers, 'node')
        expect(ExplorersWithNode.length).toBe(1)
    })
})