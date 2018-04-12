'use strict';

const Router = require('koa-router');

const router = new Router();

router.get('/', require('./actions/main'));

module.exports = router;
