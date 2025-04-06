import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage  from './pages/MainPage.jsx';
import Auth  from './pages/Auth.jsx';
import Register  from './pages/Register.jsx';
import Chats  from './pages/Chats.jsx';
import Chat  from './pages/Chat.jsx';
import Startups  from './pages/Startups.jsx';
import Startup  from './pages/Startup.jsx';
import Home  from './pages/Home.jsx';
import Upload  from './pages/Upload.jsx';
import Offers  from './pages/Offers.jsx';
import Offer  from './pages/Offer.jsx';
import Investments  from './pages/Investments.jsx';
import Investment  from './pages/Investment.jsx';
import { MainLayout } from './layout/MainLayout.jsx';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />} path='/'>
                <Route element={<MainPage />} path="/" />
                <Route element={<Chats />} path='/chats/:userId' />
                <Route element={<Chat />} path="/chats/:chatId" />
                <Route element={<Startups />} path="/startups" />
                <Route element={<Startup />} path="/startups/:startupsId" />
                <Route element={<Home />} path="/user/:userId" />
                <Route element={<Upload />} path="/upload" />
                <Route element={<Offers />} path="/offers" />
                <Route element={<Offer />} path="/offers/:offerId" />
                <Route element={<Investments />} path="/investments" />
                <Route element={<Investment />} path="/investments/:investmentId" />
            </Route>
            <Route element={<Auth />} path="/auth" />
            <Route element={<Register />} path="/register" />
            <Route element={<MainPage />} path="*" />
        </Routes>
    </BrowserRouter>
);

export default Router;