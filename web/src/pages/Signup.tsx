import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "urql";

import checkInputs from "../utils/checkInputs";

const REGISTER_MUT = `
mutation Register(
  $firstname: String!
  $lastname: String!
  $password: String!
  $avatar: String!
  $email: String!
  $adressLineOne: String!
  $adressLineTwo: String!
  $city: String!
  $province: String!
  $zip: String!
) {
  register(
    options: {
      firstname: $firstname
      lastname: $lastname
      password: $password
      avatar: $avatar
      email: $email
      adressLineOne: $adressLineOne
      adressLineTwo: $adressLineTwo
      city: $city
      province: $province
      zip: $zip
    }
  ) {
    errors {
      field
      message
    }
    user {
      id
      adressLineOne
    }
  }
}
`;

function Signup() {
  const [fields, setFields]: any = useState({});
  const [errors, setErrors]: any = useState({});
  const [avatar, setAvatar]: any = useState("");
  const fileInput: any = useRef({});
  const [fileOutput, setFileOutput]: any = useState("./images/icons/gift.svg");
  const [, register] = useMutation(REGISTER_MUT);

  const handleChange = (field, event) => {
    fields[field] = event.target.value;
    setFields(fields);
  };

  const handleAddImage = () => {
    fileInput.current.click();
  };

  const handleImageLoaded = (event) => {
    const file: any = event.target.files[0];
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
      [
        "firstname",
        "lastname",
        "email",
        "password",
        "adressLineOne",
        "adressLineTwo",
        "city",
        "province",
        "zip",
      ],
      errors,
      formValidity
    );

    setErrors(errors);
    return formValidity;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleValidation()) {
      setErrors("");

      // temp avatar handling
      fields["avatar"] = fileOutput;
      setFields(fields);

      const newUserData = fields;
      register(newUserData);
    }
  };

  return (
    <main className="wrapper">
      <h1>Inscription</h1>
      <form
        encType="multipart/form-data"
        onSubmit={(e) => handleSubmit(e)}
        noValidate
      >
        <input
          ref={fileInput}
          name="avatar"
          type="file"
          hidden
          accept="image/*"
          onChange={(e: any) => handleImageLoaded(e)}
        />
        <img className="form__avatar" src={fileOutput} alt="avatar miniture" />
        <button
          title="Ajouter votre image d'avatar"
          onClick={() => handleAddImage()}
        ></button>
        <span>{errors["avatar"]}</span>

        <label htmlFor="firstname">Prénom</label>
        <input
          required
          id="firstname"
          name="firstname"
          type="text"
          value={fields["firstname"]}
          onChange={(e) => handleChange("firstname", e)}
        />
        <span>{errors["firstname"]}</span>

        <label htmlFor="lastname">Nom</label>
        <input
          required
          id="lastname"
          name="lastname"
          type="text"
          value={fields["lastname"]}
          onChange={(e) => handleChange("lastname", e)}
        />
        <span>{errors["lastname"]}</span>

        <label htmlFor="email">Mail</label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={fields["email"]}
          onChange={(e) => handleChange("email", e)}
        />
        <span>{errors["email"]}</span>

        <label htmlFor="password">Mot de passe</label>
        <input
          required
          id="password"
          name="password"
          type="password"
          value={fields["password"]}
          onChange={(e) => handleChange("password", e)}
        />
        <span>{errors["password"]}</span>

        <label htmlFor="adressLineOne">Adresse ligne 1</label>
        <input
          required
          id="adressLineOne"
          name="adressLineOne"
          type="text"
          value={fields["adressLineOne"]}
          onChange={(e) => handleChange("adressLineOne", e)}
        />
        <span>{errors["adressLineOne"]}</span>

        <label htmlFor="adressLineTwo">Adresse ligne 2</label>
        <input
          id="adressLineTwo"
          name="adressLineTwo"
          type="text"
          value={fields["adressLineTwo"]}
          onChange={(e) => handleChange("adressLineTwo", e)}
        />
        <span>{errors["adressLineTwo"]}</span>

        <label htmlFor="city">Ville</label>
        <input
          required
          id="city"
          name="city"
          type="text"
          value={fields["city"]}
          onChange={(e) => handleChange("city", e)}
        />
        <span>{errors["city"]}</span>

        <label htmlFor="province">Province/Département</label>
        <input
          required
          id="province"
          name="province"
          type="text"
          value={fields["province"]}
          onChange={(e) => handleChange("province", e)}
        />
        <span>{errors["province"]}</span>

        <label htmlFor="zip">Code postal</label>
        <input
          required
          id="zip"
          name="zip"
          type="text"
          value={fields["zip"]}
          onChange={(e) => handleChange("zip", e)}
        />
        <span>{errors["zip"]}</span>

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Créer un compte
        </button>
        <p>
          Vous avez déjà un compte ? Connectez vous <Link to="/login">ici</Link>
        </p>
      </form>
    </main>
  );
}

export default Signup;
