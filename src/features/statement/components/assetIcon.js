import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";

export const AssetIcon = ({ asset, color='white' }) => {
    const icons = {
        'ação': <Entypo name="area-graph" size={24} color={color}/>,
        'fii': <MaterialCommunityIcons name="office-building" size={24} color={color} />
    }

    return icons[asset.type.toLowerCase()];
}