import React from "react";
import { useNotes } from "../hook/useNotes";
import { CardNote } from "../components/CardNote";

export const Home = () => {
  const { notes } = useNotes();

  return (
    <RN.View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 20,
      }}
    >
      <RN.View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <RN.Text style={{ fontSize: 15, letterSpacing: 2 }}>Tus Notas</RN.Text>
        <RN.TouchableOpacity>
          <RN.Text style={{ color: "#FFFFFF", letterSpacing: 2 }}>
            Crear Nota +
          </RN.Text>
        </RN.TouchableOpacity>
      </RN.View>
      <RN.View
        style={{
          marginVertical: 30,
          borderTopColor: "#dbdbdb",
          borderTopWidth: 1,
          borderBottomColor: "#dbdbdb",
          borderBottomWidth: 1,
          borderStyle: "solid",
          paddingVertical: 15,
          paddingHorizontal: 30,
        }}
      >
        <RN.Text style={{ fontSize: 70, color: "white", letterSpacing: 2 }}>
          Tus
        </RN.Text>
        <RN.Text
          style={{
            fontSize: 70,
            marginTop: 10,
            alignSelf: "flex-end",
            color: "white",
            letterSpacing: 2,
          }}
        >
          Notas
        </RN.Text>
      </RN.View>
      <RN.View>
        {notes.length > 0 ? (
          notes.map((e) => <CardNote key={`${e.title}-${e.id}`} />)
        ) : (
          <RN.TouchableOpacity
            style={{
              margin: 20,
              backgroundColor: "#ff7930",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 2,
            }}
          >
            <RN.Text
              style={{ fontSize: 20, letterSpacing: 2, fontWeight: "bold" }}
            >
              Crear una nota +
            </RN.Text>
          </RN.TouchableOpacity>
        )}
      </RN.View>
    </RN.View>
  );
};
