export type CardProps = {
  id: string;
  name: string;
  imageUrl: string;
  onPress?: (id: string) => void;
};

export type Props = { data: CardProps[]; title: string; highlight?: string[] };
