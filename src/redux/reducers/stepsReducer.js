import { TOGGLE_STEP } from '../actions/stepsActions';

const initialState = {
  steps: [
    { id: 1, title: "Step 1: Resume Screening", description: "Candidates are assessed through skill-based questions in a virtual setting. Allowing you to gauge personality and cultural fit.", active: false },
    { id: 2, title: "Step 2: Video Interview", description: "Candidates are assessed through skill-based questions in a virtual setting. Allowing you to gauge personality and cultural fit.", active: false },
    { id: 3, title: "Step 3: Technical Evaluation", description: "Candidates are assessed through skill-based questions in a virtual setting. Allowing you to gauge personality and cultural fit.", active: false },
    { id: 4, title: "Step 4: Application Review", description: "Candidates are assessed through skill-based questions in a virtual setting. Allowing you to gauge personality and cultural fit.", active: false },
    { id: 5, title: "Step 5: Let's get to work", description: "Candidates are assessed through skill-based questions in a virtual setting. Allowing you to gauge personality and cultural fit.", active: false },
  ],
};

const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STEP:
      return {
        ...state,
        steps: state.steps.map(step =>
          step.id === action.payload
            ? { ...step, active: !step.active }
            : step
        ),
      };
    default:
      return state;
  }
};

export default stepsReducer;
