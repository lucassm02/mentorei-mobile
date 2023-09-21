export interface CardProps {
  text: string;
  selected?: boolean;
  id: string | number;
  onPress?: (id: string | number) => void;
}

type Callback =
  | ((ids: string[]) => void)
  | ((ids: number[]) => void)
  | ((ids: Array<number | string>) => void);

export interface FormProps {
  onSelected?: Callback;
  data: Array<Array<Pick<CardProps, "text" | "id">>>;
}
