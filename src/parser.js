export { Parser };

function Parser () {

  return Object.freeze({
    actor,
    action,
    object
  });

  function actor (state) {
    return state.split('.')[0];
  }

  function action (state) {
    return getSubject(state)
      .split('_')[0];
  }

  function object (state) {
    return getSubject(state)
      .split('_')[1];
  }
}
