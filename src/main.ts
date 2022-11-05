import "./style.scss";

function createGame(player1: string, hour: string, player2: string) {
  return `
    <li>
        <img src="/src/assets/icon-${player1}.svg" alt="Bandeira do(a) ${player1}" />
        <strong>${hour}</strong>
        <img src="/src/assets/icon-${player2}.svg" alt="Bandeira do(a) ${player2}" />
    </li>
  `;
}

let delay = -0.4;
function createCard(date: string, day: string, games: string) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `;
}

document.querySelector("#cards")!.innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"));
