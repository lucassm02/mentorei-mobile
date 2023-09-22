type Meeting = {
  mentor: {
    name: string;
    rating: number;
  };
  date: string;
  hour: string;
  link: string;
};

export type UserCollection = {
  id: string;
  name: string;
  token: string;
  userType?: "MENTEE" | "MENTOR";
};

export type SharedCollection = Record<string, { meetings: Meeting[] }>;
