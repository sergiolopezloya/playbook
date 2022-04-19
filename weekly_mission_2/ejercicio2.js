const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
            isFinished: true,
            exercisesFinished: true
            },
            frontend: {
            isFinished: true,
            exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
            isFinished: false,
            exercisesFinished: false
            },
            frontend: {
            isFinished: false,
            exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
            isFinished: true,
            exercisesFinished: true
            },
            frontend: {
            isFinished: false,
            exercisesFinished: false
            }
        }
    }
]

explorers.forEach(explorer => {
    console.log(`${explorer.name} es un explorer en Launch X con un stack de ${explorer.stack.join(', ')}`)
})
const stack = explorers.map(explorer => {return explorer.stack})
console.log('Todos los stacks', stack)
const explorersWithJS = explorers.filter(explorer => {return explorer.stack.includes('js')})
console.log('Explorers con conocimiento de JS', explorersWithJS)
const explorerFromCDMX = explorers.find(explorer => {return explorer.city === 'CDMX'})
console.log('Explorer de CDMX', explorerFromCDMX)
const countCompletedExercises = explorers.reduce((total, explorer) => {return total + explorer.exercises_completed}, 0)
console.log('Total de ejercicios completados', countCompletedExercises)
const countExplorersExercisesFrontend = explorers.reduce((total, explorer) => {return total + explorer.missions.frontend.exercisesFinished}, 0)
console.log('Total de ejercicios completados en frontend', countExplorersExercisesFrontend)
const countExplorersFrontendFinished = explorers.reduce((total, explorer) => {return total + explorer.missions.frontend.isFinished}, 0)
console.log('Total de frontend completados', countExplorersFrontendFinished)