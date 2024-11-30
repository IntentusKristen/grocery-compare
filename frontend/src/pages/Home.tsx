import Navbar from '../components/Navbar';
import WeeklyDeal from '../components/WeeklyDeal';
import '../style/Home.css';

// Example of a basic deal item
const deals = [
  {
    id: 1,
    name: 'Fresh Apples - 2 for $5',
    price: 'Fruits',
    image: 'https://via.placeholder.com/150', // placeholder image
  },
  {
    id: 2,
    name: 'Organic Milk - $3.99',
    price: 'Dairy',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Whole Wheat Bread - $1.99',
    price: 'Bakery',
    image: 'https://via.placeholder.com/150',
  },
  // Add more deals here
];

const Home: React.FC = () => {
  return (
    <>
      <Navbar/>
      <div className="App">
        <header className="App-header">
          <h1>Weekly Grocery Deals</h1>
          <p>Compare prices and save on your weekly grocery shopping!</p>
        </header>

        <main>
          <section className="deals-section">
            <WeeklyDeal storeName='T&T' items={deals}></WeeklyDeal>
          </section>

          <section className="cta-section">
            <h2>Don't miss out on this week's best deals!</h2>
            <p>Sign up for weekly updates and never miss a great deal again.</p>
            <button className="cta-btn">Sign Up Now</button>
          </section>
        </main>

        <footer className="App-footer">
          <p>&copy; 2024 Grocery Compare App. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
