const Reader = require("./lib/utils/reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");

const ExplorersWithNode = ExplorerService.filterByMission(explorers, "node");
const AmountExporersWithNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const UsernamesWithNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log("ExplorersWithNode", ExplorersWithNode);
console.log("AmountExporersWithNode", AmountExporersWithNode);
console.log("UsernamesWithNode", UsernamesWithNode);

const explorer1 = {name: "Explorer1", score: 1};
FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3};
FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5};
FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15};
FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}