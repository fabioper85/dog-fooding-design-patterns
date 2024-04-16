export interface ICompany {
    calculate: (packageToShip: IPackage) => void;
}

export interface IOrder {
    from: string;
    to: string;
    weight: number;
}

export interface IPackage {
    orders: IOrder[];
}

export class UPS implements ICompany {
    calculate(packageToShip: IPackage) {
        // calculations...
        return "$45.95";
    }
};

export class Fedex implements ICompany {
    calculate(packageToShip: IPackage) {
        // calculations...
        return "$43.20";
    }
};

export class Shipping {
    company?: ICompany;

    setStrategy(company: ICompany) {
        this.company = company;
    }

    calculate(packageToShip: IPackage) {
        return this.company?.calculate(packageToShip);
    }
}
