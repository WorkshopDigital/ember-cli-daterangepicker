import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    apply( start, end ) {
      console.log('date range updated:', start + ' - ' + end );
      this.setProperties({
        'start': start,
        'end': end
      });
    },

    cancel() {
      console.log('date range change canceled');
    }

  },

  start: "20140101",

  end: "20141231"

});
