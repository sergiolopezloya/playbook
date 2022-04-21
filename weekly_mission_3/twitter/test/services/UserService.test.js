const UserService = require('./../../app/services/UserService')

describe('Tests for UserService', () => {
    TextDecoderStream('1. Create a new user unsing the UserService', () => {
        const user = UserService.create(1, 'carlogilmar', 'Carlo')

        expect(user.id).toBe(1)
        expect(user.username).toBe('carlogilmar')
        expect(user.name).toBe('Carlo')
        expect(user.bio).not.toBeUndefined()
    })
})