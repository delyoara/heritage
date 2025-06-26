
export class Starship {
    size: number
    name: string

    public constructor(name: string, size: number) {
        this.size = size
        this.name = name
    }

    public describe(): string {
        return `Vaisseau "${this.name}" de taille ${this.size}`
    }
}


export class Cruiser extends Starship {
    maxCapacity: number
    occupiedCapacity: number = 0

    public constructor(name: string, size: number, maxCapacity: number) {
        super(name, size)
        this.maxCapacity = maxCapacity
    }

    public load(quantity: number): void {
        if (this.occupiedCapacity + quantity <= this.maxCapacity) {
            this.occupiedCapacity += quantity
            console.log(`[${this.name}] Free space: ${this.maxCapacity - this.occupiedCapacity}`)
        } else {
            console.log(`[${this.name}] No room left for loading`)
        }
    }

    public unload(quantity: number): void {
        this.occupiedCapacity = Math.max(0, this.occupiedCapacity - quantity)
        console.log(`[${this.name}] Free space: ${this.maxCapacity - this.occupiedCapacity}`)
    }

    public getCurrentFreeSpace(): number {
        return this.maxCapacity - this.occupiedCapacity
    }

    public override describe(): string {
        return super.describe() + ` (type Croiseur, capacité ${this.maxCapacity})`
    }
}


export class Interceptor extends Starship {
    guns: number
    private maxShotPerGun: number = 1
    private currentShotCount: number = 0

    public constructor(name: string, size: number, guns: number) {
        super(name, size)
        this.guns = guns
    }

    public shoot(): void {
        if (this.currentShotCount < this.maxShotPerGun * this.guns) {
            this.currentShotCount += 1
            console.log(`[${this.name}] Shot fired`)
        } else {
            console.log(`[${this.name}] Reload before shooting again`)
        }
    }

    public reload(): void {
        this.currentShotCount = 0
        console.log(`[${this.name}] Guns reloaded`)
    }

    public getCurrentShotCount(): number {
        return this.currentShotCount
    }

    public override describe(): string {
        return super.describe() + ` (type Intercepteur avec ${this.guns} canons)`
    }
}


function showShipInfo(ship: Starship): void {
    console.log(ship.describe())
}

// Instanciation
const acclamator1 = new Cruiser("Acclamator I", 750, 700)
const acclamator2 = new Cruiser("Acclamator II", 760, 700)
const xWing = new Interceptor("X-Wing", 12.5, 2)


showShipInfo(acclamator1)
showShipInfo(acclamator2)
showShipInfo(xWing)


acclamator1.load(600)  
acclamator1.load(200)  


xWing.shoot()
xWing.shoot() 
xWing.shoot() 
xWing.reload()
xWing.shoot() 
