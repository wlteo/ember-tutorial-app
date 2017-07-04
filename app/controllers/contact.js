import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  isLongEnough: Ember.computed.gte('message', 5),
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  notEmpty: Ember.computed.empty('message'),
  isDisabled: Ember.computed('isValid', 'isEmpty', function() {
    if(this.get('isValid') && !this.get('isEmpty')) {
      return false;
    }
    return true;
  }),

  actions: {
    sendMessage() {
      alert(`We got your message and we’ll get in touch soon`);
      this.set('responseMessage', `Thank you! We've just saved your email message "${this.get('message')}" under email "${this.get('emailAddress')}"`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});