import type { Colors } from "../interfaces/Colors.js"
import type Form from "../interfaces/Form.js"
import type { Point } from "../interfaces/Form.js"
import BaseForm from "./BaseForm.js"

class Carre extends BaseForm implements Form {
    constructor(size: number, gridCoordinates: Point | null) {
        super(size, size * 2, gridCoordinates)
    }

    area(): number {
        return this.width * this.height
    }

    perimeter(): number {
        return 4 * this.width
    }

    move(x: number, y: number): void {
        this.gridCoordinates = { x, y }
    }

    draw(): string[][] {
        const drawMatrices: string[][] = []
        for (let i = 0; i < this.width; i++) {
            const row: string[] = []
            for (let j = 0; j < this.height; j++) {
                const tile = this.matrices[i][j]
                row.push(`${this.matricesColor[i][j]}${this.numberToAscii(tile)}`)
            }
            drawMatrices.push(row)
        }
        return drawMatrices
    }

    scale(factor: number): void {
        this.width *= factor
        this.height *= factor
    }

    clone(): Carre {
        return new Carre(this.width, this.gridCoordinates)
    }

    deepEquals(other: Carre): boolean {
        return this.width === other.width && this.height === other.height
    }

    toString(): string {
        return `Carre(${this.width})`
    }

    public setBorder(color: Colors): void {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                if (i === 0 && j === 0) {
                    this.matrices[i][j] = 6
                } else if (i === this.width - 1 && j === 0) {
                    this.matrices[i][j] = 5
                } else if (i === 0 && j === this.height - 1) {
                    this.matrices[i][j] = 4
                } else if (i === this.width - 1 && j === this.height - 1) {
                    this.matrices[i][j] = 3
                } else if (i === 0 || i === this.width - 1) {
                    this.matrices[i][j] = 2
                } else if (j === 0 || j === this.height - 1) {
                    this.matrices[i][j] = 1
                } else {
                    this.matrices[i][j] = 0
                }
                this.matricesColor[i][j] = color
            }
        }
    }
}

export default Carre
