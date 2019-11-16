import React, { useState } from 'react';

import EmoFilter from "./EmoFilter";
import EmoChart from "./EmoChart";
import {Icon} from "@blueprintjs/core";

import './Home.scss';

import {history} from "../App";

function Plot({ pairId }) {
  const [emotionsMother, setEmotionsMother] = useState([]);
  const [emotionsSon, setEmotionsSon] = useState([]);

  return (
    <div className="Plot">
      <Icon className="backIcon" icon="chevron-left" onClick={()=> {history.goBack()}}/>
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
