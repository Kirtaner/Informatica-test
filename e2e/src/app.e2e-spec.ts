import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Informatica Coding Test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title message, hello there if the people evaluating the source are peeking in the test stubs :)', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Informatica MDM Entity Editor');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
