import BasicLogin from '../Components/BasicLogin';
import BasicRegister from '../Components/BasicRegister';
import LoginWithCTA from '../Components/LoginWithCTA';
import SignupWithTestimonial from '../Components/SignupWithTestimonial';

const authComponents = [
  {
    name: 'Basic Login',
    component: <BasicLogin />,
    hasDarkMode: true
  },
  {
    name: 'Basic Register',
    component: <BasicRegister />,
    hasDarkMode: true
  },
  {
    name: 'Login With CTA',
    component: <LoginWithCTA />,
    hasDarkMode: true
  },
  {
    name: 'Signup with Testimonial',
    component: <SignupWithTestimonial />,
    hasDarkMode: true
  }
];

export default authComponents;
