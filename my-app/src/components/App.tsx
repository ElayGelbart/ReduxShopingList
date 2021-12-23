import { useSelector } from "react-redux";

export default function App() {
  const state = useSelector((state) => state);
  return (
    <div>
      <h1>Paramedic Control</h1>
    </div>
  );
}
