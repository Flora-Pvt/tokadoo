import { useState, useRef } from "react"
import { Link } from "react-router-dom";

import usersService from "../services/usersService"

function Signup() {
  const [fields, setFields] = useState({})
  const [errors, setErrors] = useState({})
  const [avatar, setAvatar]: any = useState()
  const fileInput: any = useRef(null)
  const fileOutput: any = useRef(null)

  const handleChange = (field, event) => {
    fields[field] = event.target.value;
    setFields(fields[field]);
    console.log(fields)
  };

  const handleAddImage = () => {
    fileInput.current.click();
  };

  const handleImageLoaded = (event) => {
    const file: any = event.target.files[0]
    fileOutput.src = URL.createObjectURL(file);
    setAvatar({ file });
  };

  const handleValidation = () => {
    setFields({ fields })
    let errors = {};
    let formIsValid = true;

    if (!avatar || avatar === undefined) {
      formIsValid = false;
      errors["avatar"] = "Vérifiez l'image ajoutée";
    }
    if (
      !fields["firstName"] ||
      typeof fields["firstName"] === undefined ||
      !fields["firstName"].match(
        /^([a-zA-Z\u0080-\u024F]+(?: |-| |'))*[a-zA-Z\u0080-\u024F]*$/
      )
    ) {
      formIsValid = false;
      errors["firstName"] = "Vérifiez les données saisies";
    }
    if (
      !fields["lastName"] ||
      typeof fields["lastName"] === undefined ||
      !fields["lastName"].match(
        /^([a-zA-Z\u0080-\u024F]+(?: |-| |'))*[a-zA-Z\u0080-\u024F]*$/
      )
    ) {
      formIsValid = false;
      errors["lastName"] = "Vérifiez les données saisies";
    }
    if (
      !fields["officePosition"] ||
      typeof fields["officePosition"] === undefined
    ) {
      formIsValid = false;
      errors["officePosition"] = "Vérifiez les données saisies";
    }
    if (
      !fields["email"] ||
      typeof fields["email"] === undefined ||
      !fields["email"].match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      formIsValid = false;
      errors["email"] = "Votre email doit être valide";
    }
    if (
      !fields["password"] ||
      typeof fields["password"] === undefined ||
      !fields["password"].match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,50})/)
    ) {
      formIsValid = false;
      errors["password"] =
        "Le mot de passe doit être d'au moins 8 caractères, comporter une majuscule, une minuscule et un chiffre.";
    }

    setErrors({ errors });
    return formIsValid;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      setErrors("");

      const newUserData = new FormData();
      newUserData.append("image", avatar);
      newUserData.append(
        "firstName",
        JSON.stringify(fields["firstName"])
      );
      newUserData.append(
        "lastName",
        JSON.stringify(fields["lastName"])
      );
      newUserData.append(
        "officePosition",
        JSON.stringify(fields["officePosition"])
      );
      newUserData.append("email", JSON.stringify(fields["email"]));
      newUserData.append(
        "password",
        JSON.stringify(fields["password"])
      );

      usersService.signupUser(newUserData);
    }
  };

  return (
    <main className="wrapper">
      <h1 >Inscription</h1>
      <form
        encType="multipart/form-data"
        onSubmit={(e) => handleSubmit(e)}
        noValidate      >

        <input
          ref={fileInput}
          name="avatar"
          type="file"
          hidden
          accept="image/*"
          onChange={(e: any) => handleImageLoaded(e)}
        />
        {fileOutput.src !== undefined ? (
          <img
            ref={fileOutput}
            alt="avatar miniature"
          />
        ) : (
            <img
              className="form__avatar"
              ref={fileOutput}
              src="./images/icons/gift.svg"
              alt="cadeau"
            />
          )}
        <button
          title="Ajouter votre image d'avatar"
          onClick={() => handleAddImage()}          >
        </button>
        <span>{errors["avatar"]}</span>

        <label htmlFor="firstName">Prénom</label>
        <input
          required
          id="firstName"
          name="firstName"
          type="text"
          value={fields["firstName"]}
          onChange={(e) => handleChange(fields["firstName"], e)}
        />
        <span>
          {errors["firstName"]}
        </span>

        <label htmlFor="lastName">Nom</label>
        <input
          required
          id="lastName"
          name="lastName"
          type="text"
          value={fields["lastName"]}
          onChange={(e) => handleChange(fields["lastName"], e)}
        />
        <span>
          {errors["lastName"]}
        </span>

        <label htmlFor="email">Mail</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={fields["email"]}
          onChange={(e) => handleChange(fields["email"], e)}
        />
        <span>{errors["email"]}</span>

        <label htmlFor="password">Mot de passe</label>
        <input
          required
          id="password"
          name="password"
          type="password"
          value={fields["password"]}
          onChange={(e) => handleChange(fields["password"], e)}
        />
        <span>
          {errors["password"]}
        </span>

        <label htmlFor="adressLineOne">Adresse ligne 1</label>
        <input
          required
          id="adressLineOne"
          name="adressLineOne"
          type="text"
          value={fields["adressLineOne"]}
          onChange={(e) => handleChange(fields["adressLineOne"], e)}
        />
        <span>
          {errors["adressLineOne"]}
        </span>

        <label htmlFor="adressLineTwo">Adresse ligne 2</label>
        <input
          id="adressLineTwo"
          name="adressLineTwo"
          type="text"
          value={fields["adressLineTwo"]}
          onChange={(e) => handleChange(fields["adressLineTwo"], e)}
        />
        <span>
          {errors["adressLineTwo"]}
        </span>

        <label htmlFor="City">Ville</label>
        <input
          required
          id="City"
          name="City"
          type="text"
          value={fields["City"]}
          onChange={(e) => handleChange(fields["City"], e)}
        />
        <span>
          {errors["city"]}
        </span>

        <label htmlFor="province">Département</label>
        <input
          required
          id="province"
          name="province"
          type="text"
          value={fields["province"]}
          onChange={(e) => handleChange(fields["province"], e)}
        />
        <span>
          {errors["province"]}
        </span>

        <label htmlFor="zip">Code postal</label>
        <input
          required
          id="zip"
          name="zip"
          type="text"
          value={fields["zip"]}
          onChange={(e) => handleChange(fields["zip"], e)}
        />
        <span>
          {errors["zip"]}
        </span>

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Créer un compte
        </button>
        <p>
          Vous avez déjà un compte ? Connectez vous{" "}
          <Link to="/login">
            ici
          </Link>
        </p>
      </form>
    </main>
  );

}

export default Signup;
