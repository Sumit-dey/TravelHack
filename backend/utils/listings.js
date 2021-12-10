const { check } = require('express-validator');
const { handleValidationErrors } = require('./validation');

const id = check('id')
    .notEmpty()
    .isInt({ min: 0 });
const city = check('city')
    .notEmpty()
    .withMessage('Please Enter a City')
const state = check('state')
    .notEmpty()
    .withMessage('Please Enter a State')
const country = check('country')
    .notEmpty()
    .withMessage('Please Enter a Country')
const title = check('title')
    .notEmpty()
    .withMessage('Please Enter a Title')
const details = check('details')
    .notEmpty()
    .withMessage('Please Enter Details')
const aboutThePlace = check('aboutThePlace')
    .notEmpty()
    .withMessage('Please Enter About This Place')
const price = check('price')
    .notEmpty()
    .isInt({ min: 0 })
    .withMessage('Price Must Be a Number ');
const image1 = check('url1')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address');
const image2 = check('url2')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address');
const image3 = check('url3')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address');
const image4 = check('url4')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address');
const image5 = check('url5')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Please provide a valid URL address');
const review = check('review')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a review');


exports.validateCreate = [
    city,
    state,
    country,
    title,
    details,
    aboutThePlace,
    price,
    image1,
    image2,
    image3,
    image4,
    image5,
    review,
    handleValidationErrors,
];

exports.validateUpdate = [
    id,
    city,
    state,
    country,
    title,
    details,
    aboutThePlace,
    price,
    image1,
    image2,
    image3,
    image4,
    image5,
    review,
    handleValidationErrors,
];

exports.validateCreateReview = [
    review
]
