import { Layout, Skeleton } from "antd";
import Main from "./components/Main";

function App() {
  return (
    <Layout>
      <Layout.Header
        style={{
          position: "fixed",
          zIndex: 10,
          width: "100%",
          color: "white",
          textAlign: "center",
          backgroundColor: "gold",
          fontSize: "40px",
          fontWeight: "bold",
        }}
      >
        Much Todo
      </Layout.Header>
      <Layout.Content style={{ padding: "0 400px", marginTop: 64 }}>
        <>
          <Main />
        </>
      </Layout.Content>
      <Layout.Footer>&copy; 2022 Aurelie Gedeon</Layout.Footer>
    </Layout>
  );
}

export default App;
