import { GaliasFrontendAdminPage } from './app.po';

describe('galias-frontend-admin App', () => {
  let page: GaliasFrontendAdminPage;

  beforeEach(() => {
    page = new GaliasFrontendAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
