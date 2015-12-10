const turns = 50;
const pieces = ['O', 'I', 'S', 'Z', 'L', 'J', 'T'];

const drawOne = bag => {
  let piece = bag[Math.round(Math.random() * (bag.length - 1))]
  let index = bag.indexOf(piece);
  let remaining = [
    ...bag.slice(0, index),
    ...bag.slice(index + 1)
  ];
  return { piece, remaining };
}

const draw = (turns, bag = [], hand = '') => {
  if (turns > 0) {
    let { piece, remaining } = drawOne(bag.length ? bag : pieces);
    return draw(turns - 1, remaining, hand + piece);
  }

  return hand;
}

const createBorder = (length, character = '-') => {
  const helper = length => { return length ? character + helper(length - 1) : '' };
  return helper(length);
}

const border = createBorder(turns, '=');

const log = message => process.stdout.write(message + '\n');

log(border);
log(draw(turns));
log(border);
