function checkInputs(fields, inputsArray, errors, formValidity) {
  for (let i = 0; i < inputsArray.length; i++) {
    if (
      !fields[inputsArray[i]] ||
      typeof fields[inputsArray[i]] === undefined ||
      fields[inputsArray[i]] === ""
    ) {
      formValidity = false;
      errors[inputsArray[i]] = "Vérifiez les données saisies";
    }
  }

  if (
    fields["firstname"] !== undefined &&
    !fields["firstname"].match(
      /^([a-zA-Z\u0080-\u024F]+(?: |-| |'))*[a-zA-Z\u0080-\u024F]*$/
    )
  ) {
    formValidity = false;
    errors["firstname"] = "Vérifiez les données saisies";
  }
  if (
    fields["lastname"] !== undefined &&
    !fields["lastname"].match(
      /^([a-zA-Z\u0080-\u024F]+(?: |-| |'))*[a-zA-Z\u0080-\u024F]*$/
    )
  ) {
    formValidity = false;
    errors["lastname"] = "Vérifiez les données saisies";
  }
  if (
    fields["email"] !== undefined &&
    !fields["email"].match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    formValidity = false;
    errors["email"] = "Votre email doit être valide";
  }
  if (
    fields["password"] !== undefined &&
    !fields["password"].match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,50})/)
  ) {
    formValidity = false;
    errors["password"] =
      "Le mot de passe doit être d'au moins 8 caractères, comporter une majuscule, une minuscule et un chiffre.";
  }
}

export default checkInputs;
