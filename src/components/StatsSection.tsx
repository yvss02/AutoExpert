import { Car, Star, MessageSquare, FileText } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Car,
      value: "200",
      label: "CARS REVIEWED",
    },
    {
      icon: Star,
      value: "4.5",
      label: "AVG RATING",
    },
    {
      icon: MessageSquare,
      value: "3,500",
      label: "USER REVIEWS",
    },
    {
      icon: FileText,
      value: "250+",
      label: "EXPERT REVIEWS",
    },
  ];

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920')] bg-cover bg-center py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <stat.icon className="w-12 h-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
