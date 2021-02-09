function checkValidity(fields, fieldsArray, errors, formValidity) {
  for (let i = 0; i < fieldsArray.length; i++) {
    if (
      !fields[fieldsArray[i]] ||
      typeof fields[fieldsArray[i]] === undefined ||
      fields[fieldsArray[i]] === ""
    ) {
      formValidity = false;
      errors[fieldsArray[i]] = "Vérifiez les données saisies";
    }
  }
}

export default checkValidity;