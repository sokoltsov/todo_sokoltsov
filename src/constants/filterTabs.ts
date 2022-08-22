import { ITab, Tabs } from "../models/tab";

export const tabs: ITab[] = [
  {id: Tabs.All, title: "Все"},
  {id: Tabs.Closed, title: "Закрытые"},
  {id: Tabs.Opened, title: "Открытые"},
];

export const tabNames: {[key in Tabs]: string} = {
  [Tabs.All]: "Все",
  [Tabs.Closed]: "Закрытые",
  [Tabs.Opened]: "Открытые",
};
