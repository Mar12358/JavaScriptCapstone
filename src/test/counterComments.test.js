const { counterComment } = require('./counterComments.js');

const sixItems = [{ comment: 'Hi', creation_date: '2023-05-24', username: 'Ali' },
  { comment: 'Hi', creation_date: '2023-05-24', username: 'Ali' },
  { comment: 'so tasty', creation_date: '2023-05-24', username: 'Martin' },
  { comment: 'Comments and more comments!', creation_date: '2023-05-24', username: 'Mr' },
  { comment: 'Comments and more comments!', creation_date: '2023-05-24', username: 'Y' },
  { comment: 'New comment', creation_date: '2023-05-24', username: 'Martin' }];

const twoItems = [{ comment: 'Hi', creation_date: '2023-05-24', username: 'Ali' },
  { comment: 'Hi', creation_date: '2023-05-24', username: 'Ali' }];

describe('Here we test the counter comments', () => {
  test('First test: test the exact value ', () => {
    expect(counterComment(sixItems)).toBe(6);
  });

  test('Second test: test the not be equal', () => {
    expect(counterComment(sixItems)).not.toBe(3);
  });

  test('Third test: test the be equal', () => {
    expect(counterComment(twoItems)).toBe(2);
  });
});