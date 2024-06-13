export const TOGGLE_STEP = 'TOGGLE_STEP';

export const toggleStep = (id) => ({
  type: TOGGLE_STEP,
  payload: id,
});
