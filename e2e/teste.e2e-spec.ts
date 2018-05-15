import { browser, by, element } from 'protractor';
import { insertIntoInput, insertIntoInputMask, insertIntoCalendar, insertIntoAutoComplete, selectFromDropdrown } from './propri.util';

describe('Teste protractor', () => {
  it('deve achar o Hello World', () => {
    browser.get('/');

    expect(element(by.id('hello')).getText()).toBe('Hello World!');

    insertIntoInput('input', 'Qualquer coisa!');
    insertIntoInputMask('inputMask', '875421');
    insertIntoCalendar('calendar', '12/12/2012');
    insertIntoAutoComplete('autoComplete', 'v', 1);
    selectFromDropdrown('dropdown', 2);

    browser.sleep(5000);
  });
});