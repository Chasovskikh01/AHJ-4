import isValidCard from './validators';
import algoritmLuna from './algoritmLuna';

export default class CardFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
      <div class="containerCard">
        <div class="cardPic mir"></div>
        <div class="cardPic americanExpress"></div>
        <div class="cardPic visa"></div>
        <div class="cardPic masterCard"></div>
        <div class="cardPic discover"></div>
        <form class="card-form-widget">
          <label for="card-input">№ карты =></label>
          <input type="text" data-id="card-input" class="input">
          <button class="submit">Click to Validate</button>
        </form>
      </div>
    `;
  }

  static get selector() {
    return '.card-form-widget';
  }

  static get inputSelector() {
    return '.input';
  }

  static get submitSelector() {
    return '.submit';
  }

  bindToDOM() {
    this.parentEl.innerHTML = CardFormWidget.markup;

    this.element = this.parentEl.querySelector(CardFormWidget.selector);
    this.submit = this.element.querySelector(CardFormWidget.submitSelector);
    this.input = this.element.querySelector(CardFormWidget.inputSelector);

    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    const { value } = this.input;

    if (isValidCard(value) && algoritmLuna(value)) {
      this.input.classList.add('valid');
      this.input.classList.remove('invalid');
    } else {
      this.input.classList.add('invalid');
      this.input.classList.remove('valid');
    }
  }
}
