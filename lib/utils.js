import _ from 'underscore';

export const contains = (xs, item) => {
  return _.contains(xs, item);
};

export const argmax = (items, lambda) => {
  var best = items[0];
  var bestScore = lambda(best);
  items.map(item => {
    var itemScore = lambda(item);
    if (itemScore > bestScore) {
      [best, bestScore] = [item, itemScore];
    }
  });
  return best;
};

export const argmin = (items, lambda) => {
  return argmax(items, item => -1 * lambda(item));
};