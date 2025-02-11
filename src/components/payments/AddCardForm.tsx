import styled from 'styled-components';
import ErrorMessage from '../common/ErrorMessage';
import Tooltip from '../common/Tooltip';
import CardCVCInput from './inputs/CardCVCInput';
import CardExpirationDateInput from './inputs/CardExpirationDateInput';
import CardNumberInput from './inputs/CardNumberInput';
import CardOwnerInput from './inputs/CardOwnerInput';
import CardPasswordInput from './inputs/CardPasswordInput';
import { StyledSubmitButton } from '../../pages/AddCardNamePage';
import useAddCardForm from '../../hooks/useAddCardForm';

type AddCardFormProps = {
  expirationError: boolean;
  onSubmit: (e: React.FormEvent) => void;
};

const AddCardForm = ({ expirationError, onSubmit }: AddCardFormProps) => {
  const { insert, onChangeCardDateState, onChangeState } = useAddCardForm();

  return (
    <StyledForm onSubmit={onSubmit}>
      <CardNumberInput onChangeState={onChangeState} insertRef={insert} />
      <CardExpirationDateInput onChangeCardDateState={onChangeCardDateState} insertRef={insert} />
      {expirationError && <ErrorMessage message="유효한 카드 만료일을 입력해주세요." />}
      <CardOwnerInput onChangeState={onChangeState} insertRef={insert} />
      <StyledHeightCenter>
        <CardCVCInput onChangeState={onChangeState} insertRef={insert} />
        <Tooltip text="카드 뒷면에 있는 3자리 숫자입니다.">
          <StyledHelperButton disabled>?</StyledHelperButton>
        </Tooltip>
      </StyledHeightCenter>
      <StyledHeightCenter>
        <CardPasswordInput onChangeState={onChangeState} insertRef={insert} />
        <StyledDotWrapper>
          <StyledDot />
        </StyledDotWrapper>
        <StyledDotWrapper>
          <StyledDot />
        </StyledDotWrapper>
      </StyledHeightCenter>
      <StyledSubmitButton type="submit">다음</StyledSubmitButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

const StyledHelperButton = styled.button`
  width: 28px;
  height: 28px;
  cursor: pointer;

  color: #969696;
  border: 1px solid #bababa;
  background-color: #fff;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 500;

  margin-top: 14px;
`;

const StyledHeightCenter = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDotWrapper = styled.div`
  margin-left: 8px;
  width: 40px;
  height: 40px;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDot = styled.div`
  width: 5px;
  height: 5px;

  border-radius: 50%;
  background-color: black;
`;
export default AddCardForm;
