const Reader = require('./lib/utils/reader')
const ExplorerServices = require('./lib/services/ExplorerService')

const explorers = Reader.readJsonFile('explorers.json')

const ExplorersWithNode = ExplorerServices.filterByMission(explorers, 'node')
console.log(ExplorersWithNode)