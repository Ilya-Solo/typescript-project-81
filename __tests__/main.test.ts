import HexletCode from '../src/index'; // Adjust the path if needed

describe('HexletCode', () => {
  test('formFor generates a form without URL', () => {
    const template = { name: 'rob', job: 'hexlet', gender: 'm' };
    const form = HexletCode.formFor(template, {}, (f) => {});
    const expectedForm = '<form action="#" method="post"></form>';
    expect(form).toEqual(expectedForm);
  });

  test('formFor generates a form with URL', () => {
    const template = { name: 'rob', job: 'hexlet', gender: 'm' };
    const form = HexletCode.formFor(template, {url: '/users'}, (f) => {});
    const expectedForm = '<form action="/users" method="post"></form>';
    expect(form).toEqual(expectedForm);
  });
});