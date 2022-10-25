import React from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";



export default function TelaCadastroEndereco(props) {

return(
<FormContainer>
    <h1>Cadastrar Endereço</h1>
    <Form>
    <StyledLabel htmlFor="endereco">
    Endereço:
  <Input id="endereco" />
    </StyledLabel>
    <StyledLabel htmlFor="numero-residencia">
    Número da residência:
  <Input id="numero-residencia" />
    </StyledLabel>
    <StyledLabel htmlFor="telefone">
    Telefone
  <Input id="telefone" />
    </StyledLabel>
    <StyledLabel htmlFor="complemento">
    Complemento
  <Input id="complemento" />
    </StyledLabel>

    <SendButton onClick={() => props.mudarTela(4)}>Cadastrar Endereço</SendButton>
    <BackToLoginButton onClick={() => props.mudarTela(1)}>Já possuo um cadastro</BackToLoginButton>

    </Form>
    </FormContainer>
)
}


























