const UserService = require('./../../app/services/UserService')

describe('Tests for UserService', () => {
    test('1. Create a new user unsing the UserService', () => {
        const user = UserService.create(1, 'carlogilmar', 'Carlo')

        expect(user.id).toBe(1)
        expect(user.username).toBe('carlogilmar')
        expect(user.name).toBe('Carlo')
        expect(user.bio).not.toBeUndefined()
    })

    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, 'carlogilmar', 'Carlo')
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe('carlogilmar')
        expect(userInfoInList[2]).toBe('Carlo')
        expect(userInfoInList[3]).toBe('Sin bio')
    })

    test('3. Update username', () => {
        const user = UserService.create(1, 'carlogilmar', 'Carlo')
        UserService.updateUsername(user, 'carlog')
        expect(user.username).toBe('carlog')
    })
})