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
  // Object.entries(childData).map(([emotion, dayData]) => {

  // });



  return verdict;
}
