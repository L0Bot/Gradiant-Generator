const configureStore = ({ reducer }) => {
  let state = reducer();
  const subscribers = [];
  return {
    getState: () => ({ ...state }),
    subscribe: (callback) => {
      subscribers.push(callback);
    },
    dispatch: (action) => {
      state = reducer(state, action);
      subscribers.foreach((subscriber) => {
        subscriber();
      });
    },
  };
};
