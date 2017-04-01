import { ListFetch } from 'Analyzer/functions/firebase';
import { GetTitlesList } from 'Analyzer/functions/processors';
import { GetTopTenWords } from 'Analyzer/functions/textparsers';
import { OPTION4 } from 'Page2/Page2Text';

function Option4Analysis() {
  return new Promise(function(resolve, reject) {
    ListFetch('topstories')
      .then(list => {
        GetTitlesList(list).then(newlist => {
          const top10 = GetTopTenWords(newlist);
          resolve(top10);
        });
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function Analyzer(value) {
  return new Promise(function(resolve) {
    var top10;
    switch (value) {
      case OPTION4:
        top10 = Option4Analysis();
        break;
      default:
        top10 = [];
    }

    resolve(top10);
  });
}
