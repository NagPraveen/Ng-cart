import { NgCartPage } from './app.po';

describe('ng-cart App', () => {
  let page: NgCartPage;

  beforeEach(() => {
    page = new NgCartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
