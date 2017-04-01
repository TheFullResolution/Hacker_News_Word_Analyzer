import React, { PropTypes } from 'react';
import style from 'scss/components/Top10.scss';

const Top10 = ({ top10 }) => {
    return <div  className={style.top10}>
      <ol>
        {top10.map((item, index)=>{
          return <li key={index}>{`"${item.word}" - count: ${item.count}`}</li>;
        })}
      </ol>
    </div>;
};

Top10.propTypes = {
  top10: PropTypes.array
};
export default Top10;
