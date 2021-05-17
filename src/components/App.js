import Header from "./Header";
import Todo from "./Todo";
import Footer from "./Footer";
function App() {
  const mainStyle = {
    display:"flex",
    flexDirection:"column"
  }
  return (
    <div style={mainStyle}>
        <Header />
        <Todo />
    </div>
  );
}

export default App;
