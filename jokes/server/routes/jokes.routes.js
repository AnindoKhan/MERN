const JokeController = require("../controllers/jokes.controller");

module.exports = app =>{
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/:id/", JokeController.findOneSingleJoke);
    app.put("/api/jokes/update/:id/", JokeController.updateAnExistingJoke);
    app.post("/api/jokes/new/", JokeController.createANewJoke);
    app.delete("/api/jokes/delete/:id/", JokeController.deleteAnExistingJoke);
};
