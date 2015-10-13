Template.MasterLayout.helpers({});

Template.MasterLayout.events({
  'click #logout': function(event) {
    Meteor.logout();
  },

  'submit #login_form': function(event) {
    var password = document.getElementById('login_password').value;
    var email = document.getElementById('login_email').value;

    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        console.log(error);
      } else {
				Accounts.sendVerificationEmail(Meteor.userId());
        Router.go('/');
      }
    });
    return false;
  },

  'submit #signin_form': function(event) {
    var firstName = document.getElementById('fname_field').value;
    var lastName = document.getElementById('lname_field').value;
    var email = document.getElementById('email_field').value;
    var password = document.getElementById('password_field').value;
    var gender = $('input[name=sex]:checked').val();

    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        firstName: firstName,
        lastName: lastName,
        gender: gender
      }
    }, function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('yay');
        Router.go('/');
      }
    });
    return false;
  }
});
