import Navbar from '../components/Navbar';
import '../style/Data.css';

type Data = {

};

const Data: React.FC<Data> = () => {
  return (
    <>
      <Navbar />
      <div className="weekly-deal">
        <h2>{"Data Page"}</h2>
      </div>
    </>
  );
};

export default Data;
