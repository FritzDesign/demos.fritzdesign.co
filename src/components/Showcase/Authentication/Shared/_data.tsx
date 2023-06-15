import BasicLogin from '../Components/BasicLogin';
import BasicRegister from '../Components/BasicRegister';
import LoginWithCTA from '../Components/LoginWithCTA';
import SignupWithTestimonial from '../Components/SignupWithTestimonial';

const authComponents = [
  {
    name: 'Basic Login',
    components: [<BasicLogin />],
    hasDarkMode: true
  },
  {
    name: 'Basic Register',
    components: [<BasicRegister />],
    hasDarkMode: true
  },
  {
    name: 'Login With CTA',
    components: [<LoginWithCTA />],
    hasDarkMode: true
  },
  {
    name: 'Signup with Testimonial',
    components: [<SignupWithTestimonial />],
    hasDarkMode: true
  }
];

export default authComponents;
