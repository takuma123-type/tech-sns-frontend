import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./components/pages/Index";
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import { Search } from './components/pages/Search';
import { Post } from './components/pages/Post';
import ProfileRegistration  from './components/pages/ProfileRegistration';
import Profile from './components/pages/Profile';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile-registration" element={<ProfileRegistration />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
