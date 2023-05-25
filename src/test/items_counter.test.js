const { itemsCounter } = require('./items_counter.js');

describe('TEST Items Counter', () => {
  const zeroElements = document.createElement('div');
  zeroElements.innerHTML = '';

  const oneElement = document.createElement('div');
  zeroElements.innerHTML = '<div></div>';

  const twoElements = document.createElement('div');
  zeroElements.innerHTML = `<div></div>
                            <div></div>`;

  const sixElements = document.createElement('div');
  zeroElements.innerHTML = `<div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>`;

  test('Zero elements should count 0', () => {
    expect(itemsCounter(zeroElements)).toBe(0);
    expect(itemsCounter(zeroElements)).not.toBeNull();
    expect(itemsCounter(zeroElements)).toBeDefined();
    expect(itemsCounter(zeroElements)).not.toBeUndefined();
  });

  test('One elements should count 1', () => {
    expect(itemsCounter(oneElement)).toEqual(1);
  });

  test('Two elements should count 2', () => {
    expect(itemsCounter(twoElements)).toBe(2);
  });

  test('Six elements should count 6', () => {
    expect(itemsCounter(sixElements)).toBe(6);
  });
});