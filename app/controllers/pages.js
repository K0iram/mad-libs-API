'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Page = models.page;

const authenticate = require('./concerns/authenticate');
const setUser = require('./concerns/set-current-user');
const setModel = require('./concerns/set-mongoose-model');

const index = (req, res, next) => {
  Page.find()
    .then(pages => res.json({
      pages: pages.map((e) =>
        e.toJSON({ virtuals: true, user: req.user })),
    }))
    .catch(next);
};

const show = (req, res) => {
  res.json({
    page: req.page.toJSON({ virtuals: true, user: req.user }),
  });
};

const create = (req, res, next) => {
  let page = Object.assign(req.body.page, {
    _owner: req.user._id,
  });
  Page.create(page)
    .then(page =>
      res.status(201)
        .json({
          page: page.toJSON({ virtuals: true, user: req.user }),
        }))
    .catch(next);
};

const destroy = (req, res, next) => {
  req.page.remove()
    .then(() => res.sendStatus(204))
    .catch(next);
};

module.exports = controller({
  index,
  show,
  create,
  destroy,
}, { before: [
  { method: setUser, only: ['index', 'show', 'destroy'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Page), only: ['show'] },
  { method: setModel(Page, { forUser: true }), only: ['destroy'] },
], });
