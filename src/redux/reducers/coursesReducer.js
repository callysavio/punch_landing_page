import { SET_CATEGORY } from '../actions';

const initialState = {
  category: 'IT & Development',
  courses: {
    'IT & Development': [
      'Python Developer',
      'Shopify Developer',
      'MERN Stack Developer',
      'Full Stack Developer',
      'Data Scientist',
      'Front End Developer',
      'Backend Developer',
      'DevOps Engineer',
      'Mobile Developer',
      'Software Engineer',
      'Systems Architect',
    ],
    'Design & Creative': [
      'Graphic Designer',
      'UI/UX Designer',
      'Motion Graphics Artist',
      'Creative Director',
      'Illustrator',
      'Web Designer',
      'Art Director',
      'Visual Designer',
      'Animation Designer',
      'Brand Designer',
      'Interaction Designer',
    ],
  },
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default coursesReducer;
