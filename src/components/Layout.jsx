import React from 'react'
import {Link, Outlet} from "react-router-dom"



export default function Layout() {
  return (
    <div >
    <h1 className= "font-bold text-white text-slate-900 text-5xl">Rubens Film Browser</h1>
    <h1 className= "font-semibold text-white text-slate-900"></h1>
      <header class="bg-zinc-800 p-4 w-full text-xl text-white gap-20">
        <Link to="/MovieBrowser" class="hover:text-sky-500 pr-4" >Home</Link>
        <Link to="/Contact" class="hover:text-sky-500">Contact me</Link>
      </header>

      <div class="bg-#27272a w-full">
        {/* page content */}
        <Outlet />
      </div>
    </div>
  );
}