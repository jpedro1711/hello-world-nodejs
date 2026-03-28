const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const PASSWORD = process.env.db_password;

app.get('/', (req, res) => {
  res.send(`<h2>Hello World, using deploy from code. DB PASS is: ${PASSWORD}. Have a nice day!</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
