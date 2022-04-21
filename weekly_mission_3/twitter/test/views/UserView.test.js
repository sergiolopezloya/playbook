const UserView = require('./../../app/views/UserView')

describe('Tests for UserView', () => {
    test('Return an error object when try to create a new user with a new user wit a null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)

        expect(result.error).toMatch(/payload no existe/)
    })

    test("Return an error object when try to create a new user with a payloa, d with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: "Username"}
        const result = UserView.createUser (payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })
})