import type { Colors } from "../interfaces/Colors.js"
import type Form from "../interfaces/Form.js"
import type { Point } from "../interfaces/Form.js"
import BaseForm from "./BaseForm.js"

class Line extends BaseForm implements Form {
    constructor(length: number, gridCoordinates: Point | null) {
        super(length, length, gridCoordinates)
    }

    area(): number {
        return this.width
    }

    perimeter(): number {
        return 2 * this.width
    }

    move(x: number, y: number): void {
        this.gridCoordinates = { x, y }
    }

    draw(): string[][] {
        const drawMatrices: string[][] = []
        const row: string[] = []
        for (let i = 0; i < this.width; i++) {
            const tile = this.matrices[0][i]
            row.push(`${this.matricesColor[0][i]}${this.numberToAscii(tile)}`)
        }
        drawMatrices.push(row)
        return drawMatrices
    }

    scale(factor: number): void {
        this.width *= factor
    }

    clone(): Line {
        return new Line(this.width, this.gridCoordinates)
    }

    deepEquals(other: Line): boolean {
        return this.width === other.width
    }

    toString(): string {
        return `Line(${this.width})`
    }

    public setBorder(color: Colors): void {
        for (let i = 0; i < this.width; i++) {
            this.matrices[0][i] = 2
            this.matricesColor[0][i] = color
        }
    }
}

export default Line
