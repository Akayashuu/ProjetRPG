import { Colors } from "../interfaces/Colors.js"
import { asciiSymbolMap, type MatriceColor, type Matrice, type Point } from "../interfaces/Form.js"

abstract class BaseForm {
    public matrices: Matrice = []
    public matricesColor: MatriceColor = []
    public constructor(
        public width: number,
        public height: number,
        public gridCoordinates: Point | null,
    ) {
        this.fill()
    }

    fill(): void {
        this.matrices = Array.from({ length: this.width }, () =>
            Array.from({ length: this.height }, () => 0),
        )
        this.matricesColor = Array.from({ length: this.width }, () =>
            Array.from({ length: this.height }, () => Colors.White),
        )
    }

    numberToAscii(number: keyof typeof asciiSymbolMap): string {
        return asciiSymbolMap[number]
    }
}

export default BaseForm
