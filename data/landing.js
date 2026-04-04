import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "$2B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Darth Vader",
    role: "The Sith Lord",
    image: "/vader.webp", // public/vader.webp
    quote:
      "The receipt scanning feature saves me hours each month. I can finally stop tracking TIE Fighter maintenance manually and focus on hunting Obi-Wan. I find your lack of automated budgeting... disturbing.",
  },
  {
    name: "Monkey D. Luffy",
    role: "Captain of the Straw Hat Pirates",
    image: "/monkeydluffy.webp", // public/monkeydluffy.webp
    quote:
      "I used to spend all our berries on meat and leave Nami angry! But with FinAI, I can track my food expenses and still have enough for the Sunny's repairs. It’s the King of all Finance Apps!",
  },
  {
    name: "Tony Stark",
    role: "Genius, Billionaire, Philanthropist",
    image: "/tonystark.webp", // public/tonystark.webp
    quote:
      "I usually let JARVIS handle the billions, but for my personal 'fun' projects, FinAI's ArcJet protection is the only thing that keeps hackers out of my R&D budget. Clean UI, high tech—I approve.",
  },
];
