import React from 'react';
import styles from './LessonSix.module.css';

const LessonSix = () => {
  return (
    <div className={styles['lesson-six-wrapper']}>
      <h1 className={styles['main-title']}>
        <p>Фрилансер по жизни</p>
      </h1>
      <div className={styles['like-it']}>
        <p>Поставь лайк всем видосам фрилансера и получи +1000 очков кармы. Поставь лайк всем видосам фрилансера и получи
          +1000 очков кармы. Поставь лайк всем видосам фрилансера и получи +1000 очков кармы.</p>
      </div>
      <h2 className={styles['css']}>
        <p>CSS. Свойство шрифта и текста</p>
      </h2>
      <div>
        <p className={styles['strong-text']}>Этот текст жирный. Этот текст жирный. Этот текст жирный.</p>
        <p className={styles['red-text']}>Этот текст красный. Этот текст красный. Этот текст красный.</p>
      </div>
      <h3 className={styles['homework-text']}>
        <p>Домашнее задание</p>
      </h3>
      <div className={styles['right-align-text']}>
        <p>Сверстай этот макет используя все свойства о которых мы говори в видео!</p>
      </div>
      <div className={styles['caps-text']}>
        <p>Сверстай этот макет используя все свойства о которых мы говори в видео!</p>
      </div>
      <div className={styles['italic-text']}>
        <p>Сверстай этот макет используя все свойства о которых мы говори в видео!</p>
      </div>
      <div className={styles['center-text']}>
        <p>Сверстай этот макет используя все свойства о которых мы говори в видео!</p>
      </div>
      <div className={styles['big-text']}>
        <p>Сверстай этот макет используя все свойства о которых мы говори в видео!</p>
      </div>
      <div className={styles['crossed-out-text']}>
        <p>Сверстай этот макет используя все свойства о которых мы говори в видео!</p>
      </div>
      <div className={styles['little-text']}>
        <p>Сверстай этот макет используя все свойства о которых мы говори в видео!</p>
      </div>
      <div className={styles['shadow-with-text']}>
        <p>Сверстай этот макет используя все свойства о которых мы говори в видео!</p>
      </div>
    </div>
  )
}

export default LessonSix;
