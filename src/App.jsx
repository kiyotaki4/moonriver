import { useState } from 'react';
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(-200);
  const [selectedIndex, setSelectedIndex] = useState(0); // Индекс выбранной радиокнопки
  const imageWidth = 200; // Ширина одного изображения
  const images = [
    "lady1.jpg",
    "moonriverjewerly.png",
    "boobs.jpg",
    "lady2.jpg",
    "coffee.jpg",
  ];
  const radioInputs = [
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
  ]
  const maxScroll = 450;

  const scrollBar = (direction) => {
    setScrollPosition((prev) => {
      let newScroll = prev + direction * imageWidth;

      // Прокрутка вправо
      if (newScroll > maxScroll) {
        return -810; // Вернуться к первому изображению
      }

      // Прокрутка влево
      if (newScroll < -810) {
        return maxScroll; // Вернуться к последнему изображению
      }

      return newScroll;
    });
  };

  // Обновляем состояние радиокнопки
  const handleRadioChange = (index) => {
    setSelectedIndex(index);
    const newScrollPosition = -(index * imageWidth)+200; // Обновляем scrollPosition на основе индекса
    setScrollPosition(newScrollPosition); // Перемещаем карусель
  };

  return (
    <>
    <div className="wrapper">
    <div className="body">
    <div className="page1">
      <div className="page1white">
        <nav className="navbar"><img src="moonriver.svg" alt="" /></nav>
        <h1>HIGH JEWERLY</h1>
        <div className="row">
        <div className="line"></div>
        <span>Смотреть коллекцию</span>
        </div>
        <div className="ruen">
          <span>RU</span>
          <span id="disabled">EN</span>
        </div>
      </div>
      
      <div className="page1black">
        <nav className="navbar">
          <div className="iconnav">
            <img src="heart.svg" alt="" />
            <img src="user.svg" alt="" />
            <span>
            <img src="lock.svg" alt="" /> 1
            </span>
            
          </div>
          <div className="hamburger">
            <img src="hamburger.svg" alt="" />
          </div>
        </nav>
        <div className="text-container">
          <h2 id="name">КОЛЬЦО TRINITY, CARTIER</h2>
          <span id="description">Белое золото, бриллианты</span>
          <span id="price">498 000 ₽</span>
        </div>
      </div>
      
      <img src="cartier.png" alt="" id="cartier"/>
    </div>
    <div className="section-page">
      <div className="left-container">
        <p>Перейти в раздел</p>
        <h2>Для мужчин</h2>
        <div className="line" id="white-line"></div>

      </div>
      <div className="left-container" id="woman-container">
        <p>Перейти в раздел</p>
        <h2>Для женщин</h2>
        <div className="line" id="white-line"></div>

      </div>
      {/* <div className="right-container"></div> */}
      {/* <img src="woman.svg" alt="" />
      <img src="man.svg" alt="" /> */}
    </div>
    <div className="map-page">
      <div className="left-container">
        <div className="text-container">
        <h2>Найди <br />бутик около себя</h2>
        <p>Введите свой адрес и узнайте о самых ближайших бутиках к вам</p>
        <div className="input-row">
          <input type="text" placeholder='Введите адрес'/>
          <span><img src="arrow.svg" alt="" /></span>
        </div>
      </div>
      </div>
      <div className="map-container">
        <img src="map1.svg" alt="" id='map1'/>
        <img src="mapcursor.svg" alt="" id="cursor" />
        <img src="tverskaya.svg" alt="" id='tverskaya'/>
      </div>
    </div>
    <div className="card-container">
      <div className="sidecard">
      <div className="card">
        <img src="JOWS.png" alt="" />
        <div className="text-container">
        <h1 id="name">КОЛЬЦО JOW'S, CARTIER</h1>
        <span id="description">Белое золото, бриллианты</span>
        <span id="price">674 000 ₽</span>
        </div>
      </div>
      <div className="card">
        <img src="croix.png" alt="" />
        <div className="text-container">
        <h1 id="name">КОЛЬЦО CROIX, CARTIER</h1>
        <span id="description">Желтое, белое, розовое золото</span>
        <span id="price">432 000 ₽</span>
        </div>
      </div>
      
      </div>
      <div className="etoile">
      <div className="text-container">
        <h1 id="name">КОЛЬЕ ETOILE, HUBLOT</h1>
        <span id="description">Белое золото, бриллианты</span>
        <span id="price">539 000 ₽</span>
        </div>
      </div>
      <div className="sidecard">
      <div className="card">
        <img src="chimera.png" alt="" id="moon"/>
        <div className="text-container">
        <h1 id="name">СЕРЬГИ MOON, HUBLOT</h1>
        <span id="description">Желтое золото, сапфир</span>
        <span id="price">498 000 ₽</span>
        </div>
      </div>
      <div className="card">
        <img src="blancpain.png" alt="" id="moon"/>
        <div className="text-container">
        <h1 id="name">СЕРЬГИ WIN, BLANCPAIN</h1>
        <span id="description">Белое золото, бриллианты</span>
        <span id="price">398 000 ₽</span>
        </div>
      </div>
      </div>
    </div>
    <div className="section-block">
      <div className="test">
        <h1>Мы <br />в социальных сетях</h1>
        <div className="divasd">
          <div
            className="img-carousel"
            style={{ transform: `translateX(${scrollPosition}px)` }} // Передаем корректное значение для transform
          >
            {images.map((image, index) => (
              <img key={index} src={image} alt={`carousel-${index}`} />
            ))}
          </div>
        </div>
            <div className="bottom-container">
              <div className="spandiv">
                <span><img src="Facebook.svg" alt="" /></span>
                <span><img src="Instagram.svg" alt="" /></span>
              </div>
        <div className="slider-buttons">
          
          <span className="left" onClick={() => scrollBar(1)}><img src="left.svg" alt="" /></span>
          
          <div className="radio-container">
          {radioInputs.map((_, index) => (
            <input
              type="radio"
              name="slider"
              id={`radio-${index}`}
              key={index}
              checked={selectedIndex === index}
              onChange={() => handleRadioChange(index)}
            />
          ))}
          </div>

          <span className="right" onClick={() => scrollBar(-1)}><img src="right.svg" alt="" /></span> {/* Для сдвига вправо */}
        </div>
        
        </div>
      </div>
      </div>
      <div className="flagman">
        <img src="marine.svg" alt="" className="marine" />
        <div className="text-container">
          <h1>ТЕЛЕФОН ФЛАГМАНСКОГО МАГАЗИНА</h1>
          <span id="number">+7 800 456 456</span>
          <h1>ПОДПИШИТЕСЬ НА НОВОСТИ</h1>
          <div className="input-row">
          <input type="text" placeholder='Введите E-mail'/>
          <span><img src="arrowblack.svg" alt="" /></span>
        </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerdiv">
          <nav className="navbar">
            <span>работа в компании</span>
            <span>условия пользования</span>
            <span>выходные данные</span>
            <span>политика конфиденциальности</span>
            <span>карта сайта</span>
            
          </nav>
          <div className="footer-bottom">
            <img src="logowhite.svg" alt="" />
            <div className="right-section">
            <div className="phone">
              <p>ТЕЛЕФОН ГОРЯЧЕЙ ЛИНИИ</p>
              <span id="phone">+7 800 456 456</span>
              <div className="img-container">
                <img src="Facebook.svg" alt="" />
                <img src="Instagram.svg" alt="" />
              </div>
            </div>
            <div className="input-div">
              <p>ПОДПИШИТЕСЬ НА НОВОСТИ</p>
              <div className="input-row">
          <input type="text" placeholder='Введите E-mail'/>
          <span><img src="arrow.svg" alt="" /></span>
          
        </div>
        <div className="img-container">
                <img src="apple.svg" alt="" />
                <img src="android.svg" alt="" />
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>

    </>
  );
}

export default App;
