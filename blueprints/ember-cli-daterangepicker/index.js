/* jshint node: true */

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'bootstrap-daterangepicker',
        target: 'https://github.com/WorkshopDigital/bootstrap-daterangepicker.git#master' },
      { name: 'ember-cli-moment-shim' },
      { name: 'moment' },
      { name: 'moment-timezone' }
    ]);
  }
};
