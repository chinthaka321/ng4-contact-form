import { Ng4ContactFormPage } from './app.po';

describe('ng4-contact-form App', () => {
  let page: Ng4ContactFormPage;

  beforeEach(() => {
    page = new Ng4ContactFormPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
