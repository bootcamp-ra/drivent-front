import { PaymentBoxesContainer } from './styles/PaymentBoxesContainer';
import { ModalityBox, Modality, Price } from './styles/ModalityBox';

export default function HostSelection({ selectedHostModality, handleAccommodationClick, event }) {
  return (
    <>
      <p> Ótimo! Agora escolha sua modalidade de hospedagem </p>

      <PaymentBoxesContainer>
        <ModalityBox
          selected={selectedHostModality === 'without-accommodation' ? true : false}
          onClick={() => {
            handleAccommodationClick('without-accommodation');
          }}
        >
          <Modality>Sem Hotel</Modality>

          <Price>+ R$ 0</Price>
        </ModalityBox>

        <ModalityBox
          selected={selectedHostModality === 'with-accommodation' ? true : false}
          onClick={() => {
            handleAccommodationClick('with-accommodation');
          }}
        >
          <Modality>Com Hotel</Modality>

          <Price>+ R$ {event.accommodationPrice}</Price>
        </ModalityBox>
      </PaymentBoxesContainer>
    </>
  );
}
