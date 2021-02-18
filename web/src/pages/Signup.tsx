import {
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import checkInputs from "../utils/checkInputs";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import GiftsBGAnimation from "../components/GiftsBGAnimation";

function Signup(): JSX.Element {
  const [fields, setFields]: [
    {
      firstname: string;
      lastname: string;
      password: string;
      avatar: string;
      email: string;
    },
    Dispatch<
      SetStateAction<{
        firstname: string;
        lastname: string;
        password: string;
        avatar: string;
        email: string;
      }>
    >
  ] = useState({
    firstname: "",
    lastname: "",
    password: "",
    avatar: "",
    email: "",
  });

  const [errors, setErrors]: [{}, Dispatch<SetStateAction<{}>>] = useState({});

  const [avatar, setAvatar]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("");

  const fileInput:
    | MutableRefObject<any>
    | DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      > = useRef({});

  const [fileOutput, setFileOutput]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("./images/icons/gift.svg");
  const [, register] = useRegisterMutation();

  const versoRef = useRef(null);
  gsap.set(versoRef.current, { yPercent: 0 });

  const handleChange = (field, event) => {
    console.log(fields);

    fields[field] = event.target.value;
    setFields(fields);
    console.log(fields);
  };

  const handleAddImage = () => {
    fileInput.current.click();
  };

  const handleImageLoaded = (event) => {
    const file = event.target.files[0];
    setFileOutput(URL.createObjectURL(file));
    setAvatar(event.target.files[0]);
  };

  const handleValidation = () => {
    setFields(fields);
    let errors = {};
    let formValidity = true;

    if (!avatar || avatar === undefined) {
      formValidity = false;
      errors["avatar"] = "Vérifiez l'image ajoutée";
    }

    checkInputs(
      fields,
      ["firstname", "lastname", "email", "password"],
      errors,
      formValidity
    );

    setErrors(errors);
    return formValidity;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
      setErrors("");

      // temp avatar handling
      fields["avatar"] = fileOutput;
      setFields(fields);

      const response = await register(fields);
      if (response.data?.register.errors) {
        setErrors(toErrorMap(response.data.register.errors));
      } else if (response.data?.register.user) {
        // animation
        let tl = gsap.timeline({ pause: true });
        tl.from(versoRef.current, { yPercent: 0 });
        tl.to(versoRef.current, { yPercent: -100 });
        tl.play();

        const relocation = () => {
          window.location.href = "/lists";
        };
        setTimeout(relocation, 3000);
      }
    }
  };

  return (
    <main className="wrapper">
      <GiftsBGAnimation />

      <form
        encType="multipart/form-data"
        onSubmit={(e) => handleSubmit(e)}
        noValidate
        className="form"
      >
        <h2>Inscris toi</h2>
        <input
          ref={fileInput}
          name="avatar"
          type="file"
          hidden
          accept="image/*"
          onChange={(e) => handleImageLoaded(e)}
          className="form__input"
        />
        <img className="form__avatar" src={fileOutput} alt="avatar miniture" />
        <button
          title="Ajouter votre image d'avatar"
          onClick={() => handleAddImage()}
          className="form__avatar__button"
        ></button>
        <span className="form__error">{errors["avatar"]}</span>

        <input
          required
          name="firstname"
          type="text"
          placeholder="Prénom"
          value={fields["firstname"]}
          onChange={(e) => handleChange("firstname", e)}
          className="form__input"
        />
        <span className="form__error">{errors["firstname"]}</span>

        <input
          required
          name="lastname"
          type="text"
          placeholder="Nom"
          value={fields["lastname"]}
          onChange={(e) => handleChange("lastname", e)}
          className="form__input"
        />
        <span className="form__error">{errors["lastname"]}</span>

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

        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="form__button"
        >
          Créer ton compte
        </button>
        <p>
          Tu as déjà un compte ? Connecte toi{" "}
          <Link to="/login" className="form__link">
            ici
          </Link>
        </p>
        <section className="form__verso" ref={versoRef}>
          <h2 className="form__verso__title">Parfait !</h2>
          <p>Tu peux maintenant créer ta première liste !</p>
        </section>
      </form>
    </main>
  );
}

export default Signup;
