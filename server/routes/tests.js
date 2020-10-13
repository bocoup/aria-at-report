const { Router } = require('express');
const TestController = require('../controllers/TestController');

const router = Router();

router.post('/import', TestController.importTests);

router.post('/result', TestController.saveTestResults);

module.exports = router;
