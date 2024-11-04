import React from "react";

export const CardNote = () => {
  return (
    <RN.View
      style={{
        padding: 10,
        borderBottomColor: "#FFFFFF",
        borderBottomWidth: 1,
        borderStyle: "solid",
      }}
    >
      <RN.View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <RN.Text style={{ fontSize: 13, letterSpacing: 2 }}>01/</RN.Text>
        <RN.Text style={{ fontSize: 23, color: "white", letterSpacing: 2 }}>
          Title Notes
        </RN.Text>
        <RN.Text style={{ fontSize: 13 }}>Edit</RN.Text>
      </RN.View>
      <RN.View style={{ padding: 20 }}>
        <RN.Text style={{ letterSpacing: 2, fontSize: 14 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, in
          nemo earum vitae quod ex hic debitis.
        </RN.Text>
      </RN.View>
    </RN.View>
  );
};
