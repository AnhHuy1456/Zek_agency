import {Route , Routes, BrowserRouter as Router} from 'react-router'
import Home from '../Pages/Home/home'
import SeoService from '../Pages/SEOService/seoService.tsx'
import Interface from '../Pages/Interface/interface.tsx'

export const publicRoutes = [
    {path: "/", component: Home},
    {path: "/seoServices", component: SeoService},
    {path: "/interfaces", component: Interface}
]