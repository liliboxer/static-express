// req.params to grab the variable after a colon in a path 

const app = require('./lib/app');

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  console.log('hello');
});