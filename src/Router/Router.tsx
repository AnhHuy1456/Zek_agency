import {Route , Routes, BrowserRouter as Router} from 'react-router'
import Home from '../Pages/Home/home'
import SeoService from '../Pages/SEOService/seoService.tsx'

export const publicRoutes = [
    {path: "/", component: Home},
    {path: "/seoServices", component: SeoService},
]