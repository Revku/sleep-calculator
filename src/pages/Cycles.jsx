import MainTemplate from 'src/templates/MainTemplate';
import { styled } from 'styled-components';
import ReactGA from 'react-ga4';

const Wrapper = styled.div`
  max-width: 1000px;
  padding: 30px;
  text-align: left;

  h1 {
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 30px;
  }

  h2 {
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 23px;
  }

  ol {
    padding: 0px 30px;
    margin-bottom: 30px;
  }

  li {
    margin: 15px 0;
    color: #ebebeb;
  }
`;

const Heading = styled.div`
  margin-bottom: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  padding: 50px 30px;
`;

const Cycles = () => {
  ReactGA.send({
    hitType: 'pageview',
    page: '/cykle-snu',
    title: 'Cykle Snu',
  });
  return (
    <MainTemplate>
      <Wrapper>
        <Heading>
          <h1>Cykle snu i zdrowy sen</h1>
          <p>
            Cykle snu są niezwykle ważnym elementem naszego zdrowego snu.
            Podczas nocy przechodzimy przez kilka cykli snu, złożonych z różnych
            faz. Poznanie tych faz i zrozumienie, jak zadbać o zdrowy sen, może
            pomóc Ci w osiągnięciu lepszej jakości i wypoczynku.
          </p>
        </Heading>

        <h2>Faza REM (Ruchy Oczu pod Powieką)</h2>
        <p>
          Podczas fazy REM twój sen staje się bardziej aktywny. To wtedy
          występują sny i najbardziej intensywne marzenia. W tej fazie mózg jest
          bardziej czujny, a twoje oczy wykonują szybkie ruchy. REM występuje
          kilka razy podczas nocy, a czas trwania tej fazy zwiększa się wraz z
          postępem snu.
        </p>

        <h2>Faza NREM (Nieszybkie Ruchy Oczu)</h2>
        <p>
          Faza NREM składa się z kilku etapów, począwszy od lekkiego snu do
          głębokiego snu. W tej fazie organizm regeneruje się, a procesy
          fizyczne i umysłowe stają się spokojniejsze. Jest to również kluczowy
          czas dla wzmacniania pamięci, uczenia się i naprawy tkanek.
        </p>

        <h2>Jak zadbać o zdrowy sen?</h2>
        <ol>
          <li>
            Regularne harmonogramy snu: Staraj się chodzić spać i budzić o
            stałych porach, aby twój organizm mógł dostosować się do rutyny snu.
            W ten sposób pomożesz regulować swój wewnętrzny zegar biologiczny.
          </li>
          <li>
            Stwórz przyjazne środowisko snu: Spróbuj stworzyć spokojne, ciemne i
            ciche otoczenie do spania. Unikaj jasnych świateł, hałasów i innych
            czynników, które mogą zakłócać sen.
          </li>
          <li>
            Unikaj kofeiny i stymulantów: Unikaj spożywania napojów i pokarmów
            zawierających kofeinę przed snem. Kofeina może utrudnić zasypianie i
            zakłócić jakość snu.
          </li>
          <li>
            Regularna aktywność fizyczna: Ćwicz regularnie, ale unikaj
            intensywnego wysiłku tuż przed snem. Regularna aktywność fizyczna
            pomaga regulować cykl snu i poprawia jakość snu.
          </li>
          <li>
            Ogranicz ekran: Unikaj długotrwałego korzystania z urządzeń
            elektronicznych przed snem. Światło emitowane przez ekrany może
            zakłócać produkcję melatoniny, hormonu regulującego sen.
          </li>
        </ol>

        <p>
          Pamiętaj, że każdy organizm jest inny, dlatego ważne jest, aby
          eksperymentować i znaleźć strategie, które najlepiej odpowiadają twoim
          indywidualnym potrzebom snu. Zadbaj o cykle snu i ciesz się spokojnym,
          odprężającym snem, który pomoże Ci w codziennych wyzwaniach.
        </p>
      </Wrapper>
    </MainTemplate>
  );
};

export default Cycles;
