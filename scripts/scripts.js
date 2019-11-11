const elem = document.querySelector('.js-choice');

// const choices = new Choices(elem, {
//   searchEnabled: false,
//   searchChoices: false,
//   classNames: {
//     containerOuter: 'feedback__choices choices',
//   }
// });


const app = new Vue({
  el: '.feedback',
  data: {
    customerName: '',
    phoneNumber: '',
    radioChoice: 'needAppliance',
    recallChoice: '',
    message: '',
    showRecallNotice: false,
    isActive: true
  },
  watch: {
    phoneNumber() {

    }
  },
  mounted() {
    Inputmask({
      mask: '+7 (999) 999-99-99',
      oncomplete: () => {
        this.showRecallNotice = true
      },
      onincomplete: () => {
        this.showRecallNotice = false
      }
    }).mask('input[data-type="tel"]');
  },
  computed: {
    otherQuestions() {
      return this.radioChoice == 'needAppliance' ? true : false
    }
  }
});
