import giveMeAJoke from "give-me-a-joke";
import colors from "colors";

giveMeAJoke.getRandomDadJoke(function (joke) {
  console.log(joke.rainbow);
});
