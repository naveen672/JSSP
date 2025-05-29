import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/use-auth";

// Pages
import Home from "@/pages/home";
import Academics from "@/pages/academics";
import Admissions from "@/pages/admissions";
import About from "@/pages/about";
import AboutJSSMVP from "@/pages/about-jssmvp";
import Messages from "@/pages/messages";
import Governance from "@/pages/governance";
import AICTEEOA from "@/pages/aicte-eoa";
import NBA from "@/pages/nba";
import CampusLife from "@/pages/campus-life";
import Infrastructure from "@/pages/infrastructure";
import Contact from "@/pages/contact";
import AdminLogin from "@/pages/admin/login";
import AdminDashboard from "@/pages/admin/dashboard";
import NotFound from "@/pages/not-found";

// Layout components
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SplashScreen from "@/components/ui/splash-screen";
import ScrollToTop from "@/components/ui/scroll-to-top";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/academics" component={Academics} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/about" component={About} />
          <Route path="/about-jssmvp" component={AboutJSSMVP} />
          <Route path="/messages" component={Messages} />
          <Route path="/governance" component={Governance} />
          <Route path="/aicte-eoa" component={AICTEEOA} />
          <Route path="/nba" component={NBA} />
          <Route path="/campus-life" component={CampusLife} />
          <Route path="/infrastructure" component={Infrastructure} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          {showSplash ? (
            <SplashScreen onComplete={handleSplashComplete} />
          ) : (
            <Router />
          )}
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
