const { MOVE_KEY } = require('./constants');
const { MSG } = require('./constants');
let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  connection.write(MOVE_KEY[key] || MSG[key]);
  if (key === '\u0003') process.exit();
};

module.exports = {
  setupInput,
}