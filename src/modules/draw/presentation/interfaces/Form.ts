import type Rectangle from "../form/Rectangle.js"
import type { Colors } from "./Colors.js"

export type Point = { x: number; y: number }

export const asciiSymbolMap = {
    0: " ",
    1: "║",
    2: "═",
    3: "╝",
    4: "╗",
    5: "╚",
    6: "╔",
    7: "╣",
}
export type AsciiSymbol = keyof typeof asciiSymbolMap
export type Color = Colors[number]
export type Matrice = AsciiSymbol[][]
export type MatriceColor = Color[][]

interface Form {
    gridCoordinates: Point | null
    matrices: Matrice
    matricesColor: MatriceColor
    area(): number
    perimeter(): number
    move(x: number, y: number): void
    draw(): void
    scale(factor: number): void
    clone(): FormType
    deepEquals(other: FormType): boolean
    toString(): string
    fill(): void
    numberToAscii(number: number): string
    setBorder(color: Colors): void
}

export type FormType = Rectangle

export default Form
