
import { Monitor, Sparkles, Heart, Briefcase, Home, Wallet } from "lucide-react";

export const categories = [
  {
    id: "gaming",
    name: "Gaming",
    tagline: "Performance-focused gaming stations",
    icon: <Monitor className="w-5 h-5" />,
    count: 0,
  },
  {
    id: "minimal",
    name: "Minimal",
    tagline: "Clean and clutter-free design",
    icon: <Sparkles className="w-5 h-5" />,
    count: 0,
  },
  {
    id: "cute",
    name: "Cute",
    tagline: "Adorable, warm, and full of charm",
    icon: <Heart className="w-5 h-5" />,
    count: 0,
  },
  {
    id: "functional",
    name: "Functional",
    tagline: "Highly practical workspaces",
    icon: <Briefcase className="w-5 h-5" />,
    count: 0,
  },
  {
    id: "modern",
    name: "Modern Office",
    tagline: "Sleek and professional setups",
    icon: <Home className="w-5 h-5" />,
    count: 0,
  },
  {
    id: "budget",
    name: "Budget",
    tagline: "Affordable yet productive setups",
    icon: <Wallet className="w-5 h-5" />,
    count: 0,
  },
];
