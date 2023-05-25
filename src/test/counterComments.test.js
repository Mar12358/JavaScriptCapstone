const { counterComment } = require('./counterComments.js');

const sixthItem = [{ comment: 'Hi', creation_date: '2023-05-24', username: 'Ali' },
  { comment: 'Hi', creation_date: '2023-05-24', username: 'Ali' },
  { comment: 'so tasty', creation_date: '2023-05-24', username: 'Martin' },
  { comment: 'Comments and more comments!', creation_date: '2023-05-24', username: 'Mr' },
  { comment: 'Comments and more comments!', creation_date: '2023-05-24', username: 'Y' },
  { comment: 'New comment', creation_date: '2023-05-24', username: 'Martin' }];

const secondItems = [{ comment: 'Hi', creation_date: '2023-05-24', username: 'Ali' },
  { comment: 'Hi', creation_date: '2023-05-24', username: 'Ali' }];

describe('Here we test the counter comments', () => {
  test('First test: test the exact value ', () => {
    expect(counterComment(sixthItem)).toBe(6);
  });

  test('Second test: test the not be equal', () => {
    expect(counterComment(sixthItem)).not.toBe(3);
  });

  test('Third test: test the be equal', () => {
    expect(counterComment(secondItems)).toBe(2);
  });
});