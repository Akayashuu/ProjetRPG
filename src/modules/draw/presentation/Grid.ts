import type Form from "./interfaces/Form.js"

class Grid {
    public forms: Form[] = []
    public constructor(
        public readonly width: number,
        public readonly height: number,
    ) {}
}

export default Grid
