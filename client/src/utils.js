export const createAction = (type, baseAction) => {
  return {
    [`${baseAction}`]: `${type}/${baseAction}`,
    [`${baseAction}_REQUEST`]: `${type}/${baseAction}_REQUEST`,
    [`${baseAction}_SUCCESS`]: `${type}/${baseAction}_SUCCESS`,
    [`${baseAction}_FAILURE`]: `${type}/${baseAction}_FAILURE`
  };
};
