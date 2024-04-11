import {
  Salad,
  Coffee,
  CherryTomatoesAddition,
  ChocolateAddition,
  MilkAddition,
  // PeanutButterAddition,
  ServiceAddition,
} from './classes';

export interface Dish {
  getPrice(): string;
}

export enum DISH_TYPE {
  SALAD = 'SALAD',
  COFFEE = 'COFFEE',
}

export enum DISH_DRESSING_TYPE {
  PLUS_MILK = 'PLUS_MILK',
  PLUS_CHOCOLATE = 'PLUS_CHOCOLATE',
  PLUS_CHERRY_TOMATOES = 'PLUS_CHERRY_TOMATOES',
  // Uncomment this to add a new topping
  // PLUS_PEANUT_BUTTER = 'PLUS_PEANUT_BUTTER',
}

export const DISH_TYPE_LABELS = {
  [DISH_TYPE.SALAD]: 'Insalata',
  [DISH_TYPE.COFFEE]: 'Caffè',
};

export const DISH_DRESSING_TYPE_LABELS = {
  [DISH_DRESSING_TYPE.PLUS_CHERRY_TOMATOES]: 'Pomodori datterini',
  [DISH_DRESSING_TYPE.PLUS_CHOCOLATE]: 'Cioccolata',
  [DISH_DRESSING_TYPE.PLUS_MILK]: 'Latte',
  // Uncomment this to add a new topping label
  // [DISH_DRESSING_TYPE.PLUS_PEANUT_BUTTER]: "Burro d'arachidi",
};

export interface DishDressingOption {
  dish: DISH_TYPE | '0000';
  value: DISH_DRESSING_TYPE | '0000';
  label: string;
  selected: boolean;
}

export interface DishOption {
  value: DISH_TYPE;
  label: string;
  selected: boolean;
}

export type DishDressingOptions = DishDressingOption[];
export type DishOptions = DishOption[];

export type DishComponentTypes = Salad | Coffee;
export type DishDressingDecoratorTypes =
  | MilkAddition
  | ServiceAddition
  | CherryTomatoesAddition
  | ChocolateAddition;
// | PeanutButterAddition;
