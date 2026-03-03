import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import RoomDetail from "./pages/RoomDetail";
import Reservas from "./pages/Reservas";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const queryClient = new QueryClient();

const WhatsAppButton = () => (
  <a
    href="https://wa.me/244935999463"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
    style={{ backgroundColor: "#25D366" }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8" fill="white">
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.493 2.031 7.807L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.765-1.848l-.485-.287-5 1.193 1.217-4.863-.317-.5A13.253 13.253 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.354-1.161-2.72-1.294-.366-.133-.632-.199-.898.199-.266.398-1.031 1.294-1.264 1.56-.233.266-.465.299-.863.1-.398-.199-1.681-.619-3.202-1.977-1.183-1.056-1.982-2.361-2.215-2.759-.233-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.199-.233.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.199-.898-2.165-1.231-2.963-.324-.778-.653-.672-.898-.684l-.765-.013c-.266 0-.697.1-1.063.498-.366.398-1.396 1.363-1.396 3.323s1.43 3.854 1.629 4.12c.199.266 2.814 4.297 6.818 6.027.953.411 1.696.657 2.276.841.956.305 1.826.262 2.514.159.767-.114 2.354-.962 2.687-1.891.333-.929.333-1.726.233-1.891-.1-.166-.366-.266-.764-.465z"/>
    </svg>
  </a>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quarto/:id" element={<RoomDetail />} />
          <Route path="/reservas" element={<Reservas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
