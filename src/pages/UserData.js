import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { UserLinks } from "../components/UserLinks";
import useUser from "../hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import Spinner from "../components/Spinner";
import "./userData.css"
import Avatar from "../components/Avatar";



export const UserData = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);
  //const navigate = useNavigate();
 
  if (loading) return <p><Spinner /></p>
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="contenedorUserData">
      <div>
      <section>
            <figure className="fotoUserData">
              {user.photo ? (
                <img
                  className="imagenUserPage"
                  src={`${process.env.REACT_APP_API}/uploads/${user.photo}`}
                  alt={user.id}
                  style={{ width: "80px" }}
                />
              ) : (
                <p className="">
                  <Avatar />
                </p>
              )}
            </figure>
        </section>
        <section className="userDataSection">
          <h2 className="userDataTitle"> {user.nombre}</h2>
          <p>
            <FaUserAlt /> {user.id}
          </p>
          <p>
            <MdMarkEmailRead /> {user.email}
          </p>
          <p>
            <BsFillCalendarCheckFill  />{" "}
            {new Date(user.created_at).toLocaleString()}{" "}
          </p>
          {user.biography ? (
            <p>
              <HiDocumentText /> {user.biography}
            </p>
          ) : null}
        </section>
        <article>
          <UserLinks id={user.id} /> 
        </article>    
      </div>
    </div>
  );
};
