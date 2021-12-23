declare namespace State {
  interface Item {
    name: string;
    fullQuantity: number;
    currentQuantity?: number;
  }
  interface userData {
    fullName: string;
    workplace: string;
    date: string;
  }
}
declare interface State {
  items: State.Item[];
  userData: State.userData;
}
