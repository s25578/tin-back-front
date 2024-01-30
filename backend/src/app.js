require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const port = 3000;

app.use(cors());

// Routes
const indexRouter = require('./routes/index');
const symbolsRouter = require('./routes/symbols');
const predictionsRouter = require('./routes/predictions');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/symbols', symbolsRouter);
app.use('/predictions', predictionsRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
