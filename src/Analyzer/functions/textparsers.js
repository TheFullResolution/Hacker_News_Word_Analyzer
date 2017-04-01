function TransformToWords(list) {
  return list
    .reduce(
      (result, item) => {
        return result.concat(item.match(/\b[^\d\W]+\b/g));
      },
      []
    )
    .map(item => {
      return item.toLowerCase();
    })
    .filter(item => {
      return item.length > 1;
    });
}

function SummorizeWords(list) {
  const wordsAndCountObj = list.reduce(
    (result, item) => {
      result[item] = result[item] || {
        word: item,
        count: 0
      };
      result[item].count += 1;

      return result;
    },
    {}
  );

  return Object.keys(wordsAndCountObj)
    .map(function(key) {
      return wordsAndCountObj[key];
    })
    .sort(function(a, b) {
      return b.count - a.count;
    });
}

export function GetTopTenWords(list) {
  const transformedList = TransformToWords(list);
  const uniqueList = SummorizeWords(transformedList);
  const top10 = uniqueList.slice(0, 10);
  return top10;
}