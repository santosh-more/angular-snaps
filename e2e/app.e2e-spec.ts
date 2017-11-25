import { AngularSnapsPage } from './app.po';

describe('angular-snaps App', () => {
  let page: AngularSnapsPage;

  beforeEach(() => {
    page = new AngularSnapsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
