import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('changes', {path: '/'}, function() {
    this.route('application-changes', {path: '/changes/:application_name'});
  });
  this.route('about');
  this.route('contact');
  // this.route('rentals');
  // this.route('home');
  // this.route('api-application');
  // this.route('admin-api-application');
  // this.route('customer-service-application');
  // this.route('execution-settlement-application');
  // this.route('investor-application');
  // this.route('isa-application');
  // this.route('payments-application');
  // this.route('security-application');
  // this.route('workflow-manager-application');
  // this.route('reporting-billing-application');
  // this.route('admin-ui');
  // this.route('insight-ui');
  // this.route('investments-ui');
  // this.route('website-ui');
});

export default Router;
