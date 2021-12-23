import { Routes, Route } from "react-router-dom";
import UserDataForm from "./UserDataForm";
import ItemDataForm from "./ItemDataForm";
export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Paramedic Control</h1>
      <Routes>
        <Route path="/" element={<UserDataForm />} />
        <Route path="/items" element={<ItemDataForm />} />
      </Routes>
    </div>
  );
}
