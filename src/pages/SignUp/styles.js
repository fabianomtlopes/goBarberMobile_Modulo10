import { Platform } from 'react-native'; // para determinar qual plataforma estara
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

// KeyboardAvoidingView para iOS, serve para napo subir o teclado
// acima do botao ou input
export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch; /*para tentar ocupar toda a largura */
  margin-top: 50px;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;
export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
