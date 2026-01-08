export default class Address {
    private _street: string;
    private _city: string;
    private _zipCode: string;

    constructor(street: string, city: string, zipCode: string) {
        this._street = street;
        this._city = city;
        this._zipCode = zipCode;

        this.validate();
    }

    validate(): boolean {
        if (this._street.length === 0) {
            throw new Error("Street is required");
        }

        if (this._city.length === 0) {
            throw new Error("City is required");
        }

        if (this._zipCode.length === 0) {
            throw new Error("Zip Code is required");
        }
        
        return true;
    }
}