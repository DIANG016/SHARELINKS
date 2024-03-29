import { useContext, useState } from "react";
import { logInUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import image from "../imageHome/image.png";
import image2 from "../imageHome/image2.png";
import image1 from "../imageHome/image1.png";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await logInUserService({ email, password });

      login(data);
      navigate("/");
      toast.success("¡Te has logueado correctamente!");
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };
  return (
    <>
      <section className="login">
        <div className="loginBloc">
          <h2 className="titleLogin">ShareLink</h2>
          <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email"> </label>
            <input
              className="inputLogin"
              type="email"
              name="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo Electrónico"
            />

            <label htmlFor="password"> </label>
            <input
              className="inputLogin"
              type="password"
              name="password"
              id="password"
              value={password}
              required
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="divLoginButton">
              <button className="buttonBot">Iniciar sesión</button>
            </div>
          </form>
          <article>
            <p className="linkRegistro">
              ¿No tienes cuenta?{" "}
              <Link className="linkRegistro1" to={"/register"}>
                Regístrate
              </Link>{" "}
            </p>
          </article>
        </div>
        <div className="conImagenLogin">
          <figure className="figLogin">
            <img className="movimiento" src={image} alt="teléfono" />
          </figure>
          <figure className="figLogin">
            <img className="movimiento1" src={image2} alt="teléfono" />
          </figure>
          <figure className="figLogin">
            <img className="movimiento2" src={image1} alt="teléfono" />
          </figure>
        </div>
      </section>
      <div>{error ? <p className="error">{error}</p> : null}</div>
    </>
  );
};
