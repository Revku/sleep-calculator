import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'src/components/Button/Button';
import Time from 'src/components/Time/Time';
import MainTemplate from 'src/templates/MainTemplate';
import { getTimes } from 'src/utils/getTimes';
import { styled } from 'styled-components';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';

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
  max-width: 600px;
`;

const Times = styled.div`
  margin-bottom: 30px;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

const Result = () => {
  const params = useParams();
  const navigate = useNavigate();
  const hours = parseInt(params.hours);
  const minutes = parseInt(params.minutes);
  const timeString = `${params.hours}:${params.minutes}`;
  const [times] = useState(getTimes(timeString, params.mode));

  ReactGA.send({
    hitType: 'pageview',
    page: '/wyniki',
    title: 'Wyniki',
  });

  useEffect(() => {
    if (
      isNaN(hours) ||
      isNaN(minutes) ||
      hours < 0 ||
      hours > 24 ||
      minutes < 0 ||
      minutes > 60 ||
      (params.mode != 'porasnu' && params.mode != 'pobudka')
    ) {
      navigate('/');
    }
  }, [params, navigate, hours, minutes]);

  return (
    <MainTemplate>
      <Wrapper>
        <Helmet>
          <title>
            Wyniki - {params.mode == 'porasnu' ? 'chcę zasnąć' : 'chcę wstać'} o{' '}
            {timeString}
          </title>
        </Helmet>
        <Heading>Twoje wyniki</Heading>

        <Description>
          {params.mode == 'pobudka'
            ? `Człowiek potrzebuje około 15 minut aby zasnąć. Żeby obudzić się o
            ${timeString}, musisz położyć się spać o wybranych godzinach`
            : `Człowiek potrzebuje około 15 minut aby zasnąć. Jeżeli pójdziesz spać o ${timeString}, musisz obudzić się w jednym z wybranych momentów:`}
        </Description>

        <Times>
          {times.map(item => (
            <Time time={item} key={item.cycles} />
          ))}
        </Times>

        <Description>
          {params.mode == 'pobudka'
            ? `Jeśli pójdziesz spać w jednym z tych momentów, wstaniesz między 90-minutowymi cyklami snu. Dobry sen składa się z 5-6 pełnych cykli snu.`
            : `Jeśli obudzisz się w jednym z tych momentów, wstaniesz między 90-minutowymi cyklami snu. Dobry sen składa się z 5-6 pełnych cykli snu.`}
        </Description>

        <Button onClick={() => navigate('/')}>Powrót do strony głównej</Button>
      </Wrapper>
    </MainTemplate>
  );
};

export default Result;
