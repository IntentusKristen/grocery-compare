import Navbar from '../components/Navbar';
import '../style/Settings.css';

type Settings = {

};

const Settings: React.FC<Settings> = () => {
  return (
    <>
      <Navbar />
      <div className="weekly-deal">
        <h2>{"Settings Page"}</h2>
      </div>
    </>
  );
};

export default Settings;
