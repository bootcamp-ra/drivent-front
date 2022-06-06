import { Box, Button, Typography } from '@material-ui/core';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import styled from 'styled-components';
import usePayment from '../../../hooks/usePayment';
import useCardForm from '../../../hooks/userCardForm';
import CardForm from './CreditCard';

export default function PaymentForm() {
  const { paymentInfo, ticketPrice } = usePayment();
  const [success, setSuccess] = useState(false);

  function TicketDescription() {
    if (paymentInfo.type === 'online') {
      return 'Online';
    }
    if (paymentInfo.type === 'presential') {
      if (!paymentInfo.hotel) {
        return 'Presencial';
      } else {
        return 'Presencial + Com Hotel';
      }
    }
  }
  return (
    <Box>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Box sx={{ margin: '0 0 25px 0' }}>
        <StyledTypography variant="h6" color="textSecondary">
          Ingresso escolhido
        </StyledTypography>
        <StyledSumaryText isSelected={true} disabled>
          <Typography>{TicketDescription()}</Typography>
          <Typography color="textSecondary">{ticketPrice}</Typography>
        </StyledSumaryText>
      </Box>
      <Box>
        <StyledTypography variant="h6" color="textSecondary">
          Pagamento
        </StyledTypography>
        {success ? (
          <Box style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
            <CheckCircleIcon style={{fill: '#36B853', fontSize: '40.33px'}}/>
            <div>
            <StyledTypography variant="p" style={{ fontWeight: '700', color: '#454545' }} color="#454545">
              Pagamento confirmado!
            </StyledTypography>
            <br />
            <StyledTypography variant="p" style={{ color: '#454545' }}>
              Prossiga para escolha de hospedagem e atividades
            </StyledTypography>
            </div>
          </Box>
        ) : (
          <CardForm setSuccess={setSuccess}/>
        )}
      </Box>
    </Box>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const StyledSumaryText = styled.button`
  all: unset;
  width: 290px;
  height: 108px;
  display: flex;
  flex-direction: column;
  :disabled {
    cursor: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #cecece;
    border-radius: 20px;
    background-color: ${(props) => (props.isSelected ? '#ffeed2' : '#fff')};
  }
`;