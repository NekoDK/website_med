import logo from './logo.svg';
import './App.css';
import Banner from "./baner.js";


function App() {
  return (
    <div>
      <Banner
          title="Добро пожаловать!"
          content="Узнайте больше о наших продуктах и услугах."
          button="Узнать больше"
          illustration={logo}
          type="welcome"
          separator={true}
      />
    </div>
  );
}

export default App;
