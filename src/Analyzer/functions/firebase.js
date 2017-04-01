const firebase = require('firebase/app');
require('firebase/database');

const hackernews = firebase.initializeApp(
  {
    databaseURL: 'https://hacker-news.firebaseio.com/'
  },
  'hackernews'
);

export function ListFetch(folder) {
  return new Promise((resolve, reject) => {
    var ref = hackernews.database().ref(`v0/${folder}`);
    ref.once('value').then(
      snapshot => {
        resolve(snapshot.val());
      },
      error => {
        reject(error.message);
      }
    );
  });
}

export function ItemFetch(id) {
  return new Promise((resolve, reject) => {
    var ref = hackernews.database().ref(`v0/item/${id}`);
    ref.once('value').then(
      snapshot => {
        resolve(snapshot.val());
      },
      error => {
        reject(error.message);
      }
    );
  });
}
