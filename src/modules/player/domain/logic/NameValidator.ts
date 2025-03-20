export type NameValidationResponse = {
    code: "NAME_TOO_SHORT" | "NAME_TOO_LONG" | "NAME_INVALID" | "NAME_VALID"
}

export class NameValidator {
    static validate(name: string): NameValidationResponse {
        if (name.length < 3) return { code: "NAME_TOO_SHORT" }
        if (name.length > 20) return { code: "NAME_TOO_LONG" }
        if (!/^[a-zA-Z0-9]+$/.test(name)) return { code: "NAME_INVALID" }

        return { code: "NAME_VALID" }
    }
}
