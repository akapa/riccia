'use strict';

const Koa = require('koa');
const router = require('./router');

const app = new Koa();

app.use(router.middleware());

module.exports = app;
