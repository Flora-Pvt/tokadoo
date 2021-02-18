import { useRef } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

import { gsap } from "gsap";
import GiftsBGAnimation from "../components/GiftsBGAnimation";

function Signup(): JSX.Element {
  const [, register] = useRegisterMutation();

  const validationMessage = useRef(null);
  gsap.set(validationMessage.current, { yPercent: 0 });

  return (
    <main className="wrapper">
      <GiftsBGAnimation />

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          password: "",
          avatar: "",
          email: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register(values);

          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            let tl = gsap.timeline({ paused: true });
            tl.from(validationMessage.current, { yPercent: 0 });
            tl.to(validationMessage.current, { yPercent: -100 });
            tl.play();

            const relocation = () => {
              window.location.href = "/lists";
            };
            setTimeout(relocation, 3000);
          }
        }}
      >
        {(form) => (
          <Form className="form">
            <InputField
              name="avatar"
              type="file"
              hidden
              accept="image/*"
              onChange={(event: React.ChangeEvent<any> ) =>
                form.setFieldValue("avatar", event.target.files[0])
              }
              className="form__input"
            />

            <InputField
              name="firstname"
              type="text"
              placeholder="Prénom"
              className="form__input"
            />

            <InputField
              name="lastname"
              type="text"
              placeholder="Nom"
              className="form__input"
            />

            <InputField name="email" placeholder="email" type="email" />

            <InputField
              name="password"
              placeholder="password"
              type="password"
            />

            <button type="submit" className="form__button">
              Créer ton compte
            </button>
          </Form>
        )}
      </Formik>

      <p>
        Tu as déjà un compte ? Connecte toi{" "}
        <Link to="/login" className="form__link">
          ici
        </Link>
      </p>
      <section className="form__verso" ref={validationMessage}>
        <h2 className="form__verso__title">Parfait !</h2>
        <p>Tu peux maintenant créer ta première liste !</p>
      </section>
    </main>
  );
}

export default Signup;
