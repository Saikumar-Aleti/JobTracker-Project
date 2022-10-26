import { Landing, Register, Error, ProtectedRoute } from "./pages";
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SharedLayout></SharedLayout>
              </ProtectedRoute>
            }
          >
            <Route index element={<Stats></Stats>}></Route>
            <Route path="profile" element={<Profile></Profile>}></Route>
            <Route path="all-jobs" element={<AllJobs></AllJobs>}></Route>
            <Route path="add-job" element={<AddJob></AddJob>}></Route>
          </Route>
          <Route path="/landing" element={<Landing></Landing>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
