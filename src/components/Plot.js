import React, { useState } from 'react';

import EmoFilter from "./EmoFilter";
import EmoChart from "./EmoChart";


function Plot({ pairId }) {
  const [emotionsMother, setEmotionsMother] = useState([]);
  const [emotionsSon, setEmotionsSon] = useState([]);

  return (
    <div className="Plot">
      <EmoChart pairId={pairId} keys1={emotionsMother} keys2={emotionsSon}/>

      <EmoFilter title={"Mother"}
                 selectedEmotions={emotionsMother}
                 onClick={(emotions) => setEmotionsMother(emotions)}/>
      <EmoFilter title={"Son"}
                 selectedEmotions={emotionsSon}
                 onClick={(emotions) => setEmotionsSon(emotions)}/>

    </div>
  );
}

export default Plot;