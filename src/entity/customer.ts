import Address from "./address";

class Customer {
  private _id: string;
  private _name: string;
  private _address!: Address;
  private _active: boolean = true;

  constructor(id: string, name: string, address: Address, active: boolean = true) {
      this._id = id;
      this._name = name;
      this._address = address;
      this._active = active;

      this.validate();
  }

  validate(): boolean {
    if (this._id.length === 0) {
      throw new Error("ID is required");
    }

    if (this._name.length === 0) {
      throw new Error("Name is required");
    }

    if (this._address === null || this._address === undefined) {
      throw new Error("Address is required");
    }

    return true;
  }

  changeName(name: string): void {
    this._name = name;
    this.validate();
  }

  activate(): void {
    if (this._address === null || this._address === undefined) {
      throw new Error("Address is required to activate a customer");
    }

    this._active = true;
  }

  deactivate(): void {
    this._active = false;
  }
}
