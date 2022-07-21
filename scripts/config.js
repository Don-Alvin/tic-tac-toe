function openPlayerConfig(event) {
	const selectedPlayerId = event.target.dataset.playerid;
	editedPlayer = +selectedPlayerId;
	playerConfigOverlayElement.style.display = "block";
	backdropElement.style.display = "block";
}

function closePlayerConfig() {
	playerConfigOverlayElement.style.display = "none";
	backdropElement.style.display = "none";
	formElement.firstElementChild.classList.remove("error");
	errorOutput.textContent = "";
	formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const enteredUsername = formData.get("username").trim();

	if (!enteredUsername) {
		event.target.firstElementChild.classList.add("error");
		errorOutput.textContent = "Please enter a valid name!";
		return;
	}

	const updatedPlayerDataElement = document.getElementById(
		"player-" + editedPlayer + "-data"
	);
	updatedPlayerDataElement.children[1].textContent = enteredUsername;

	if (editedPlayer === 1) {
		players[0].name = enteredUsername;
	} else {
		players[1].name = enteredUsername;
	}

	closePlayerConfig();
}
