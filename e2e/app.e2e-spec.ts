import { FridayAngularAppPage } from './app.po';

describe('friday-angular-app App', () => {
  let page: FridayAngularAppPage;

  beforeEach(() => {
    page = new FridayAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
