import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  width: 100%;
  transition: transform 0.3s;
  cursor: default;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 400px) {
    width: 45%;
  }

  @media (min-width: 600px) {
    width: 30%;
  }
`;

const TimeTitle = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 5px;
`;

const TimeDescription = styled.p`
  color: #ebebeb;
  text-align: center;
  font-size: 13px;
`;

const Time = ({ time }) => {
  return (
    <Wrapper>
      <TimeTitle>{time.time}</TimeTitle>
      <TimeDescription>
        Czas snu: {time.sleepTime}h ({time.cycles}{' '}
        {time.cycles == 1 ? 'cykl' : time.cycles > 4 ? 'cykli' : 'cykle'})
      </TimeDescription>
    </Wrapper>
  );
};

Time.propTypes = {
  time: PropTypes.object,
};

export default Time;
