'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Template = models.template;

const setModel = require('./concerns/set-mongoose-model');

const index = (req, res, next) => {
  console.log('here')
  Template.find()
    .then(templates => res.json({
      templates: templates.map((e) =>
        e.toJSON({ virtuals: true, user: req.user })),
    }))
    .catch(next);
};

const show = (req, res) => {
  res.json({
    template: req.template.toJSON({ virtuals: true, user: req.user }),
  });
};

module.exports = controller({
  index,
  show,
}, { before: [
  { method: setModel(Template), only: ['show'] },
], });
