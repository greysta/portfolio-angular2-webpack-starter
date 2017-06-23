import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/about');
  });

  it('should have a title', () => {
    let subject: string = 'Portfolio - Angular2 Webpack Starter';
    let result: string  = 'Portfolio - Angular2 Webpack Starter';
    expect(subject).toBe(result);
  });
});
