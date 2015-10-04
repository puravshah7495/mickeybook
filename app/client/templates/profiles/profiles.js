/*****************************************************************************/
/* Profiles: Event Handlers */
/*****************************************************************************/
Template.Profiles.events({

});

/*****************************************************************************/
/* Profiles: Helpers */
/*****************************************************************************/
Template.Profiles.helpers({
	template: function() {
		var template = Session.get('selectedTab');
		if (!template) {
			return "Timeline";
		} else {
			return template;
		}
	}
});

/*****************************************************************************/
/* Profiles: Lifecycle Hooks */
/*****************************************************************************/
Template.Profiles.created = function () {
};

Template.Profiles.rendered = function () {
	$('#tabs').tabs();
};

Template.Profiles.destroyed = function () {
};
