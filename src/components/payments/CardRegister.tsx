import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCardState } from '../../context/CardListContext';
import { PAGE_PATH } from '../../constants';

const CardRegister = () => {
  const cardList = useCardState();

  return (
    <CardRegisterWrapper>
      {cardList.length === 0 && (
        <CardRegisterMessage>새로운 카드를 등록해주세요.</CardRegisterMessage>
      )}
      <CardRegisterButton to={PAGE_PATH.ADD_CARD}>+</CardRegisterButton>
    </CardRegisterWrapper>
  );
};

const CardRegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 44px;
  color: #575757;
`;

const CardRegisterMessage = styled.span`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  opacity: 0.9;
`;

const CardRegisterButton = styled(Link)`
  font-size: 30px;
  line-height: 35px;

  width: 208px;
  height: 124px;

  color: #575757;
  background-color: #e5e5e5;
  border: none;
  border-radius: 5px;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CardRegister;
