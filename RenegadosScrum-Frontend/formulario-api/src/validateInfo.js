export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Nome de usuário não informado';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'E-mail não informado';
  }
  if (!values.password) {
    errors.password = 'Senha não informada';
  } else if (values.password.length < 6) {
    errors.password = 'Senha menor que 6 caracteres';
  }

  if (!values.password2) {
    errors.password2 = 'Senha obrigatória';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Senhas não condizentes';
  }
  return errors;
}
