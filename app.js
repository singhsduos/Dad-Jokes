// Get HTML elements from HTML Doc
const jokes = document.querySelector('ul');
const button = document.querySelector('#btn');
const reset = document.querySelector('#remove');

// function to add new jokes by creating new element in HTML doc
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    var newLI = document.createElement('li');

    if (jokeText !== undefined) {
        newLI.append(jokeText);
        jokes.append(newLI);
    } 
}

// fetching API DadJokes
const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }

        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;

    } catch (e) {
        return alert("No Jokes Availabale");
    }
}

// function to remove jokes
const clearJokes = async () => {
    try {
        var newJ = document.querySelector('li');
        newJ.remove();
    } catch (e) {
        return alert("Nothing to remove");
    }
}

//buttons for getting jokes and removing jokes
button.addEventListener('click', addNewJoke);
reset.addEventListener('click', clearJokes);