import { PehPage } from './app.po';

describe('peh App', () => {
  let page: PehPage;

  beforeEach(() => {
    page = new PehPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to peh!');
  });
});
