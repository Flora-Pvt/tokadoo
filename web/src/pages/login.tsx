import {
  useState,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { Link } from "react-router-dom";
import { useMutation } from "urql";
import { gsap } from "gsap";

const LOGIN_MUT = `
mutation Login(
  $email: String!
  $password: String!
) {
  login(
    options: {
      email: $email
      password: $password      
    }
  ) {
    errors {
      field
      message
    }
    user {
      id
      firstname
    }
  }
}
`;

function Login(): JSX.Element {
  const [fields, setFields]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
  const [errors, setErrors]: [{}, Dispatch<SetStateAction<{}>>] = useState({});
  const [, login] = useMutation(LOGIN_MUT);

  const validationMessage = useRef(null);
  gsap.set(validationMessage.current, { yPercent: 0 });
  
  const handleChange = (field, event) => {
    fields[field] = event.target.value;
    setFields(fields);
  };

  const handleValidation = () => {
    setFields(fields);
    let errors = {};
    let formValidity = true;
    setErrors(errors);
    return formValidity;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      setErrors("");

      login(fields);

      let tl = gsap.timeline({paused: true});
      tl.from(validationMessage.current, { yPercent: 0 });
      tl.to(validationMessage.current, { yPercent: -100 });
      tl.play()

      const relocation = () => {
        window.location.href = "/lists"
      }
      setTimeout(relocation, 3000)
    }
  };

  return (
    <main className="wrapper wrapper--form">
      <form
        encType="multipart/form-data"
        onSubmit={(e) => handleSubmit(e)}
        noValidate
        className="form"
      >
        <h2>Connecte toi</h2>

        <input
          required
          name="email"
          type="email"
          placeholder="Mail"
          value={fields["email"]}
          onChange={(e) => handleChange("email", e)}
          className="form__input"
        />
        <span className="form__error">{errors["email"]}</span>

        <input
          required
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={fields["password"]}
          onChange={(e) => handleChange("password", e)}
          className="form__input"
        />
        <span className="form__error">{errors["password"]}</span>

        <button type="submit" onClick={(e) => handleSubmit(e)} className="form__button">
          Connecte toi
        </button>
        <p>
          Tu n'as pas de compte ? Enregistre toi <Link to="/signup" className="form__link">ici</Link>
        </p>
        <section
          className="form__verso"
          ref={validationMessage}
        >
          <h2 className="form__verso__title">Parfait !</h2>
          <p>{"Ravie de te revoir :)"}</p>

        </section>
      </form>
    </main>
  );
}

export default Login;
