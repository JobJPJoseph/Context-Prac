function allTheArgs(func, ...args) {
  // Your code here
  return (...moreArgs) => {
    return func(...args, ...moreArgs);
  };

  // We are rusty on Closures
  /*
  First notice sum is a function that returns the sums of numbers
  in an array using reduce.
    Note: numbers was originally decoposed than composed as one argument

  When allTheArgs() we sent in func === sum and ...args === 1,2
  We return a boundless arrow-function. So the context depends on the code inside.
  The arrow-func accepts moreArgs that is composed into an array.
  The arrow-func executes func, if you remember calls sum(), we sent two args.
  A decomposed args and a decomposed moreArgs
  Remember composed nums, the decomposed args and decomposed moreArgs become composed num in sum() / func().
  */
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
