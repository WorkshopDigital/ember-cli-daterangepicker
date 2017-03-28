/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const util = require('util');
const extend = util._extend;

const defaultOptions = {
  importDatepickerJS: true,
  importDatepickerCSS: true
};

module.exports = {
  name: 'ember-cli-daterangepicker',

  included: function(app) {

    this._super.included.apply(this, arguments);

    let options = extend(extend({}, defaultOptions), app.options['ember-cli-daterangepicker']);

    if (!process.env.EMBER_CLI_FASTBOOT) {

      if (options.importDatepickerJS) {
        this.app.import('vendor/bootstrap-daterangepicker/daterangepicker.js');
      }

      if (options.importDatepickerCSS) {
        this.app.import('vendor/bootstrap-daterangepicker/daterangepicker.css');
      }
    }
  },

  treeForVendor: function(vendorTree) {
    var trees = [];
    var daterangepickerPath = path.dirname(require.resolve('bootstrap-daterangepicker'));

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(new Funnel(daterangepickerPath, {
      destDir: 'bootstrap-daterangepicker',
      include: [new RegExp(/\.js$|\.css/)],
      exclude: [
        'moment',
        'moment.min',
        'package',
        'website'
      ].map(function(key) {
        return new RegExp(key + '\.js$');
      })
    }));

    return mergeTrees(trees);
  }
};
