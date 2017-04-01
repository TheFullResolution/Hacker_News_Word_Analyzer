import moment from 'moment';
import { ItemFetch } from './firebase';

export function GetTitlesList(list) {
  return new Promise(function(resolve, reject) {
    const titeledPromises = list.map(item => {
      return ItemFetch(item).then(
        result => {
          return result.title;
        },
        error => {
          return error.message;
        }
      );
    });
    Promise.all(titeledPromises)
      .then(function(results) {
        resolve(results);
      })
      .catch(reason => {
        reject(reason);
      });
  });
}



export function GetThisWeekList(list) {
  return new Promise(function(resolve) {
    const filteredPromises = list.map(item => {
      return ItemFetch(item).then(result => {
        return {
          time: result.time,
          title: result.title
        };
      });
    });
    Promise.all(filteredPromises).then(function(results) {
      const weekAgo = moment().subtract(7, 'days');

      const filtered = results.filter(item => {
        return weekAgo.isBefore(moment.unix(item.time));
      });
      resolve(filtered);
    });
  });
}
