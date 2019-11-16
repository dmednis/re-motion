import React from 'react';
import classNames from 'classnames';

import emotions from '../emotions';
import './EmoFilter.scss';

function toggleEmotion(emotions, emo) {
  return emotions.includes(emo) ? emotions.filter(e => e !== emo) : [...emotions, emo];
}

function EmoFilter({ title, selectedEmotions, onClick, alt }) {

  const emotionButtons = emotions.map(([emo, icon, color, altColor]) => {

    const active = selectedEmotions.includes(emo);
    const classes = classNames({
      'EmoFilter__emotion': true,
      'EmoFilter__emotion--active': active
    });

    return (
      <div className={classes}
           style={active ? { borderColor: alt ? altColor : color } : null}
           onClick={() => onClick(toggleEmotion(selectedEmotions, emo))}
           key={emo}
      >{icon}</div>
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