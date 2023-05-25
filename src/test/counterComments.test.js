const { counterComment } = require('./counterComments.js');

const items = [{ comment: 'Hi', creation_date: '2023-05-24', username: 'Ali' },
  { comment: 'Hi', creation_date: '2023-05-24', username: 'Ali' },
  { comment: 'so tasty', creation_date: '2023-05-24', username: 'Martin' },
  { comment: 'Comments and more comments!', creation_date: '2023-05-24', username: 'Mr' },
  { comment: 'Comments and more comments!', creation_date: '2023-05-24', username: 'Y' },
  { comment: 'New comment', creation_date: '2023-05-24', username: 'Martin' }];

// const seconditems = [{ "comment": "Hi", "creation_date": "2023-05-24", "username": "Ali" },
// { "comment": "Hi", "creation_date": "2023-05-24", "username": "Ali" }]

describe('Here we test the counter comments', () => {
  test('Fist test: test the exact value ', () => {
    expect(counterComment(items)).toBe(6);
  });

  // test("Second test: test the not be equal", () => {
  //     expect(counterComment(items)).not.toBe(3);
  // });

  // test("Thired test: test the not be equal", () => {
  //     expect(counterComment(seconditems)).toBe(2);
  // });
});