export type CardProps = {
  id: string;
  name: string;
  rating: number;
  onPress?: (id: string) => void;
};
