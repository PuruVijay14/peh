import { browser, by, element } from 'protractor';

export class PehPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('peh-root h1')).getText();
  }
}
