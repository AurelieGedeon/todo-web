import { Layout } from "antd";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <Layout>
      <Layout.Header
        style={{
          position: "fixed",
          zIndex: 10,
          width: "100%",
          color: "black",
          textAlign: "center",
          backgroundColor: "gold",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        Much Todo
      </Layout.Header>
      <Layout.Content
        className="background"
        style={{
          padding: "0 400px",
          marginTop: 64,
        }}
      >
        <Main />
      </Layout.Content>
      <Layout.Footer>&copy; 2022 Aurelie Gedeon</Layout.Footer>
    </Layout>
  );
}

export default App;
