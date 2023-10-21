import "./index.css";
import { Card } from "./components/Card";
import arr from "./data.json";

function App() {
  return (
    <>
      <div className="contaier">
        {arr.map(({ title, userId, body }) => (
          <Card userId={userId} title={title} body={body} />
        ))}
      </div>
    </>
  );
}

export default App;
