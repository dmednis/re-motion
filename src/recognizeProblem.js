// interface EmotionData {
//   love: number[];
//   happy: number[];
//   sad: number[];
//   angry: number[];
//   'left-out': number[];
//   thoughtful: number[];
// }

// interface Return {
//   hasProblem: boolean;
//   type: ('mismatch'|'constant')[];
//   msg: string[];
// }

// Pass data about childEmotions from parent and child side
// export const recognizeProblem = (parentData: EmotionData, childData: EmotionData): Return => {
export const recognizeProblem = (parentData, childData) => {
  let verdict = {
    hasProblem: false,
    type: [],
    msg: []
  }

  // First problem if child for last 2 weeks constantly has feeled same emotion
  Object.entries(childData).forEach(([emotion, dayData]) => {
    const emotionData = [...dayData].reverse().slice(0, 14);
    const isConstant = emotionData.reduce((acc, current) => acc && current > 0, true);

    if (isConstant) {
      verdict.hasProblem = true;
      if (!verdict.type.includes('constant')) {
        verdict.type.push('constant');
      }

      verdict.msg.push(`For last two weeks child has ${emotion} emotion`);
    }
  })

  // Second problem, parent thinks that in child dominates positive emotions, but in for child dominates negative emotions
  // Vice-a-versa
  const pHappyEmotions = Object.entries(parentData)
    .filter(([emotion, _]) => ['love', 'happy'].includes(emotion))
    .map(([_, dayData]) => [...dayData].reverse().slice(0, 5))
    .reduce((acc, current) => acc + sumArray(current), 0);

  const pSadEmotions = Object.entries(parentData)
    .filter(([emotion, _]) => ['sad', 'angry', 'left-out'].includes(emotion))
    .map(([_, dayData]) => [...dayData].reverse().slice(0, 5))
    .reduce((acc, current) => acc + sumArray(current), 0);

  const cHappyEmotions = Object.entries(childData)
    .filter(([emotion, _]) => ['love', 'happy'].includes(emotion))
    .map(([_, dayData]) => [...dayData].reverse().slice(0, 5))
    .reduce((acc, current) => acc + sumArray(current), 0);

  const cSadEmotions = Object.entries(childData)
    .filter(([emotion, _]) => ['sad', 'angry', 'left-out'].includes(emotion))
    .map(([_, dayData]) => [...dayData].reverse().slice(0, 5))
    .reduce((acc, current) => acc + sumArray(current), 0);

  if (pHappyEmotions === pSadEmotions || cHappyEmotions === cSadEmotions) {
    return verdict;
  }

  const pDominating = pHappyEmotions > pSadEmotions ? 'happy' : 'sad';
  const cDominating = cHappyEmotions > cSadEmotions ? 'happy' : 'sad';

  if (pDominating !== cDominating) {
    verdict.hasProblem = true;
    if (!verdict.type.includes('mismatch')) {
      verdict.type.push('mismatch');
    }
    verdict.msg.push(`You are assuming that your child lately is ${pDominating} but in reality he/she is ${cDominating}`)
  }

  return verdict;
}

const sumArray = (a) => a.reduce((acc, current) => acc + current, 0);
