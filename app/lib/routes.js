Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'profile:mickey',
  controller: 'ProfileController',
  action: 'action',
  where: 'client'
});

Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    this.render('Home');
  } else {
    this.next();
  }
});
