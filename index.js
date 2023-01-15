const express = require("express");
const { fork } = require("child_process");

const app = express();
app.use(express.json());

app.get("/isPrime/:num", (req, res) => {
  const childProcess = fork("./isPrime");

  childProcess.send({
    number: +req.params.num,
  });

  childProcess.on("message", (message) => {
    console.log(message);
    return res.send(message);
  });

  childProcess.on("error", (err) => {
    console.log(`Error in child process of isPrime: ${err}`);
    return res.send(null);
  });
});

app.listen(3000, () => {
  console.log(`Code Running on port 3000`);
});
