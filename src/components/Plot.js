import React, { useState } from 'react';

import EmoFilter from "./EmoFilter";
import EmoChart from "./EmoChart";


function Plot({ title, data1, label1, data2, label2 }) {
  const [emotionsMother, setEmotionsMother] = useState(['happy', 'sad']);
  const [emotionsSon, setEmotionsSon] = useState(['happy', 'sad']);

  return (
    <div className="Plot">
      <h2>{title}</h2>
      <EmoChart data1={data1} keys1={emotionsMother} data2={data2} keys2={emotionsSon}/>

      <EmoFilter title={label1}
                 selectedEmotions={emotionsMother}
                 onClick={(emotions) => setEmotionsMother(emotions)}/>
      <EmoFilter title={label2}
                 selectedEmotions={emotionsSon}
                 onClick={(emotions) => setEmotionsSon(emotions)}
                 alt={true}
      />

    </div>
  );
}

export default Plot;
