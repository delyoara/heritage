"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Test unitaires:
const vitest_1 = require("vitest");
const main_1 = require("./main");
(0, vitest_1.describe)('Starship managment', () => {
    (0, vitest_1.it)('should not allow loading more than it\'s capacity', () => {
        const acclamator = new main_1.Cruiser("Acclamator", 752, 700);
        (0, vitest_1.expect)(acclamator.getCurrentFreeSpace()).toBe(700);
        acclamator.load(400);
        (0, vitest_1.expect)(acclamator.getCurrentFreeSpace()).toBe(700 - 400);
        acclamator.unload(300);
        (0, vitest_1.expect)(acclamator.getCurrentFreeSpace()).toBe(700 - 400 + 300);
        acclamator.load(500);
        (0, vitest_1.expect)(acclamator.getCurrentFreeSpace()).toBe(700 - 400 + 300 - 500);
    });
    (0, vitest_1.it)('should not allow to fire more than it\'s limits', () => {
        const xWing = new main_1.Interceptor("X-Wing", 12.5, 2);
        xWing.shoot();
        (0, vitest_1.expect)(xWing.getCurrentShotCount()).toBe(1);
        xWing.shoot();
        (0, vitest_1.expect)(xWing.getCurrentShotCount()).toBe(2);
        xWing.shoot();
        (0, vitest_1.expect)(xWing.getCurrentShotCount()).toBe(2);
        xWing.reload();
        (0, vitest_1.expect)(xWing.getCurrentShotCount()).toBe(0);        xWing.shoot();
        (0, vitest_1.expect)(xWing.getCurrentShotCount()).toBe(1);
    });
});
