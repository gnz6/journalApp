import React from 'react'
import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from '../Auth/routes/AuthRoutes';
import { JournalRoutes } from '../Journal/routes/JournalRoutes';
import { useSelector } from 'react-redux';
import { CheckingAuth } from '../ui/components/CheckingAuth';

export const AppRouter = () => {

    const {status}=useSelector(state=>state.auth)
    if (status === "checking"){
        return <CheckingAuth/>
    }

    return (
        <Routes>
            <Route path='/auth/*' element={<AuthRoutes />} />
            <Route path='/*' element={<JournalRoutes />} />
        </Routes>
    )
}
