function loginCheck() {
    var login = document.forms["login"]["lg"].value;
    var password = document.forms["login"]["pw"].value;

    if (login != 'admin' && password != 'meow') {
        alert('неверные логин и пароль');
        return false;
      }

    if (login == 'admin' && password === 'meow') {
      alert('вход выполнен успешно');
      return false;
    }

    else if (login != 'admin') {
        alert('неверный логин');
        return false;
    }

    else if (password != 'meow') {
        alert('неверный пароль');
        return false;
    }

    else {
        alert('ошибка');
        return false;
    }
  }
