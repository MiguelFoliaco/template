import React from "react";

export const Home = () => {
  return (
    <RN.View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 30,
      }}
    >
      <RN.View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 20,
          borderBottomColor: "#FFFFFF",
          borderBottomWidth: 1,
          borderStyle: "solid",
        }}
      >
        <RB.Text>Tus Notas</.Text>
        <RN.TouchableOpacity>
          <RN.Text>Crear Nota</RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
    </RN.View>
  );
};
