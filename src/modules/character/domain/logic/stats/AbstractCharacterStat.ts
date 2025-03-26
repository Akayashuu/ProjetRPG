export abstract class CharacterStat<T> {
    protected readonly value: T

    constructor(value: T) {
        this.value = value
    }

    equals(vo?: CharacterStat<T>): boolean {
        if (vo === null || vo === undefined) {
            return false
        }
        if (vo.constructor.name !== this.constructor.name) {
            return false
        }
        return this.value === vo.value
    }

    getValue(): T {
        return this.value
    }
}
