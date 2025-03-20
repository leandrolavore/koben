async function getRandomJokeCall() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch("https://icanhazdadjoke.com/", options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

async function getSearchJokesCall(searchTerm: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = fetch(
    `https://icanhazdadjoke.com/search?page=1&limit=30&term=${encodeURIComponent(searchTerm)}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export async function getRandomJoke() {
  const data = await getRandomJokeCall();
  return data;
}

export async function getSearchJokes(searchTerm: string) {
  const data = await getSearchJokesCall(searchTerm);
  return data;
}