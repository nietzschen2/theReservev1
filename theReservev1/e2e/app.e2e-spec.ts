import { TheReservev1Page } from './app.po';

describe('the-reservev1 App', () => {
  let page: TheReservev1Page;

  beforeEach(() => {
    page = new TheReservev1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
