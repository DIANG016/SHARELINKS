import { useState, useContext, useRef } from "react";
import { sendImageService } from "../services/index";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import "./editImage.css";

export const EditImage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token, user } = useContext(AuthContext);

  const [logedUser, setLogedUser] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const newAvatarRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const file = newAvatarRef.current.files[0];
      setLoading(true);

      setPhoto(null);

      const formData = new FormData();
      formData.append("photo", file);

     await sendImageService({ token, id, formData });


      setLogedUser({
        ...logedUser,
        photo,
      });

      navigate(`/user/${id}`);
      toast.success("¡Foto cambiada correctamente!");
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="tituloEditImagen">Editar foto</h2>
      <form className="editImagen" onSubmit={handleSubmit}>
        <fieldset className="editImagenFiel">
          <label htmlFor="image">
            {" "}
          </label>
          <div>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              ref={newAvatarRef}
              onChange={(e) => {
                const file = newAvatarRef.current.files[0];

                setPhoto(URL.createObjectURL(file));
              }}
            />
          </div>
          {photo ? (
            <figure>
              <img
                src={`${process.env.REACT_APP_API}/uploads/${user.photo}`}
                style={{ width: "100px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
        </fieldset>
        <div  className="buttonCon buttonConEditImagen">
          <button className="buttonBot">Guardar cambios</button>
        </div>
        {error ? <p className="error">{error}</p> : null}
        {loading ? (
          <p>
            <Spinner />
          </p>
        ) : null}
      </form>
    </>
  );
};