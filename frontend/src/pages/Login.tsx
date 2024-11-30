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
      </div>
    </>
  );
};

export default Login;
