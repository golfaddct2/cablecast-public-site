import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('podcasts');
  this.route('schedule');
  this.route('show', {path: 'show/:id'});
  this.route('watch-now', { path:'watch/:stream_id' });
  this.route('vods');
  this.route('search');
  this.route('gallery',{path: 'gallery/:id'});
});

export default Router;
