class Repo {
    name = "LaunchX";
    author = "Sergio Lopez";
    language = "JavaScript";
    numberOfCommits = 100;
    stars = 199;
    forks = 299;
    issues_open = 10;
    issues_close = 10;
    getTotalIssues = () => {
        return this.issues_open + this.issues_close;
    }
    getGeneralInfo = () => {
        return `This repository ${this.name} was created by ${this.author}`;
    }
}

const repo = new Repo();
console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());