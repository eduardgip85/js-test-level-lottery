import { lottery } from "./src/scripts/lottery.js"

const inputUser = document.querySelector("#userNumber");
const playBtn = document.querySelector("#playBtn");
const feedbackUser = document.querySelector("#feedback");
const historial = document.querySelector("#history");
const heroHistory = document.querySelector("#heroHistory");

const history = [];

function feedbackAlert(text) {
    feedbackUser.textContent = text;
}

function renderHistory() {
    historial.innerHTML = "";
    heroHistory.innerHTML = "Historial | Total de partidas: " + history.length + " | W/L: " + history.filter(entry => entry.message === "Win").length + "/" + history.filter(entry => entry.message === "Lose").length;

    //create a list item for each history entry
    for (const entry of history) {
        const li = document.createElement("li");
        li.textContent = `Ingresado: ${entry.userNumber} | Aleatorio: ${entry.randomNumber} | Resultado: ${entry.message}`;
        if (entry.message === "Win") {
            li.style.color = "green";
        } else {
            li.style.color = "red";
        }
        historial.appendChild(li);
    }
}

playBtn.addEventListener("click", () => {

    try {
        const value = inputUser.value;

        const result = lottery(value);
        const { userNumber, randomNumber } = result.data;
        const message = result.message;

        // Feedback to user
        feedbackAlert(message === "Win" ? "Ganaste ✅" : "Perdiste ❌");

        // Save history 
        history.push({ userNumber, randomNumber, message });

        renderHistory();
    } catch (err) {
        feedbackAlert(err.message || "Error desconocido", "error");
    }

});