import { createContext, ReactNode, useContext, useState } from "react";
import {
  useForm,
  UseFormRegister,
  UseFormHandleSubmit,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";

const formOrderValidationSchema = z.object({
  cep: z
    .string()
    .min(9, "CEP é obrigatório")
    .max(9, "Excedeu o número máximo de caracteres")
    .regex(/^\d{5}-\d{3}$/, "Formato: 00000-000"),
  road: z
    .string()
    .min(3, "Rua é obrigatória")
    .max(100, "Excedeu o número máximo de caracteres"),
  number: z
    .string()
    .min(1, "Número é obrigatório")
    .max(10, "Excedeu o número máximo de caracteres")
    .regex(/^\d+$/, "Apenas números são permitidos"),
  complement: z.string().optional(),
  neighborhood: z
    .string()
    .min(3, "Bairro é obrigatório")
    .max(50, "Excedeu o número máximo de caracteres"),
  city: z
    .string()
    .min(3, "Cidade é obrigatória")
    .max(50, "Excedeu o número máximo de caracteres"),
  uf: z
    .string()
    .min(2, "Estado é obrigatório")
    .max(2, "Excedeu o número máximo de caracteres")
    .regex(/^[A-Z]+$/),
  selectedPaymentMethod: z.enum(
    ["Cartão de crédito", "Cartão de débito", "Dinheiro"],
    {
      message: "Selecione um método de pagamento",
    }
  ),
});

type FormOrderData = z.infer<typeof formOrderValidationSchema>;

interface FormOrderContextType {
  register: UseFormRegister<FormOrderData>;
  handleSubmit: UseFormHandleSubmit<FormOrderData>;
  onSubmit: (data: FormOrderData) => void;
  setValue: UseFormSetValue<FormOrderData>;
  watch: UseFormWatch<FormOrderData>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: Record<string, any>;
  orderData: FormOrderData | null;
}

export const FormOrderContext = createContext({} as FormOrderContextType);

interface FormOrderProviderProps {
  children: ReactNode;
}

export function FormOrderProvider({ children }: FormOrderProviderProps) {
  const [orderData, setOrderData] = useState<FormOrderData | null>(null);

  const { resetCart } = useContext(CartContext);

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormOrderData>({
    resolver: zodResolver(formOrderValidationSchema),
    defaultValues: {
      cep: "",
      road: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      uf: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormOrderData) => {
    setOrderData(data);

    localStorage.removeItem("@coffee-delivery:cart-state-1.0.0");

    resetCart();
    reset();

    localStorage.removeItem("@coffee-delivery:item-quantities");

    navigate("/success");
  };

  return (
    <FormOrderContext.Provider
      value={{
        register,
        handleSubmit,
        setValue,
        watch,
        onSubmit,
        errors,
        orderData,
      }}
    >
      {children}
    </FormOrderContext.Provider>
  );
}

export function useFormOrder() {
  return useContext(FormOrderContext);
}
