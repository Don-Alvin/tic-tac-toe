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
}
