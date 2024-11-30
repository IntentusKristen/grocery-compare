import Navbar from '../components/Navbar';
import '../style/Settings.css';

type Settings = {

};

const Settings: React.FC<Settings> = () => {
  return (
    <>
      <Navbar />
      <div className="settings-header">
        <h2>{"Settings"}<img 
          src="https://via.placeholder.com/24" /* Replace with the URL or local path to your gear icon */
          alt="Gear Icon" 
          className="gear-icon" 
        /></h2>
      </div>
    </>
  );
};

export default Settings; 