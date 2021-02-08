const express = require('express');
const ExpressError = require('./expressError');
const {getMean, getMode, getMedian} = require('./utilityFunctions')

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('A query key of numbers must be provided (separated by commas)', 400)
    }

    return res.send({
        operation: 'mean',
        result: getMean(req.query.nums.split(','))
      })
})

app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('A query key of numbers must be provided (separated by commas)', 400)
    }

    return res.send({
        operation: 'median',
        result: getMedian(req.query.nums.split(','))
      })
})

app.get('/mode', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('A query key of numbers must be provided (separated by commas)', 400)
    }
    return res.send({
        operation: 'mode',
        result: getMode(req.query.nums.split(','))
      })
})

app.listen(3000, () => {
    console.log('App running on port 3000');
})
