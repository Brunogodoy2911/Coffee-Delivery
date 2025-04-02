import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Button, Card, Column, HeaderCard, Row } from "./styles";
import { useContext } from "react";
import { FormOrderContext } from "../../../../contexts/Form/FormOrderContext";

export function CardPaymentMethod() {
  const { setValue, watch, errors } = useContext(FormOrderContext);

  const selectedPaymentMethod = watch("selectedPaymentMethod");

  return (
    <Card>
      <HeaderCard>
        <CurrencyDollar size={22} />

        <Column>
          <h1>Pagamento</h1>
          <h2>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </h2>
        </Column>
      </HeaderCard>
      <Column>
        <Row>
          <Button
            onClick={() =>
              setValue("selectedPaymentMethod", "Cartão de crédito")
            }
            isSelected={selectedPaymentMethod === "Cartão de crédito"}
          >
            <CreditCard size={16} />
            <p>Cartão de crédito</p>
          </Button>
          <Button
            onClick={() =>
              setValue("selectedPaymentMethod", "Cartão de débito")
            }
            isSelected={selectedPaymentMethod === "Cartão de débito"}
          >
            <Bank size={16} />
            <p>Cartão de débito</p>
          </Button>
          <Button
            onClick={() => setValue("selectedPaymentMethod", "Dinheiro")}
            isSelected={selectedPaymentMethod === "Dinheiro"}
          >
            <Money size={16} />
            <p>Dinheiro</p>
          </Button>
        </Row>
        {errors.selectedPaymentMethod && (
          <p>{errors.selectedPaymentMethod.message}</p>
        )}
      </Column>
    </Card>
  );
}
