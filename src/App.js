import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import Recommends from './components/recommends/Recommends';
import BackgroundGlass from './screens/ForthScreen';
import MyServicesPreview from './screens/FifthScreen';
import MyServices from './screens/FifthScreen';
import Works from './components/Works/Works';
import ThirdScreen from './screens/ThirdScreen';
import SixthScreen from './screens/SixthScreen';
import ByMe from './components/ByMe/ByMe';
import NavBarNew from './components/CourseNav/NavBarNew';

function App() {
  return <>
  <NavBarNew/>
<FirstScreen/>
<SecondScreen/>
<AboutMe/>
<Works/>

<Recommends/>
<ThirdScreen/>
<BackgroundGlass/>

<SixthScreen/>
<ByMe/>
  </>
}

export default App;
