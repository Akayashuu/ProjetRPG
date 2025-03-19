import type Form from "./interfaces/Form.js"

class Grid {
    public Grid: string[][] = []
    public forms: Form[] = []
    public constructor(
        public readonly width: number, // This is the termainal width (columns)
        public readonly height: number, // This is the termainal height (rows)
    ) {
        this.fill()
    }

    addForm(form: Form): void {
        if (form.gridCoordinates === null) {
            form.gridCoordinates = { x: 0, y: 0 }
        }

        this.forms.push(form)
    }

    draw() {
        for (const form of this.forms) {
            const matrice = form.draw()
            if (form.gridCoordinates === null) {
                throw new Error("Form is not placed on the grid")
            }
            const { x, y } = form.gridCoordinates
            for (let i = 0; i < matrice.length; i++) {
                for (let j = 0; j < matrice[i].length; j++) {
                    if (x + i < this.width && y + j < this.height) {
                        this.Grid[x + i][y + j] = matrice[i][j]
                    }
                }
            }
        }

        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                process.stdout.write(this.Grid[i][j])
            }
            process.stdout.write("\n")
        }
    }

    clear() {
        this.forms = []
    }

    fill() {
        this.Grid = Array.from({ length: this.width }, () =>
            Array.from({ length: this.height }, () => " "),
        )
    }
}

export default Grid
