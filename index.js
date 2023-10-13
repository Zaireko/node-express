const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by adsoft');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.get('/work-experience', (req, res, next) => {
	res.sendfile("assets/work-experience.json");
});

app.get('/scli', (req, res, next) => {
	res.sendfile("assets/scli.json");
});

app.get('/skills', (req, res, next) => {
  res.sendfile("assets/skills.json");
});

app.get('/interests', (req, res, next) => {
  res.sendfile("assets/interests.json");
});

app.get('/certificates', (req, res, next) => {
  res.sendfile("assets/certificates.json");
});

app.get('/devhours', (req, res, next) => {
  res.sendfile("assets/1a_dev_hours.json");
});

app.get('/proxysize', (req, res, next) => {
  res.sendfile("assets/1a_proxy_size.json");
});

app.listen(port,  () => 
	console.log('listening on port ' + port
));
