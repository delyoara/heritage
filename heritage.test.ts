//Test unitaires:
import { describe, it, expect } from 'vitest'
import { Interceptor, Cruiser } from './heritage'

describe('Starship managment', () => {
    it('should not allow loading more than it\'s capacity', () => {
        const acclamator = new Cruiser("Acclamator", 752, 700)
        expect(acclamator.getCurrentFreeSpace()).toBe(700)
        acclamator.load(400)
        expect(acclamator.getCurrentFreeSpace()).toBe(700-400)
        acclamator.unload(300)
        expect(acclamator.getCurrentFreeSpace()).toBe(700-400+300)
        acclamator.load(500)
        expect(acclamator.getCurrentFreeSpace()).toBe(700-400+300-500)
    })

    it('should not allow to fire more than it\'s limits', () => {
        const xWing = new Interceptor("X-Wing", 12.5, 2)
        xWing.shoot()
        expect(xWing.getCurrentShotCount()).toBe(1)
        xWing.shoot()
        expect(xWing.getCurrentShotCount()).toBe(2)
        xWing.shoot()
        expect(xWing.getCurrentShotCount()).toBe(2)
        xWing.reload()
        expect(xWing.getCurrentShotCount()).toBe(0)
        xWing.shoot()
        expect(xWing.getCurrentShotCount()).toBe(1)
    })
})













