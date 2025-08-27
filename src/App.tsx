// src/App.tsx
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <div className="min-h-screen bg-[#ccced2]">
      <Helmet>
        <title>Ascanode</title>
        <meta name="description" content="Ascanode — design & minimalism." />
      </Helmet>

      <main className="mx-auto max-w-[1440px] px-6">
        <Outlet /> this is where the child routes will render
      </main>
    </div>
  );
}
