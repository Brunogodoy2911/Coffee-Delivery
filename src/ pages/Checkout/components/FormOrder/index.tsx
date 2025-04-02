import { useContext, useState } from "react";
import { MapPinLine } from "phosphor-react";
import {
  CEPInput,
  CityInput,
  Column,
  ComplementInput,
  ComplementInputWrapper,
  FormContainer,
  HeaderForm,
  NeighborhoodInput,
  NumberInput,
  OptionalText,
  RoadInput,
  Row,
  UFInput,
} from "./styles";
import { FormOrderContext } from "../../../../contexts/Form/FormOrderContext";

export function FormOrder() {
  const [isOptional, setIsOptional] = useState(true);
  const { register, errors } = useContext(FormOrderContext);

  return (
    <FormContainer>
      <HeaderForm>
        <MapPinLine size={22} />
        <Column>
          <h1>Endereço de Entrega</h1>
          <h2>Informe o endereço onde deseja receber seu pedido</h2>
        </Column>
      </HeaderForm>

      <form>
        <Column>
          <CEPInput placeholder="CEP" {...register("cep")} />
          {errors.cep && <p>{errors.cep.message}</p>}
        </Column>

        <Column>
          <RoadInput placeholder="Rua" {...register("road")} />
          {errors.road && <p>{errors.road.message}</p>}
        </Column>
        <Row>
          <Column>
            <NumberInput placeholder="Número" {...register("number")} />
            {errors.number && <p>{errors.number.message}</p>}
          </Column>
          <ComplementInputWrapper>
            <ComplementInput
              placeholder="Complemento"
              {...register("complement")}
              onFocus={() => setIsOptional(false)}
              onBlur={() => setIsOptional(true)}
            />
            {isOptional && <OptionalText>Opcional</OptionalText>}
          </ComplementInputWrapper>
        </Row>

        <Row>
          <Column>
            <NeighborhoodInput
              placeholder="Bairro"
              {...register("neighborhood")}
            />
            {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
          </Column>

          <Column>
            <CityInput placeholder="Cidade" {...register("city")} />
            {errors.city && <p>{errors.city.message}</p>}
          </Column>

          <Column>
            <UFInput placeholder="UF" {...register("uf")} />
            {errors.uf && <p>{errors.uf.message}</p>}
          </Column>
        </Row>
      </form>
    </FormContainer>
  );
}
