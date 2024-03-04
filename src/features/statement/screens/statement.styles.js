import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

//Asset Card
export const AssetCardContainer = styled(TouchableOpacity)`
  background: #CCE3DE;
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 16px;
`;

export const AssetCardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const AssetCardBody = styled.View`
  gap: 5px;
`;

export const AssetCardProp = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AssetName = styled.Text`
  font-size: 18px;
  font-family: Montserrat-Bold;
  color: #6B9080;
`;

export const AssetValue = styled.Text`
  font-size: 14px;
  font-family: Montserrat-Bold;
  color: #6B9080;
`;

export const AssetPropDescription = styled.Text`
  font-size: 12px;
  font-family: Montserrat-SemiBold;
  color: #6B9080;
`;

// Assets Header

export const AssetsHeaderContainer = styled.View`
  padding: 10px 0 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const AssetsHeaderTitle = styled.Text`
  font-size: 20px;
  font-family: Montserrat-SemiBold;
  color: #6B9080;
`;

export const AssetsHeaderActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
`;

//AssetCardDetail

export const AssetCardDetailContainer = styled.View`
  padding: 10px;
`;

//FilterScreen

export const FilterTitle = styled.Text`
  font-size: 20px;
  font-family: Montserrat-SemiBold;
  color: #6B9080;
  margin-bottom: 20px;
`;

export const FilterOption = styled(TouchableOpacity)`
  width: 100%;
  //background: coral;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const FilterOptionTitle = styled.Text`
  font-family: Montserrat-SemiBold;
  font-size: 16px;
  color: #6B9080;
`;

