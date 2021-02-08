const express = require('express');
const ExpressError = require('./expressError');
const {getMean, getMode, getMedian, validateNumberArray} = require('./utilityFunctions')

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome');
});


app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('A query key of numbers must be provided (separated by commas)', 400)
    }

    const errorDetermination = validateNumberArray(req.query.nums.split(','));
    if (errorDetermination instanceof Error) {
        throw new ExpressError(errorDetermination.message);
    }
      
    return res.send({
        operation: 'mean',
        result: getMean(req.query.nums.split(','))
    })
});


app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('A query key of numbers must be provided (separated by commas)', 400)
    }

    const errorDetermination = validateNumberArray(req.query.nums.split(','));
    if (errorDetermination instanceof Error) {
        throw new ExpressError(errorDetermination.message);
    }

    return res.send({
        operation: 'median',
        result: getMedian(req.query.nums.split(','))
    })
});


app.get('/mode', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('A query key of numbers must be provided (separated by commas)', 400)
    }

    const errorDetermination = validateNumberArray(req.query.nums.split(','));
    if (errorDetermination instanceof Error) {
        throw new ExpressError(errorDetermination.message);
    }

    return res.send({
        operation: 'mode',
        result: getMode(req.query.nums.split(','))
    })
});


app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
    return next(err);
});


app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
});


app.listen(3000, () => {
    console.log('App running on port 3000');
});
