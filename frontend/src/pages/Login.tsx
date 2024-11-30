import Navbar from '../components/Navbar';
import '../style/Login.css';

type Login = {

};

const Login: React.FC<Login> = () => {
  return (
    <>
      <Navbar />
      <div className="weekly-deal">
        <h2>{"Login Page"}</h2>
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
