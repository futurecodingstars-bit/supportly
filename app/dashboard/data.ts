export type ConversationStatus = "Open" | "Resolved";

export type DashboardConversation = {
  id: string;
  customer: string;
  email: string;
  topic: string;
  status: ConversationStatus;
  time: string;
  initials: string;
};

export type DashboardData = {
  stats: {
    conversations: string;
    aiResolution: string;
    openConversations: string;
    avgResponse: string;
  };
  conversations: DashboardConversation[];
  activity: number[];
  topics: {
    label: string;
    value: number;
  }[];
};

export async function getDashboardData(): Promise<DashboardData> {
  return {
    stats: {
      conversations: "1,284",
      aiResolution: "91%",
      openConversations: "23",
      avgResponse: "18s",
    },
    conversations: [
      {
        id: "conv-001",
        customer: "Olivia Martin",
        email: "olivia@example.com",
        topic: "Shipping",
        status: "Resolved",
        time: "2 min ago",
        initials: "OM",
      },
      {
        id: "conv-002",
        customer: "Marcus Lee",
        email: "marcus@example.com",
        topic: "Refund",
        status: "Open",
        time: "8 min ago",
        initials: "ML",
      },
      {
        id: "conv-003",
        customer: "Sofia Patel",
        email: "sofia@example.com",
        topic: "Billing",
        status: "Resolved",
        time: "14 min ago",
        initials: "SP",
      },
      {
        id: "conv-004",
        customer: "Ethan Brooks",
        email: "ethan@example.com",
        topic: "Order status",
        status: "Open",
        time: "21 min ago",
        initials: "EB",
      },
      {
        id: "conv-005",
        customer: "Liam Chen",
        email: "liam@example.com",
        topic: "Returns",
        status: "Resolved",
        time: "32 min ago",
        initials: "LC",
      },
    ],
    activity: [72, 81, 64, 91, 76, 88, 95],
    topics: [
      { label: "Shipping", value: 38 },
      { label: "Returns", value: 27 },
      { label: "Order status", value: 21 },
      { label: "Other", value: 14 },
    ],
  };
}
