import type { Colors } from "../interfaces/Colors.js"
import type Form from "../interfaces/Form.js"
import type { Matrice, MatriceColor } from "../interfaces/Form.js"
import BaseForm from "./BaseForm.js"

class Rectangle extends BaseForm implements Form {
    public matrices!: Matrice
    public matricesColor!: MatriceColor

    area(): number {
        return this.width * this.height
    }

    perimeter(): number {
        return 2 * (this.width + this.height)
    }

    move(x: number, y: number): void {
        this.gridCoordinates = { x, y }
    }

    draw(): void {
        let draw = ""
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                const tile = this.matrices[i][j]
                draw += `${this.matricesColor[i][j]}${this.numberToAscii(tile)}`
            }
            draw += "\n"
        }
        console.log(draw)
    }

    scale(factor: number): void {
        this.width *= factor
        this.height *= factor
    }

    clone(): Rectangle {
        return new Rectangle(this.width, this.height, this.gridCoordinates)
    }

    deepEquals(other: Rectangle): boolean {
        return this.width === other.width && this.height === other.height
    }

    toString(): string {
        return `Rectangle(${this.width}, ${this.height})`
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

export default Rectangle
