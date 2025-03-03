import * as readline from "readline"

class GameClient {
    private rl: readline.Interface

    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        })
    }

    start(): void {
        console.log("Welcome to the RPG game!")
        this.promptUser()
    }

    private promptUser(): void {
        this.rl.question('Enter your command (or type "exit" to quit): ', (command) => {
            if (command.toLowerCase() === "exit") {
                this.rl.close()
                console.log("Thanks for playing!")
                return
            }

            // Process the command here
            console.log(`You entered: ${command}`)

            // Continue the loop by prompting again
            this.promptUser()
        })
    }
}

// Start the game client
const client = new GameClient()
client.start()
