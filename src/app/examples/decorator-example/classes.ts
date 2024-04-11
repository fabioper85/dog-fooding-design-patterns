import {
  Dish,
  DISH_DRESSING_TYPE_LABELS,
  DISH_TYPE_LABELS,
} from './interfaces';

export class Salad implements Dish {
  private price: number = 5;
  getPrice(): string {
    return `${DISH_TYPE_LABELS.SALAD} (${this.price})`;
  }
}

export class Coffee implements Dish {
  private price: number = 1;
  getPrice(): string {
    return `${DISH_TYPE_LABELS.COFFEE} (${this.price})`;
  }
}

abstract class Decorator implements Dish {
  protected component: Dish;

  constructor(component: Dish) {
    this.component = component;
  }

  getPrice(): string {
    return this.component.getPrice();
  }
}

export class CherryTomatoesAddition extends Decorator {
  private price: number = 2;

  override getPrice(): string {
    return `${super.getPrice()} + ${
      DISH_DRESSING_TYPE_LABELS.PLUS_CHERRY_TOMATOES
    } (${this.price})`;
  }
}

export class MilkAddition extends Decorator {
  private price: number = 1;

  override getPrice(): string {
    return `${super.getPrice()} + ${DISH_DRESSING_TYPE_LABELS.PLUS_MILK} (${
      this.price
    })`;
  }
}

export class ChocolateAddition extends Decorator {
  private price: number = 1.5;

  override getPrice(): string {
    return `${super.getPrice()} + ${
      DISH_DRESSING_TYPE_LABELS.PLUS_CHOCOLATE
    } (${this.price})`;
  }
}

// Uncomment this to add a new decorator
// export class PeanutButterAddition extends Decorator {
//   private price: number = 7;

//   override getPrice(): string {
//     return `${super.getPrice()} + ${
//       DISH_DRESSING_TYPE_LABELS.PLUS_PEANUT_BUTTER
//     } (${this.price})`;
//   }
// }

export class ServiceAddition extends Decorator {
  private price: number = 3;

  override getPrice(): string {
    return `${super.getPrice()} + Servizio (${
      this.price
    }.....si lo so, siamo cari)`;
  }
}
