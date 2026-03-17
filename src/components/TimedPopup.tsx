import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const CONSULTATION_URL = "https://adbullet.co.in/Adbullet-Purchase/index.php";

const TimedPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md border-gold/40 bg-navy-deep">
        <DialogHeader>
          <div className="mb-3 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold px-4 py-2 gold-glow">
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="text-gradient-gold text-sm font-bold">
                {"Book a call"}
              </span>
            </div>
          </div>
          <DialogTitle className="text-center font-display text-2xl font-extrabold text-foreground">
            Book Your Strategy Call
          </DialogTitle>
        </DialogHeader>

        <a
          href={CONSULTATION_URL}
          className="mt-2 block w-full rounded-xl bg-primary px-6 py-3 text-center text-base font-bold text-primary-foreground transition-colors hover:bg-purple-light"
        >
          Book Your Strategy Call
        </a>
      </DialogContent>
    </Dialog>
  );
};

export default TimedPopup;
