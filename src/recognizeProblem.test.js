import { recognizeProblem } from "./recognizeProblem";

it('finds constant problem', () => {
  const verdict = recognizeProblem(
    {
      "love": [0,2,0,0,0,1,0,0,2,0,0,0,0,0,3,0,0,0,0,0,0,0,0,2,0],
      "happy": [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,4],
      "sad": [6,0,0,6,0,0,2,0,0,4,0,0,0,0,0,5,1,2,6,0,0,1,0,0,0],
      "angry": [6,0,6,6,0,1,0,0,0,0,6,0,0,4,3,0,0,2,0,0,0,0,0,0,0],
      "left-out": [0,0,0,0,0,0,2,4,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0],
      "thoughtful": [6,2,0,6,6,0,0,0,0,0,6,1,1,4,0,0,0,0,0,1,3,0,0,0,4]
    },
    {
      "love": [0,2,0,0,0,1,0,0,2,5,4,3,7,6,3,5,4,3,2,1,2,3,2,2,1],
      "happy": [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,4],
      "sad": [6,0,0,6,0,0,2,0,0,4,0,0,0,0,0,5,1,2,6,0,0,1,0,0,0],
      "angry": [6,0,6,6,0,1,0,0,0,0,6,0,0,4,3,0,0,2,0,0,0,0,0,0,0],
      "left-out": [0,0,0,0,0,0,2,4,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0],
      "thoughtful": [6,2,0,6,6,0,0,0,0,0,6,1,1,4,0,0,0,0,0,1,3,0,0,0,4]
    }
  );

  expect(verdict.hasProblem).toBe(true);
  expect(verdict.type.includes('constant')).toBe(true);
});

it('dont find constant problem if there isnt any', () => {
  const verdict = recognizeProblem(
    {
      "love": [0,2,0,0,0,1,0,0,2,0,0,0,0,0,3,0,0,0,0,0,0,0,0,2,0],
      "happy": [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,4],
      "sad": [6,0,0,6,0,0,2,0,0,4,0,0,0,0,0,5,1,2,6,0,0,1,0,0,0],
      "angry": [6,0,6,6,0,1,0,0,0,0,6,0,0,4,3,0,0,2,0,0,0,0,0,0,0],
      "left-out": [0,0,0,0,0,0,2,4,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0],
      "thoughtful": [6,2,0,6,6,0,0,0,0,0,6,1,1,4,0,0,0,0,0,1,3,0,0,0,4]
    },
    {
      "love": [0,2,0,0,0,1,0,0,2,0,0,0,7,6,3,5,4,0,2,1,2,0,2,2,1],
      "happy": [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,4],
      "sad": [6,0,0,6,0,0,2,0,0,4,0,0,0,0,0,5,1,2,6,0,0,1,0,0,0],
      "angry": [6,0,6,6,0,1,0,0,0,0,6,0,0,4,3,0,0,2,0,0,0,0,0,0,0],
      "left-out": [0,0,0,0,0,0,2,4,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0],
      "thoughtful": [6,2,0,6,6,0,0,0,0,0,6,1,1,4,0,0,0,0,0,1,3,0,0,0,4]
    }
  );

  expect(verdict.hasProblem).toBe(false);
  expect(verdict.type.includes('constant')).toBe(false);
});


it('finds mismatch problem', () => {
  const verdict = recognizeProblem(
    {
      "love": [0,2,0,0,0,1,0,0,2,0,0,0,0,0,3,0,0,0,0,0,0,0,0,2,50],
      "happy": [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,4],
      "sad": [6,0,0,6,0,0,2,0,0,4,0,0,0,0,0,5,1,2,6,0,0,1,0,0,0],
      "angry": [6,0,6,6,0,1,0,0,0,0,6,0,0,4,3,0,0,2,0,0,0,0,0,0,0],
      "left-out": [0,0,0,0,0,0,2,4,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0],
      "thoughtful": [6,2,0,6,6,0,0,0,0,0,6,1,1,4,0,0,0,0,0,1,3,0,0,0,4]
    },
    {
      "love": [0,2,0,0,0,1,0,0,2,0,0,0,7,6,3,5,4,0,2,1,2,3,2,2,1],
      "happy": [3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,4],
      "sad": [6,0,0,6,0,0,2,0,0,4,0,0,0,0,0,5,1,2,6,0,0,1,0,0,50],
      "angry": [6,0,6,6,0,1,0,0,0,0,6,0,0,4,3,0,0,2,0,0,0,0,0,0,0],
      "left-out": [0,0,0,0,0,0,2,4,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0],
      "thoughtful": [6,2,0,6,6,0,0,0,0,0,6,1,1,4,0,0,0,0,0,1,3,0,0,0,4]
    }
  );

  expect(verdict.hasProblem).toBe(true);
  expect(verdict.type.includes('mismatch')).toBe(true);
});

