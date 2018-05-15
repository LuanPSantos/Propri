import { element, by, promise, ElementFinder, browser, protractor } from "protractor";
import { ILocation } from "selenium-webdriver";

const EC = protractor.ExpectedConditions;
const TIMEOUT = 5000;
const NORMALIZER_MASK = '         ';

const byId = function (id: string): ElementFinder {
  return element(by.id(id));
}

const byClass = function(clazz: string): ElementFinder{
  return element(by.className(clazz)); 
}

const waitElementToBeClickable = function (id: string): promise.Promise<void> {
  return browser.wait(EC.elementToBeClickable(byId(id)), TIMEOUT);
}

const scroll = function (id: string): promise.Promise<void> {
  return byId(id).getLocation().then((location: ILocation) => {
    let x = location.x;
    let y = location.y;

    return browser.executeScript('window.scrollTo(' + x + ',' + y + ');').then(() => {
      return waitElementToBeClickable(id);
    })
  });
}

export const insertIntoInput = function (id: string, value: string): promise.Promise<void> {
  return scroll(id).then(() => {
    return byId(id).sendKeys(value);
  });
}

export const insertIntoInputMask = function (id: string, value: string): promise.Promise<void> {
  return scroll(id).then(() => {
    return byId(id).getWebElement().findElement(by.tagName('input')).then((input) => {
      return input.sendKeys(NORMALIZER_MASK + value);
    });
  });
}

export const insertIntoCalendar = function(id: string, value: string): promise.Promise<void> {
  return scroll(id).then(() => {
    return byId(id).getWebElement().findElement(by.tagName('input')).then((input) => {
      return input.sendKeys(value).then(() => {
        return input.sendKeys(protractor.Key.TAB);
      });
    });
  });
}

export const insertIntoAutoComplete = function(id: string, value: string, position: number = 0): promise.Promise<void> {
  return scroll(id).then(() => {
    return byId(id).getWebElement().findElement(by.tagName('input')).then((input) => {
      return input.sendKeys(value).then(() => {
        return byClass('ui-autocomplete-panel').getWebElement().findElements(by.tagName('li')).then((lis) => {
          return lis[position].click();
        });
      });
    });
  });
}

export const selectFromDropdrown = function(id: string, position: number = 0): promise.Promise<void> {
  return scroll(id).then(() => {
    return byId(id).getWebElement().findElement(by.className('ui-dropdown')).then((dropdown) => {
      return dropdown.click().then(() => {
        return byClass('ui-dropdown-items-wrapper').getWebElement().findElements(by.tagName('li')).then((lis) => {
          return lis[position].click();
        });
      });
    });
  });
}