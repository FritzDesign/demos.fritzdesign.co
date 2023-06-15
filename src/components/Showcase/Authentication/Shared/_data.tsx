import BasicLogin from '../Components/BasicLogin';
import BasicRegister from '../Components/BasicRegister';

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
  }
];

export default authComponents;
