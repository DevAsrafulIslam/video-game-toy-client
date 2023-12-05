import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    try {
      const { user } = await signIn(email, password);

      const res = await fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: { "Content-Type": "application" },
        body: JSON.stringify({ email: user.email }),
      });
      const jwt = await res.json();
      // Warning: LocalStorage is  not the best (second best place) to store access token
      localStorage.setItem("access_token", jwt.token);
      navigate(from, { replace: true });
      console.log({ jwt });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="hero min-h-screen rounded-md  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body ">
            <h1 className="text-5xl font-bold text-center">Login!</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-4">
            New to Car Doctor{" "}
            <Link className="text-[#FF3811] font-bolt" to="/signup">
              Sign Up
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
