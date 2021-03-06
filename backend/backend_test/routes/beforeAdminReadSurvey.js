/beforeAdminReadSurvey.js*/
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const adminReadSurveyRouter = require('./adminReadSurvey');
const {	verifyTokenAdmin	} = require('./tokenAuth');

router.use(cookieParser());
router.get('/',verifyTokenAdmin, adminReadSurveyRouter);
module.exports = router;
