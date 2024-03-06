import styled from "styled-components/native";

export const LoginInput = styled.TextInput`
  padding-left: 24px;
  border: solid #A4C3B2 3px;
  border-radius: 200px;
  margin-bottom: 20px;
  height: 66px;
  font-size: 16px;
  font-family: Montserrat-Medium;
`;

export const LoginButton = styled.TouchableOpacity`
  background: #A4C3B2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-radius: 200px;
  width: 100%;
  margin-bottom: 20px;
`;

export const LoginButtonTitle = styled.Text`
  font-size: 18px;
  font-family: Montserrat-SemiBold;
  color: white;
`;

export const AccountPageTitle = styled.Text`
  margin: 0 auto 40px;
  font-size: 24px;
  font-family: Montserrat-Bold;
  color: black;
`;

export const AccountPageBackground = styled.View`
  padding: 60px 30px 30px 30px;
  flex: 1;
`;

export const FormContainer = styled.View`
  //background: coral;
`;

export const SocialLoginContainer = styled.View`
  border-radius: 200px;
  background: #A4C3B2;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const AccountPageFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: auto;
`;

export const AccountPageChanger = styled.Text`
  font-family: Montserrat-Medium;
`;

export const OrContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const OrText = styled.Text`
  font-family: Montserrat-Regular;
`;