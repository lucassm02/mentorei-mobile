const APP_ID = "@mentorei:";

const makeCollectionName = (name: string) => `${APP_ID}${name}`;

export const Collection = {
  USER: makeCollectionName("user"),
  SHARED: makeCollectionName("shared"),
};
