"use client"

import React, { useState } from "react";
import LoginForm from "@/app/ui/login-form/loginForm";
import Sidebar from "@/app/ui/sidebar/sidebar";

export default function page() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <main className="flex min-h-screen justify-center items-center">
      <LoginForm />
      {/* <Sidebar 
        isOpen={isOpen} 
        toggleSidebar={toggleSidebar} 
        activeItem={activeItem} 
        setActiveItem={setActiveItem} 
      /> */}
    </main>
  );
}
