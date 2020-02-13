export class CheckItem {
  name: string;
  value: any;
  checked: boolean;

  constructor(name: string, value: any, checked?: boolean) {
    this.name = name;
    this.value = value;
    this.checked = checked ? checked : false;
  }
}
