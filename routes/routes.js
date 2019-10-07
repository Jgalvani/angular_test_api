express = require("express")

router = express.Router();

var tests = require("../data/tests");
router.get('/tests', tests.list);
router.post('/tests', tests.add);
router.post('/tests/del', tests.del);

var users = require("../data/users");
router.get('/users', users.list);
router.post('/users', users.add);
router.post('/users/del', users.del);

var login = require("../data/login");
router.post('/login', login.signIn);
module.exports = router;
