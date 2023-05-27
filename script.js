function loginCheck() {
    var login = document.forms["login"]["lg"].value;
    var password = document.forms["login"]["pw"].value;

    if (login != 'админ' && password != 'я главный') {
        alert('неверные логин и пароль');
        return false;
      }

    if (login == 'админ' && password === 'я главный') {
      alert('вход выполнен успешно');
      return false;
    }

    else if (login != 'админ') {
        alert('неверный логин');
        return false;
    }

    else if (password != 'я главный') {
        alert('неверный пароль');
        return false;
    }

    else {
        alert('ошибка');
        return false;
    }
  }