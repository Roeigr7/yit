import React, { useState } from 'react';
import landscape from '../assets/landscape.jpg';
import './Article.css';
const Article = () => {
  const [catName, setCatName] = useState('אוכל');
  const [catColor, setCatColor] = useState('red');
  const categoryNameHandler = (e) => {
    setCatName(e.target.value);
  };
  return (
    <div className='pageContainer'>
      <div className='articleContainer'>
        <div className='zoom-image'>
          <img className='imgArea' src={landscape} alt='article-image' />
        </div>
        <div className='content'>
          <div class='category'>
            <span style={{ backgroundColor: catColor }}>{catName}</span>
          </div>
          <h2 className='title'>סיור קולינרי בין המסעדות</h2>
          <p className='subTitle'>
            גם אני שעסוק כל השבוע מתפנה לצפות בטלוויזה רק בסופי השבוע, ונוכחתי
            שרוב תוכניות האלוייזה בכל הערוצים הן תוכניות אוכל
          </p>
          <p className='author'>שירית גל</p>
        </div>
      </div>
      <div className='formContainer'>
        <label>צבע רקע</label>
        <select
          className='dropdown'
          value={catColor}
          onChange={(e) => setCatColor(e.target.value)}
        >
          <option className={{ backgroundColor: 'red' }} value='red'>
            אדום
          </option>
          <option value='green'>ירוק</option>
          <option value='blue'>כחול</option>
          <option value='yellow'>צהוב</option>
        </select>

        <label style={{ marginTop: '10px' }}>שם קטגוריה</label>
        <input
          className='catnameInput'
          type='text'
          name='categoryName'
          onChange={categoryNameHandler}
        />
      </div>
    </div>
  );
};

export default Article;
