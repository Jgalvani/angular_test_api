express = require("express")

router = express.Router();

var tests = require("../data/tests");

router.get('/tests', tests.list);
router.post('/tests', tests.add);
router.post('/tests/del', tests.del);

module.exports = router;
