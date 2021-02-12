import React, { useState } from 'react';
import './styles.sass';
import 'typeface-roboto';

import JavascriptReview from './JavascriptReview';
import Leetcode from './Leetcode';

const TABS = ['Javascript Review', 'Leetcode', 'React'];

const switchTab = (i) => {
  switch (i) {
    case 0:
      return <JavascriptReview />;
    case 1:
      return <Leetcode />;
    case 2:
      return (
        <div>
          <h1>React</h1>
        </div>
      );
    default:
      return <JavascriptReview />;
  }
};

export default function App() {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <div className="App">
      <div className="tabs">
        <div className="actions">
          {TABS.map((tab, i) => (
            <button
              key={i}
              className={tabIdx === i ? 'selected' : ''}
              onClick={() => setTabIdx(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="selected-tab">{switchTab(tabIdx)}</div>
      </div>
    </div>
  );
}
