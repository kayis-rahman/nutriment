import {Component} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {Meal} from '../../modal/Meal';
import {DietService} from '../../services/diet.service';
import {MatIcon} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: 'app-diet-generator',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatCardTitle,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatIcon,
    MatIconButton,
    MatTooltipModule,
    MatFooterCell,
    MatFooterRow,
    MatFooterRowDef,
    MatFooterCellDef
  ],
  templateUrl: './diet-generator.component.html',
  styleUrl: './diet-generator.component.scss'
})
export class DietGeneratorComponent {
  displayedColumns: string[] = [
    'day', 'mealType', 'description', 'calories', 'protein', 'carbs', 'fats', 'prepTime'
  ];

  dataSource: Meal[] = new Array<Meal>();

  constructor(private dietService: DietService) {
  }

  generateDiet() {
    this.dietService.generate().subscribe(value => {
      this.dataSource = value;
    })
  }
}
