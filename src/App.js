import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import PostDetail from './components/PostDetail'
import Profile from './components/Profile';

import { clearMessage } from './redux/actions/message';
import { PostcardHeartFill } from 'react-bootstrap-icons/dist';

const App = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    if (['/login', '/register'].includes(location.pathname)) {
      dispatch(clearMessage());
    }
  }, [dispatch, location]);

  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
    </div>
  );
};

export default App;
