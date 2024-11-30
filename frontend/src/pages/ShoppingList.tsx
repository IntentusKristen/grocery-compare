import Navbar from '../components/Navbar';
import '../style/ShoppingList.css';

type ShoppingList = {

};

const ShoppingList: React.FC = () => {
  return (
    <>
      <Navbar/>
      <div className="weekly-deal">
        <h2>{"Shopping List Page"}</h2>
      </div>
    </>
  );
};

export default ShoppingList;
