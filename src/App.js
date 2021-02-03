import './App-normalize.css';
import './App.css';
import {Header, Rating,ReviewsHeader, CommentContainer} from './components/index.js'

function App() {
  return (
    <>
    <Header name="Вероника Ростова" position="Менеджер по продажам" summary="Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны"></Header>
    <Rating title1="Ручное бронирование" title2="Пакетные туры" title3="Отели" number1="11" number2="3" number3="1"></Rating>
    <ReviewsHeader likes="132" comments="14"></ReviewsHeader>
    <CommentContainer></CommentContainer>
    </>
    
  );
}

export default App;
