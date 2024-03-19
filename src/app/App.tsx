import { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";

const App = () => {
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
