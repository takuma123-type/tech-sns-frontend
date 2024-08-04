import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/pages/Index";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import { Search } from "./components/pages/Search";
import { Post } from "./components/pages/Post";
import ProfileRegistration from "./components/pages/ProfileRegistration";
import Profile from "./components/pages/Profile";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/templates/PrivateRoute";
import UserDetail from "./components/pages/UserDetail";
import UpdateUserDetail from "./components/pages/UpdateUserDetail";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
          <Route path="/post" element={<PrivateRoute element={<Post />} />} />
          <Route path="/profile-registration" element={<ProfileRegistration />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/account/user" element={<PrivateRoute element={<UserDetail />} />} />
          <Route path="/account/user/update" element={<PrivateRoute element={<UpdateUserDetail />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
