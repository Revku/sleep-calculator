import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/Button/Button';
import MainTemplate from 'src/templates/MainTemplate';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 30px;
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  position: relative;
  text-align: center;
  margin-bottom: 50px;

  &:after {
    content: '';
    display: block;
    border-radius: 50px;
    position: absolute;
    margin-top: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    background-color: ${({ theme }) => theme.colors.primary};
    height: 7px;
  }

  @media (min-width: 700px) {
    font-size: 38px;

    &:after {
      margin-top: 10px;
      height: 8px;
    }
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 15px;
  margin-bottom: 30px;
  max-width: 400px;
`;

const Buttons = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  max-width: 450px;
  border-radius: 5px;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

const Separator = styled.div`
  height: 90%;
  width: 2px;
  background-color: #8b8b8b;
  border-radius: 50px;
  margin: 0px 15px;
`;

const Option = styled.button`
  width: 100%;
  padding: 10px 0;
  border-radius: 5px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  background-color: ${({ isActive, theme }) =>
    isActive == true ? theme.colors.primary : null};
`;

const Time = styled.div`
  margin: 50px 0;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  display: flex;

  select {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    outline: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  option {
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 10px;
  }
`;

const Home = () => {
  const [mode, setMode] = useState('pobudka');
  const [hours, setHours] = useState('07');
  const [minutes, setMinutes] = useState('00');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const url = `/wyniki/${mode}/${hours}/${minutes}`;
    navigate(url);
  };

  return (
    <MainTemplate>
      <Wrapper>
        <Heading>Kalkulator Snu</Heading>
        <Description>
          Aplikacja obliczy, o której godzinie musisz położyć się spać, aby
          wstać odpowiednio z cyklami snu.
        </Description>

        <Buttons>
          <Option
            isActive={mode === 'pobudka' ? true : false}
            onClick={() => setMode('pobudka')}
          >
            Chcę wstać o...
          </Option>
          <Option
            isActive={mode === 'porasnu' ? true : false}
            onClick={() => setMode('porasnu')}
          >
            Chcę się położyć o...
          </Option>
        </Buttons>

        <Time>
          <select
            name="hour"
            id="hour"
            onChange={e => setHours(e.target.value)}
          >
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option selected value="07">
              07
            </option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
          </select>

          <Separator />

          <select
            name="minutes"
            id="minutes"
            onChange={e => setMinutes(e.target.value)}
          >
            <option selected value="00">
              00
            </option>
            <option value="05">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
          </select>
        </Time>

        <Button onClick={handleSubmit}>Oblicz cykle snu</Button>
      </Wrapper>
    </MainTemplate>
  );
};

export default Home;
