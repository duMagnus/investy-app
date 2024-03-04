import {Text, TouchableOpacity, View} from "react-native";
import {BackgroundView} from "../../../infrastructure/navigation/index.styles";
import {FilterOption, FilterOptionTitle, FilterTitle} from "./statement.styles";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";

export const FilterScreen = () => {

    const [openType, setOpenType] = useState(false);

    return (
        <BackgroundView>
            <FilterTitle>FILTRAR ATIVOS</FilterTitle>
            <FilterOption onPress={() => {setOpenType(!openType)}}>
                <FilterOptionTitle>Tipo de ativo</FilterOptionTitle>
                <Ionicons name="chevron-down" size={26} color="#6B9080"/>
            </FilterOption>
            {openType &&
                <View>
                    <Text>Ação</Text>
                    <Text>Fundo imobiliário</Text>
                    <Text>Tesouro direto</Text>
                    <Text>Poupança</Text>
                    <Text>Fundo de investimento</Text>
                </View>
            }
            <FilterOption>
                <FilterOptionTitle>Valor aplicado</FilterOptionTitle>
                <Ionicons name="chevron-down" size={26} color="#6B9080"/>
            </FilterOption>
            <FilterOption>
                <FilterOptionTitle>Data de aplicação</FilterOptionTitle>
                <Ionicons name="chevron-down" size={26} color="#6B9080"/>
            </FilterOption>
            <FilterOption>
                <FilterOptionTitle>Valorização</FilterOptionTitle>
                <Ionicons name="chevron-down" size={26} color="#6B9080"/>
            </FilterOption>
        </BackgroundView>
    )
}