/* import { TextField } from '@mui/material'; */
import '../Css/CssPages/Login.css';
/* import Teste from '../images/Teste.svg'; */
import Profile from '../images/Profile.svg';
import Password from '../images/Password.svg';
import Logo from '../images/logo-azul.svg';

function Login() {
  return (
    <section>
      <img src={ Logo } alt="" className="test" />
      <h1>Login</h1>
      <h2>Welcome back we missed you</h2>
      <form>

        <label className="input-group">
          <img src={ Profile } alt="" className="img-form" />
          <input
            type="text"
            placeholder="info@site.com"
            className="input input-bordered"
          />
        </label>

        <label className="input-group">
          <img src={ Password } alt="" className="img-form" />
          <input
            type="text"
            placeholder="******"
            className="input input-bordered"
          />
        </label>

        <button className="btn btn-outline">Sing in</button>
      </form>
    </section>
  );
}

export default Login;
