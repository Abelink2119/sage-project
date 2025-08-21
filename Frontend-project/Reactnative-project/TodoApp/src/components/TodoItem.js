import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <View style={styles.item}>
      <View style={styles.left}>
        <Switch
          value={todo.completed}
          onValueChange={() => onToggle(todo.id)}
          trackColor={{ false: "#ccc", true: "green" }}
          thumbColor={todo.completed ? "white" : "white"}
        />
        <View>
          <Text style={[styles.text, todo.completed && styles.completed]}>
            {todo.text}
          </Text>
          <View style={styles.metaContainer}>
            <MaterialIcons name="folder" size={14} color="gray" />
            <Text style={styles.metaText}> {todo.category} </Text>
            <MaterialIcons
              name="access-time"
              size={14}
              color="gray"
              style={{ marginLeft: 10 }}
            />
            <Text style={styles.metaText}> {todo.dueDate} </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  metaText: {
    fontSize: 12,
    color: "gray",
  },
});
