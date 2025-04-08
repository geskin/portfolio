"use strict";

const app = require("./app");
// const { PORT } = require("./config");

app.listen(3001, "0.0.0.0", function () { //(PORT, "0.0.0.0", function () {
    console.log(`Server running on port 3001`); //${PORT}`);
});
