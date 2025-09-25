import { Routes, Route } from "react-router-dom";
import CharacterCounter from "../components/CharacterCounter";
import ReducerForm from "../components/ReducerForm";
import LazyModalExample from "../components/LazyModal";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/character-counter" element={<CharacterCounter />} />
      <Route path="/reducer-form" element={<ReducerForm />} />
      <Route path="/lazy-modal" element={<LazyModalExample />} />
    </Routes>
  );
}
