import React from 'react';

const LessonFour = () => {
  return (
  <>
    <div>
      <div>
        <p>Имя</p>
        <input type="text"/>
      </div>
      <div>
        <p>Пароль</p>
        <input type="password"/>
      </div>
      <div>
        <p>Телефон</p>
        <input type="number"/>
      </div>
    </div>
   <br/>
    <div>
      <p>
        <input type="radio" name="sex"/>Мужской
      </p>
      <p>
        <input type="radio" name="sex"/>Женский
      </p>
    </div>
    <br/>
    <div>
      <p>Имущество</p>
      <div>
        <p>
          <input type="checkbox" name="property"/>Велик
        </p>
        <p>
          <input type="checkbox" name="property"/>Машина
        </p>
        <p>
          <input type="checkbox" name="property"/>Квартира
        </p>
      </div>
    </div>
    <br/>
    <div>
      <p>Дополнительная информация</p>
      <textarea name="" />
    </div>
    <br/>
    <div>
      <p>Прикрепить фото</p>
      <input type="file" name="photo"/>
    </div>
    <br/>
    <div>
      <p>Любимый цвет</p>
      <select name="color">
        <option value="red">Красный</option>
        <option value="yellow">Жёлтый</option>
        <option value="blue">Голубой</option>
      </select>
    </div>
    <div>
      <p>Действия</p>
      <button>Отправить</button>
      <button>Очистить</button>
    </div>
  </>
  );
}

export default LessonFour;
