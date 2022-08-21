function openPlayerConfig(event) {
	const selectedPlayerId = event.target.dataset.playerid;
	editedPlayer = +selectedPlayerId;
	playerConfigOverlayElement.style.display = "block";
	backdropElement.style.display = "block";
	formElement.firstElementChild.lastElementChild.value = "";
}

function closePlayerConfig() {
	playerConfigOverlayElement.style.display = "none";
	backdropElement.style.display = "none";
	formElement.firstElementChild.classList.remove("error");
	errorsOutput.textContent = "";
}

function savePlayerConfig(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const enteredPlayerName = formData.get("username").trim();

	// Form Validation

	if (!enteredPlayerName) {
		event.target.firstElementChild.classList.add("error");
		errorsOutput.textContent = "Please enter a valid name!";
		return;
	}

	const updatedPlayerDataElement = document.getElementById(
		"player-" + editedPlayer + "-data"
	);
	updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

	players[editedPlayer - 1].name = enteredPlayerName;

	closePlayerConfig();
}
