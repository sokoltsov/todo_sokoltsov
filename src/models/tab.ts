export enum Tabs {
  All,
  Opened,
  Closed,
}

export interface ITab {
  id: Tabs;
  title: string;
}
