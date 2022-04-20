const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {
    test('Create an User object', () => {
        // Aquí invocas el código que vas a usar en tu app 
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        // Aquí validas los resultados de ese código 
        // Esta es una comparación que va a igualar el valor de la izquierda on el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect (user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Add getters', () => {
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user.getUsername).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
})