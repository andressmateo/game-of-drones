export const createAction = (type, baseAction) => {
  return {
    [`${baseAction}`]: `${type}/${baseAction}`,
    [`${baseAction}_REQUEST`]: `${type}/${baseAction}_REQUEST`,
    [`${baseAction}_SUCCESS`]: `${type}/${baseAction}_SUCCESS`,
    [`${baseAction}_FAILURE`]: `${type}/${baseAction}_FAILURE`
  };
};

export const statusTypes = {
  UNLOAD_STATE: 'notLoaded',
  INIT_STATE: 'initState',
  SUCCEED_STATE: 'succeedState',
  FAILED_STATE: 'failedState'
};
