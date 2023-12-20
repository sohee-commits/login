function loginCheck() {
  var login = document.forms[`login`][`lg`].value;
  var password = document.forms[`login`][`pw`].value;

  if (login == `admin` && password === `meow`) {
    alert(`succesfull login`);
    return false;
  } else if (login != `admin` && password != `meow`) {
    alert(`incorrect login and password`);
    return false;
  } else if (login != `admin`) {
    alert(`incorrect login`);
    return false;
  } else if (password != `meow`) {
    alert(`incorrect password`);
    return false;
  } else {
    alert(`ошибка`);
    return false;
  }
}
