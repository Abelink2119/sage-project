import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import TodoItem from "../components/TodoItem";

export default function HomeScreen({ navigation }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("todos");
        if (storedTodos) setTodos(JSON.parse(storedTodos));
      } catch (e) {
        console.log("Failed to load todos", e);
      }
    };
    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(todos));
      } catch (e) {
        console.log("Failed to save todos", e);
      }
    };
    saveTodos();
  }, [todos]);

  const addTodo = () => {
    if (task.trim().length > 0) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: task,
          completed: false,
          category: category || "General",
          dueDate: dueDate || "No Due Date",
        },
      ]);
      setTask("");
      setCategory("");
      setDueDate("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const getFilteredTodos = () => {
    let filtered = todos;

    if (filter === "Completed") filtered = filtered.filter((t) => t.completed);
    else if (filter === "Pending")
      filtered = filtered.filter((t) => !t.completed);
    else if (filter.startsWith("Category:")) {
      const categoryName = filter.split(":")[1];
      filtered = filtered.filter((t) => t.category === categoryName);
    }

    if (search.trim().length > 0) {
      filtered = filtered.filter((t) =>
        t.text.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, darkMode && { backgroundColor: "#121212" }]}
    >
      <StatusBar
        barStyle={darkMode ? "light-content" : "dark-content"}
        backgroundColor={darkMode ? "#121212" : "#f5f5f5"}
      />

      <View style={[styles.header, darkMode && { backgroundColor: "#1e1e1e" }]}>
        <Pressable onPress={() => navigation.navigate("LandingScreen")}>
          <MaterialIcons
            name="arrow-back"
            size={28}
            color={darkMode ? "white" : "black"}
          />
        </Pressable>

        <Text style={[styles.title, darkMode && { color: "white" }]}>
          <MaterialIcons
            name="assignment"
            size={24}
            color={darkMode ? "white" : "black"}
          />{" "}
          ToDoList
        </Text>

        <Pressable onPress={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <Ionicons name="sunny" size={28} color="white" />
          ) : (
            <Ionicons name="moon" size={28} color="black" />
          )}
        </Pressable>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <TextInput
          style={[styles.input, darkMode && styles.inputDark]}
          placeholder="Enter task"
          placeholderTextColor={darkMode ? "#bbb" : "#888"}
          value={task}
          onChangeText={setTask}
        />
        <TextInput
          style={[styles.input, darkMode && styles.inputDark]}
          placeholder="Enter category (optional)"
          placeholderTextColor={darkMode ? "#bbb" : "#888"}
          value={category}
          onChangeText={setCategory}
        />
        <TextInput
          style={[styles.input, darkMode && styles.inputDark]}
          placeholder="Enter due date (e.g. 2025-08-20)"
          placeholderTextColor={darkMode ? "#bbb" : "#888"}
          value={dueDate}
          onChangeText={setDueDate}
        />

        <Pressable style={styles.addBtn} onPress={addTodo}>
          <MaterialIcons name="add" size={24} color="white" />
          <Text style={styles.addBtnText}> Add Task</Text>
        </Pressable>

        <TextInput
          style={[styles.input, darkMode && styles.inputDark]}
          placeholder="Search tasks"
          placeholderTextColor={darkMode ? "#bbb" : "#888"}
          value={search}
          onChangeText={setSearch}
        />

        <View style={styles.filters}>
          {["All", "Pending", "Completed"].map((f) => (
            <Pressable
              key={f}
              style={[
                styles.filterBtn,
                filter === f && styles.active,
                darkMode && styles.filterBtnDark,
              ]}
              onPress={() => setFilter(f)}
            >
              <Text
                style={
                  filter === f
                    ? styles.activeText
                    : [styles.filterText, darkMode && { color: "#ddd" }]
                }
              >
                {f}
              </Text>
            </Pressable>
          ))}
        </View>

        <FlatList
          horizontal
          data={[...new Set(todos.map((t) => t.category))]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.filterBtn,
                filter === `Category:${item}` && styles.active,
                darkMode && styles.filterBtnDark,
              ]}
              onPress={() => setFilter(`Category:${item}`)}
            >
              <Text
                style={
                  filter === `Category:${item}`
                    ? styles.activeText
                    : [styles.filterText, darkMode && { color: "#ddd" }]
                }
              >
                {item}
              </Text>
            </Pressable>
          )}
          style={{ marginBottom: 10 }}
        />

        <FlatList
          data={getFilteredTodos()}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onDelete={deleteTodo}
              onToggle={toggleComplete}
            />
          )}
          ListEmptyComponent={
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                color: darkMode ? "#bbb" : "gray",
              }}
            >
              No tasks found
            </Text>
          }
        />
      </KeyboardAvoidingView>

      <View style={[styles.footer, darkMode && { backgroundColor: "#1e1e1e" }]}>
        <Pressable onPress={() => navigation.navigate("LandingScreen")}>
          <MaterialIcons
            name="arrow-back"
            size={28}
            color={darkMode ? "white" : "black"}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <MaterialIcons
            name="home"
            size={28}
            color={darkMode ? "white" : "black"}
          />
        </Pressable>

        <Pressable onPress={() => console.log("Recent pressed")}>
          <MaterialIcons
            name="history"
            size={28}
            color={darkMode ? "white" : "black"}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: { flex: 1, paddingHorizontal: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#eee",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: { fontSize: 22, fontWeight: "700", color: "#333" },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "white",
    fontSize: 16,
    color: "#333",
  },
  inputDark: {
    backgroundColor: "#1e1e1e",
    borderColor: "#444",
    color: "white",
  },
  addBtn: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  addBtnText: { color: "white", fontSize: 16, fontWeight: "600" },
  filters: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  filterBtn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#eee",
    marginHorizontal: 5,
  },
  filterBtnDark: { backgroundColor: "#333" },
  filterText: { fontWeight: "500", color: "#333" },
  active: { backgroundColor: "#4CAF50" },
  activeText: { color: "white", fontWeight: "600" },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#eee",
  },
});
