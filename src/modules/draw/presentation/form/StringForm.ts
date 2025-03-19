import type { Colors } from "../interfaces/Colors.js"
import type Form from "../interfaces/Form.js"
import type { Point } from "../interfaces/Form.js"
import BaseForm from "./BaseForm.js"

/**
 * @deprecated
 * DOESNT WORKS VERY WELL TO BE HONEST it is a bit buggy
 */
class StringForm extends BaseForm implements Form {
    private text: string

    constructor(text: string, gridCoordinates: Point | null) {
        super(
            StringForm.getWidthAndHeight(text).width,
            StringForm.getWidthAndHeight(text).height,
            gridCoordinates,
        )
        this.text = text
    }

    static getWidthAndHeight(text: string): { width: number; height: number } {
        const lines = text.split("\n")
        const width = Math.max(...lines.map((line) => line.length))
        const height = lines.length
        return { width, height }
    }

    area(): number {
        return this.width * this.height
    }

    perimeter(): number {
        return 2 * (this.width + this.height)
    }

    move(x: number, y: number): void {
        this.gridCoordinates = { x, y }
    }

    draw(): string[][] {
        const drawMatrices: string[][] = []
        let textIndex = 0
        for (let i = 0; i < this.width; i++) {
            const row: string[] = []
            for (let j = 0; j < this.height; j++) {
                const text = this.text[textIndex]
                row.push(text)
                textIndex = (textIndex + 1) % this.text.length
            }
            drawMatrices.push(row)
        }
        return drawMatrices
    }

    scale(factor: number): void {
        this.width *= factor
        this.height *= factor
    }

    clone(): StringForm {
        return new StringForm(this.text, this.gridCoordinates)
    }

    deepEquals(other: StringForm): boolean {
        return (
            this.text === other.text && this.width === other.width && this.height === other.height
        )
    }

    toString(): string {
        return `StringForm(${this.text}, ${this.width}, ${this.height})`
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

export default StringForm
