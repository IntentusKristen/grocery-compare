import '../style/Login.css';

type Item = {
    id: number;
    name: string;
    price: string;
    image: string;
  };
  
  type Login = {
    
  };
  
  const Login: React.FC<Login> = () => {
    return (
      <div className="weekly-deal">
        <h2>{"Login Page"}</h2>
        {/* <div className="items-container">
          {items.map((item) => (
            <div key={item.id} className="deal-item">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          ))}
        </div> */}
      </div>
    );
  };
  
  export default Login;
  