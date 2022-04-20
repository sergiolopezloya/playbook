const Spiderman = require('../app/spiderman')

describe("Unit Tests for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
        // Aquí escribimos el código que queremos usar tal cuál 
        // Quiero poder instanciar un objeto Spiderman con esta información
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 3, "Marvel")

        // Validamos que este código funcione de la forma esperada,
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio")
    });
})
