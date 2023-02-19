# Pet-project "FULLSTACK BLOG using MERN"

- use **`npm run dev`** inside **BACKEND**
- use **`npm start`** inside **FRONTEND**

Ссылка на хостинг - **`Ожидается... :)`**

---

Реализован следующий функционал
Текущий **BACKEND**: 
- Создан **[CRUD](https://ru.wikipedia.org/wiki/CRUD)** **[`Express`](https://expressjs.com/)** Сервер;
- К нему подключен бесплатный кластер **[`Mongo DB`](https://www.mongodb.com/)** через **[`Mongoose`](https://mongoosejs.com/)**;
- Данные на сервере проходят через валидацию с помощью [**middleware**](https://en.wikipedia.org/wiki/Middleware) для фреймворка **[`Express`](https://expressjs.com/)** - **[`Express validator`](https://express-validator.github.io/docs/)**;
- Сервер поддерживает загрузку картинок в папку **Uploads**, используя [**middleware**](https://en.wikipedia.org/wiki/Middleware) для фреймворка **[`Express`](https://expressjs.com/)** - **[`Multer`](https://www.npmjs.com/package/multer)**;
- Личные данные хэшируются в **[`JWT`](https://jwt.io/)** токены;
- Пароль шифруется с помощью библиотеки **[`BCrypt`](https://www.npmjs.com/package/bcrypt)**.


Текущий **FRONTEND**:
- Приложение реализовано на **[`React`](https://reactjs.org/)** по принципу **[SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA)**;
- Весь код старается придерживаться принципов программирования **[DRY](https://ru.wikipedia.org/wiki/Don%E2%80%99t_repeat_yourself)** и **[SOLID](https://en.wikipedia.org/wiki/SOLID)**;
- Навигация по сайту реализована с помощью **[`React-Router-Dom`](https://reactrouter.com/en/main)**;
- Аутентификация и клиентская валидация (в том числе при создании и редактировании постов) использует библиотеку **[`React Hook Form`](https://react-hook-form.com/)**;
- Основные данные с сервера приходят на клиент через **[стейт менеджер](https://en.wikipedia.org/wiki/State_management)** **[`Redux-Toolkit`](https://redux-toolkit.js.org/)**;
- Связь между Frontend и Backend частями осуществляется реализована с помощью **[`Axios`](https://axios-http.com/docs/intro)**.

---

Ссылка на автора - **[`*ТЫК*`](https://vk.com/renais5ance)**