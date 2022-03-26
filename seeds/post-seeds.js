const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'I am on the list.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Its origin is still a mystery.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'She went over to see if her name was there.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'He stopped to smell the flower',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'I had a hangover.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'I\'d like us to repair our differences.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Mr. White went to the store last night.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'The locksmith is fixing it.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'We\'re no different from anyone else.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'You have a really big day ahead of you.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'He is in his normal clothes.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'It\'s as dry as bone.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'The compan suffered major losses.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'Europe is old.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'She got all dolled up for her big date.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: 'He does laundry in his basement.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'I\'m not a big fan of blueberry pancakes.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'Why didn\'t you call the police?',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Do you like spaghetti?',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'This is the biggest cat I\'ve ever seen.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
