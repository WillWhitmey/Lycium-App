import Ember from 'ember';

const { Route, $ } = Ember;

export default Route.extend({
  model(params) {
    return $.ajax({
            url: "https://lycium-service.herokuapp.com/changes/application/" + params.application_name + "?in=TEST&notIn=PRODUCTION",
            type: 'GET',
            success: function(res) {
              let data = res;
              console.log(data);
              return data
            }
        });
  }
});




// import Ember from 'ember';
//
// export default Ember.Route.extend({
//
//   userData: Ember.inject.service(),
//   originatorId: Ember.computed.alias('userData.originatorId'),
//   controllerName: 'shared.ticketsView',
//   templateName: 'shared.workflowsView',
//
//   model() {
//     return this.store.query('investor.workflow', {
//       originatorId: this.get('originatorId'),
//       complete: false
//     });
//   }
//
// });
