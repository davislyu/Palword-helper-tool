export interface IHeader {
  text: string;
  value: string;
  sortable: boolean;
  align?: "start" | "center" | "end";
  key: string;
  title: string;
}
