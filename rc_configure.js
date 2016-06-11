Template.configureLoginServiceDialogForRecurse.helpers({
  siteUrl: function () {
    return Meteor.absoluteUrl();
  }
});

Template.configureLoginServiceDialogForRecurse.fields = function () {
  return [
    {property: 'clientId', label: 'Client Id'},
    {property: 'secret', label: 'Client Secret'}
  ];
};
