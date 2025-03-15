import "../style/WeeklyDeal.css";

type Item = {
  id: number;
  name: string;
  price: string;
  image: string;
};

type WeeklyDealProps = {
  storeName: string;
  items: Item[];
};

const WeeklyDeal: React.FC<WeeklyDealProps> = ({ storeName, items }) => {
  return (
    <>
      <div className="weekly-deal">
        <h2>{storeName}</h2>
        <div className="items-container">
          {items.map((item) => (
            <div key={item.id} className="deal-item">
              {/* <img src={item.image} alt={item.name} /> */}
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WeeklyDeal;
