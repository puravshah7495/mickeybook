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

Router.route('/login', {
  name: 'login',
  controller: 'LoginController',
  action : 'action',
  where: 'client'
})

Router.onBeforeAction(function(name) {
  console.log(name)
  if(name.url == '/login' && !Meteor.user()) {
    this.next();
  } else if (!Meteor.user()) {
    this.render('Home');
  } else {
    this.next();
  }
});
