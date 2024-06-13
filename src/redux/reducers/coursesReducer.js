import { SET_CATEGORY } from '../actions/coursesActions';

const initialState = {
  category: 'IT & Development',
  courses: {
    'IT & Development': [
      'Python Developer', 'Shopify Developer', 'MERN Stack Developer', 'Full Stack Developer',
      'Data Scientist', 'Front End Developer', 'Backend Developer', 'DevOps Engineer',
      'AI/ML Engineer', 'Mobile Developer', 'Cyber Security Specialist',
    ],
    'Design & Creative': [
      'Graphic Designer', 'UI/UX Designer', 'Product Designer', 'Creative Director',
      'Illustrator', 'Animator', '3D Artist', 'Brand Strategist',
      'Art Director', 'Web Designer', 'Video Editor',
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
