import moment from 'moment';
import { TitleFetch, ItemFetch } from './firebase';
import { OPTION2 } from 'Page2/Page2Text';

function GetThisWeekList(list) {
  return new Promise(function(resolve, reject) {
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

      const filtered = results.filter((item)=> {
        console.log(moment.unix(item.time).format('YYYY-MM-DD HH-MM'));
        return weekAgo.isBefore(moment.unix(item.time));
      });
      resolve(filtered);
    });
  });
}

function Option2Analysis() {
  TitleFetch()
    .then(list => {
      GetThisWeekList(list).then(newlist => {
        console.log(newlist);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

export function Analyzer(value) {
  if (value === OPTION2) {
    Option2Analysis();
  }
}
