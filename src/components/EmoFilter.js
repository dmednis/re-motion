import React from 'react';
import classNames from 'classnames';
import './EmoFilter.scss';

function toggleEmotion(emotions, emo) {
    return emotions.includes(emo) ? emotions.filter(e => e !== emo) : [...emotions, emo];
}

function EmoFilter({title, selectedEmotions, onClick}) {

    const emotions = [
        ['love', '❤️'], ['happy', '😊'], ['sad', '😢'],
        ['angry', '😡'], ['left-out', '🤐'], ['thoughtful', '🤔']];

    const emotionButtons = emotions.map(([emo, icon]) => {
        const classes = classNames({
            'EmoFilter__emotion': true,
            'EmoFilter__emotion--active': selectedEmotions.includes(emo)
        });

        return (
            <div className={classes} onClick={() => onClick(toggleEmotion(selectedEmotions, emo))}>
                {icon}
            </div>
        )
    });

    return (
        <div className='EmoFilter'>
            <p className="EmoFilter__title">{title}</p>
            {emotionButtons}
        </div>
    )
}

export default EmoFilter;