import { useRef } from "react";
import { Link } from "react-router-dom"
import { Formik, Form } from "formik";
import { InputField } from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

import { gsap } from "gsap";
import GiftsBGAnimation from "../components/GiftsBGAnimation";

function Login(): JSX.Element {
  const validationMessage = useRef(null);
  gsap.set(validationMessage.current, { yPercent: 0 });

  const [, login] = useLoginMutation();

  return (
    <main className="wrapper">

      <GiftsBGAnimation />

      <Formik
        initialValues={{ email: "", password: "" }}

        onSubmit={async (values, { setErrors }) => {
          const response = await login(values);

          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            
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
        {() => (
          <Form className="form">
            <InputField name="email" placeholder="email" />

            <InputField
              name="password"
              placeholder="password"
              type="password"
            />

            <button
              type="submit"
              className="form__button"
            >
              register
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

export default Login;
