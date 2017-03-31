import React from 'react';
import { Link } from 'react-router-dom';
import style from 'scss/components/Page1.scss';

const Page1Content = () => (
  <div className={style.content}>
    <h2>Home</h2>
    <p>
      Welcome on Hacker News Word Analyzer, a magnificent project which will provide you with a hyper accurate analysis of Top 10 most occurring words you can find among Hacker News titles and stories.
    </p>
    <p>
      To see the ranking, go to the&nbsp;
      <Link to="/analyzer">ANALYZER</Link>&nbsp;
      page and select, using a drop down list, required analysis. Then press refresh button, get a coffee or two and see the results!
    </p>
    <picture>
      <source
        type="image/webp"
        sizes="(min-width: 810px) 800px, 100vw"
        srcSet="/images/hackernews-small.webp 600w, /images/hackernews-medium.webp 800w, /images/hackernews-big.webp 1000w"
      />
      <img
        src="/images/hackernews-medium.jpg"
        sizes="(min-width: 810px) 800px, 100vw"
        srcSet="/images/hackernews-small.jpg 600w, /images/hackernews-medium.jpg 800w, /images/hackernews-big.jpg 1000w"
        alt="picture of the laptop"
      />
    </picture>

    <p>
      Disclaimer: this is just a coding challenge, not a real thing.
    </p>

  </div>
);

export default Page1Content;
