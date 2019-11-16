import React, {useState} from 'react';
import './reset.scss';
import './App.css';

import EmoFilter from "./components/EmoFilter";
import EmoChart from "./components/EmoChart";



function App() {

    const [emotionsMother, setEmotionsMother] = useState([]);
    const [emotionsSon, setEmotionsSon] = useState([]);

    return (
        <div className="App">
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

export default App;
