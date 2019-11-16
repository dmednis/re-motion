import React, {useState} from 'react';

import EmoFilter from "./EmoFilter";
import EmoChart from "./EmoChart";


function Plot() {

    const [emotionsMother, setEmotionsMother] = useState([]);
    const [emotionsSon, setEmotionsSon] = useState([]);

    return (
        <div className="Plot">
            <EmoChart/>

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