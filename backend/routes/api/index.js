const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const georgiaRouter = require('./georgia.js')
const alabamaRouter = require('./alabama.js')
const sanJoseRouter = require('./sanjose.js')
const spotRouter = require('./singleSpot.js')
const createListing = require('./createlisting')
const editListing = require('./editlisting')
const deleteListing = require('./deletelisting')
const createReview = require('./createreview')
const allSpots = require('./allSpots')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/georgia', georgiaRouter);

router.use('/alabama', alabamaRouter);


router.use('/sanjose', sanJoseRouter);

router.use('/spot', spotRouter)

router.use('/createlisting', createListing)

router.use('/editlisting', editListing)

router.use('/deletelisting', deleteListing)

router.use('/createreview', createReview)

router.use('/allspots', allSpots)


router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports = router;
