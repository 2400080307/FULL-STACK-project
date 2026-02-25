export interface DashboardColor {
    bg: string;
    text: string;
    border: string;
}

export const colorMap: Record<string, DashboardColor> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-500" },
    green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-500" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-500" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-500" },
};

export const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
        case "published":
        case "active":
        case "completed":
            return "text-green-700 bg-green-100";
        case "pending":
        case "draft":
        case "upcoming":
            return "text-yellow-700 bg-yellow-100";
        case "rejected":
        case "inactive":
        case "cancelled":
            return "text-red-700 bg-red-100";
        case "scheduled":
            return "text-purple-700 bg-purple-100";
        default:
            return "text-gray-700 bg-gray-100";
    }
};
