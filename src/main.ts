import "./style.scss"

function createGame(player1: string, hour: string, player2: string) {
  return `
    <li>
        <img src="/src/assets/icon-${player1}.svg" alt="Bandeira do(a) ${player1}" />
        <strong>${hour}</strong>
        <img src="/src/assets/icon-${player2}.svg" alt="Bandeira do(a) ${player2}" />
    </li> 
  `
}

function createCard(date: string, day: string, games: string) {
  return `
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>${games}</ul>
  </div> 
`
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<header>
  <img src="/src/assets/logo.svg" alt="Logo da NLW" />
</header>

<main class="cards">
  ${createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia"))}
  ${createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  )}
  ${createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))}
</main>
`
