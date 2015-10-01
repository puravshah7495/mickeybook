/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	'click #login': function(event) {
		var password = document.getElementById('login_password').value;
		var email = document.getElementById('login_email').value;

		Meteor.loginWithPassword(email, password,function(error) {
			if (error) {
				console.log(error);
			} else {
				Router.go('/')
			}
		});
	},

	'click #sign_up': function(event) {
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
		}, function(error){
			if (error) {
				console.log(error);
			} else {
				console.log('yay');
			}
		});
	}
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
