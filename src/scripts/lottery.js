import { validateUserNumber } from "./validate.js";
import { random1to10 } from "./random.js";

export function lottery(userInput) {

    const userNumber = validateUserNumber(userInput);

    const randomNumber = random1to10()  ;

    // If are the same, returns true, if not, false
    const isWin = userNumber === randomNumber;

    //If its true returns "Win" if not "Lose"
    const result = isWin ? "Win" : "Lose";

    return {
        message: result,
        data: {
            userNumber,
            randomNumber
        }
    };
}