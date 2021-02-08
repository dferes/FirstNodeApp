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
    const mean = getMean(req.query.nums.split(','));
    return res.status(200).json(mean);
})

app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('A query key of numbers must be provided (separated by commas)', 400)
    }
    const median = getMedian(req.query.nums.split(','));
    return res.status(200).json(median);
})

app.get('/mode', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('A query key of numbers must be provided (separated by commas)', 400)
    }
    const mode = getMode(req.query.nums.split(','));
    return res.status(200).json(mode);
})

app.listen(3000, () => {
    console.log('App running on port 3000');
}) 