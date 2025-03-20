import { PROFANITIES } from "./constants/ProfanitiesConstants"

export type ProfanityFilterResponse =
    | { code: "PROFANITY_DETECTED"; profanity: string }
    | { code: "NO_PROFANITY_DETECTED" }

export class ProfanityFilter {
    static check(name: string): ProfanityFilterResponse {
        const profanity = PROFANITIES.find((p) => name.toLowerCase().includes(p))
        if (profanity) return { code: "PROFANITY_DETECTED", profanity }

        return { code: "NO_PROFANITY_DETECTED" }
    }
}
