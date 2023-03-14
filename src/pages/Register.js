import { useState } from "react";
import { registerUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import image from "../imageHome/image.png";
import image2 from "../imageHome/image2.png";
import image1 from "../imageHome/image1.png";
import "./register.css";

export const Register = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass1, setPass1] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pass !== pass1) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await registerUserService({ nombre, email, password: pass });
      navigate("/login");
      toast.success("¡Te has registrado satisfactoriamente!");
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <section className="sectionRegister">
      <div>
        <h1 className="tituloRegistro">Registro</h1>
        <form className="formRegistro" onSubmit={handleSubmit}>
          <label>
            <input
              className="inputRegister"
              type="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              name="name"
              placeholder="Nombre"
            />
          </label>
          <label htmlFor="email">
            <input
              className="inputRegister"
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
            />
          </label>
          <label htmlFor="pass">
            <input
              className="inputRegister"
              type="password"
              id="pass"
              name="pass"
              value={pass}
              required
              onChange={(e) => setPass(e.target.value)}
              placeholder="Contraseña"
            />
          </label>
          <label htmlFor="pass1">
            <input
              className="inputRegister"
              type="password"
              id="pass1"
              name="pass1"
              value={pass1}
              required
              onChange={(e) => setPass1(e.target.value)}
              placeholder="Repite la contraseña"
            />
          </label>
          <div className="registerDiv">
            <button className="buttonBot registerBot">Regístrate</button>
          </div>
          {error ? <p className="error">{error}</p> : null}
        </form>
      </div>
      <div className="conImagenRegister">
        <figure className="figRegister">
          <img className="mov" src={image} alt="teléfono" />
        </figure>
        <figure className="figRegister">
          <img className="mov1" src={image2} alt="teléfono" />
        </figure>
        <figure className="figRegister">
          <img className="mov2" src={image1} alt="teléfono" />
        </figure>
      </div>
    </section>
  );
};
