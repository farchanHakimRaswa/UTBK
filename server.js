const debug = require('debug')('app:server');
const session = require('cookie-session');
const express = require('express');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('./configs.json');
const path = require('path');
const cookieParser = require('cookie-parser');
const history = require('connect-history-api-fallback');

const PORT = process.env.PORT || 3000;


 
server.listen(PORT, () => {
  debug('Server Started. *:%o', PORT);
});

// mboh karep
app.use((req, res, next) => {
  let allowedOrigin = ['http://localhost:3000', "http://localhost:8081", "http://localhost:8080", "http://45.80.181.226"];
  let currentOrigin = req.headers.origin;
  if (allowedOrigin.indexOf(currentOrigin) > -1) {
    res.header('Access-Control-Allow-Origin', currentOrigin);
  }
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  next();
});

// Host Vue SPA in public/dist directory
app.use(history({
  rewrites: [
    {
      from: /^\/api\/.*$/,
      to: (context) => {
        return context.parsedUrl.path
      }
    }
  ]
}));
app.use(express.static('public/dist'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/dist'));
});

// Body Parser

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// cookie-parser
app.use(cookieParser());

// cookie-session
app.set('trust proxy', 1); // trust first proxy

const user = require('./routes/user.js');
const materialActivity = require('./routes/materialActivity.js');
const materialType = require('./routes/materialType.js');
const questionBank = require('./routes/questionBank.js');



app.use('/api', user);
app.use('/api/material/type', materialType);
app.use('/api/material/activity', materialActivity);
app.use('/api/material/question', questionBank);

// Error Middleware
app.use(require('./libs/error.js'));
