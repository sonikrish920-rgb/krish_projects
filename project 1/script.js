const jokeContainer = document.getElementById("joke");
const button = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getJoke() {
    button.disabled = true;
    jokeContainer.classList.remove("fade");
    jokeContainer.textContent = "Loading a joke...";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Joke service returned ${response.status}.`);
        }

        const item = await response.json();
        if (item.error || typeof item.joke !== "string") {
            throw new Error("The joke service returned an invalid response.");
        }

        jokeContainer.textContent = item.joke;
    } catch (error) {
        jokeContainer.textContent = "Couldn't load a joke. Check your connection and try again.";
        console.error("Unable to load a joke:", error);
    } finally {
        jokeContainer.classList.add("fade");
        button.disabled = false;
    }
}

button.addEventListener("click", getJoke);
getJoke();