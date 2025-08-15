const games = [
  { folder: "game1" },
  { folder: "game2" },
];

const container = document.getElementById("games-container");
container.innerHTML = "";

games.forEach(game => {
  const gamePath = `games/${game.folder}`;
  const iconPath = `${gamePath}/icon.png`;
  const descPath = `${gamePath}/desc.txt`;
  const playLink = `${gamePath}/index.html`;

  fetch(descPath)
    .then(response => response.text())
    .then(description => {
      const div = document.createElement("div");
      div.className = "game-card";
      div.innerHTML = `
        <a href="${playLink}">
          <img src="${iconPath}" alt="${game.folder} icon" width="100" />
        </a>
        <p><strong>${game.folder}</strong></p>
        <p>${description}</p>
      `;
      container.appendChild(div);
    })
    .catch(err => {
      console.error(`Error loading ${descPath}:`, err);
    });
});
