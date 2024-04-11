import { Component } from '@angular/core';
import { StructuralPgDescComponent } from '../../shared/structural-pg-desc/structural-pg-desc.component';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DishDressingOptions,
  DishOptions,
  DISH_DRESSING_TYPE,
  DISH_TYPE,
  DISH_TYPE_LABELS,
  DISH_DRESSING_TYPE_LABELS,
  DishComponentTypes,
  DishDressingDecoratorTypes,
} from './interfaces';
import {
  CherryTomatoesAddition,
  ServiceAddition,
  Coffee,
  MilkAddition,
  Salad,
  ChocolateAddition,
  // PeanutButterAddition,
} from './classes';
import { ExampleLinkComponent } from '../../shared/example-link/example-link.component';
import { EXAMPLE_TYPE } from '../../types';

@Component({
  selector: 'decorator-example',
  standalone: true,
  imports: [
    StructuralPgDescComponent,
    CommonModule,
    FormsModule,
    ExampleLinkComponent,
  ],
  templateUrl: './decorator-example.component.html',
  styleUrl: './decorator-example.component.css',
})
export class DecoratorExampleComponent implements OnInit {
  exampleType: EXAMPLE_TYPE = EXAMPLE_TYPE.DECORATOR;
  dishOps: DishOptions = [
    { value: DISH_TYPE.SALAD, label: DISH_TYPE_LABELS.SALAD, selected: true },
    {
      value: DISH_TYPE.COFFEE,
      label: DISH_TYPE_LABELS.COFFEE,
      selected: false,
    },
  ];

  currentDishDressingOps: DishDressingOptions = [];
  dishDressingOps: DishDressingOptions = [
    {
      dish: DISH_TYPE.SALAD,
      value: DISH_DRESSING_TYPE.PLUS_CHERRY_TOMATOES,
      label: DISH_DRESSING_TYPE_LABELS.PLUS_CHERRY_TOMATOES,
      selected: false,
    },
    {
      dish: DISH_TYPE.COFFEE,
      value: DISH_DRESSING_TYPE.PLUS_MILK,
      label: DISH_DRESSING_TYPE_LABELS.PLUS_MILK,
      selected: false,
    },
    // {
    //   dish: DISH_TYPE.COFFEE,
    //   value: DISH_DRESSING_TYPE.PLUS_PEANUT_BUTTER,
    //   label: DISH_DRESSING_TYPE_LABELS.PLUS_PEANUT_BUTTER,
    //   selected: false,
    // },
    {
      dish: DISH_TYPE.COFFEE,
      value: DISH_DRESSING_TYPE.PLUS_CHOCOLATE,
      label: DISH_DRESSING_TYPE_LABELS.PLUS_CHOCOLATE,
      selected: false,
    },
  ];

  selectedDish: string = this.dishOps.filter((d) => d.selected)![0].value;
  selectedDishDressing: string | null = null;

  dishComponent?: DishComponentTypes;
  dishDressingDecorator?: DishDressingDecoratorTypes;
  totalPrice?: string;

  ngOnInit() {
    this.createDishComponent();
    this.updateDishDressingOps();
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   this.createDishComponent();
  //   this.updateDishDressingOps();
  // }

  private createDishComponent() {
    switch (this.selectedDish) {
      case DISH_TYPE.SALAD:
        this.dishComponent = new Salad();
        break;
      case DISH_TYPE.COFFEE:
        this.dishComponent = new Coffee();
        break;
    }

    this.selectedDishDressing = null;
    this.updateDishDressingOps();
    this.updateTotal();
  }

  onDishChange(event: any) {
    console.log(event.target.value, this.selectedDish);

    this.createDishComponent();
    this.updateDishDressingOps();
  }

  onDishDressingChange(event: any) {
    this.updateDishDressing();
  }

  private updateDishDressingOps() {
    if (!this.selectedDish) {
      return;
    }

    this.currentDishDressingOps = this.dishDressingOps.filter(
      (dd) => dd.dish === this.selectedDish
    );

    if (!this.currentDishDressingOps.length) {
      return;
    }

    this.currentDishDressingOps.unshift({
      dish: '0000',
      value: '0000',
      selected: true,
      label: 'Nessuna selezione',
    });

    // if (!this.currentDishDressingOps.some((cddo) => cddo.selected)) {
    //   this.currentDishDressingOps[0].selected = true;
    // }

    if (!this.selectedDishDressing) {
      this.selectedDishDressing = this.currentDishDressingOps.find(
        (p) => p.selected
      )!.value;
    }

    this.updateDishDressing();
  }

  private updateDishDressing() {
    if (this.selectedDishDressing) {
      switch (this.selectedDishDressing) {
        case DISH_DRESSING_TYPE.PLUS_CHERRY_TOMATOES:
          this.dishDressingDecorator = new CherryTomatoesAddition(
            this.dishComponent!
          );
          break;
        case DISH_DRESSING_TYPE.PLUS_MILK:
          this.dishDressingDecorator = new MilkAddition(this.dishComponent!);
          break;
        case DISH_DRESSING_TYPE.PLUS_CHOCOLATE:
          this.dishDressingDecorator = new ChocolateAddition(
            this.dishComponent!
          );
          break;
        // Uncomment this to add a new decorator
        // case DISH_DRESSING_TYPE.PLUS_PEANUT_BUTTER:
        //   this.dishDressingDecorator = new PeanutButterAddition(
        //     this.dishComponent!
        //   );
        //   break;
        default:
          this.dishDressingDecorator = undefined;
          break;
      }
    }

    this.updateTotal();
  }

  updateTotal() {
    let totalComponent = this.dishDressingDecorator
      ? new ServiceAddition(this.dishDressingDecorator)
      : this.dishComponent
      ? new ServiceAddition(this.dishComponent)
      : null;

    this.totalPrice = totalComponent?.getPrice() || '0';
  }
}
