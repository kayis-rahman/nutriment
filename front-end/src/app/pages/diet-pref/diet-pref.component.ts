import {ChangeDetectionStrategy, Component, OnInit, viewChild} from '@angular/core';
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MealPreference} from '../../modal/MealPreference';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MealPreferenceService} from '../../services/meal-preference.service';
import {NgForOf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-diet-pref',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatIcon,
    MatFormField,
    MatExpansionPanelDescription,
    MatExpansionModule,
    MatInput,
    MatButton,
    ReactiveFormsModule,
    MatGridList,
    MatGridTile,
    MatSelectModule,
    NgForOf
  ],
  templateUrl: './diet-pref.component.html',
  styleUrl: './diet-pref.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DietPrefComponent implements OnInit {
  accordion = viewChild.required(MatAccordion);

  mealPref: MealPreference = {
    uid: '',
  };

  formGroup: FormGroup;

  constructor(
    private mealPrefService: MealPreferenceService,
    private matSnackBar: MatSnackBar
  ) {
    this.formGroup = new FormGroup({
      age: new FormControl(this.mealPref.age),
      gender: new FormControl(this.mealPref.gender),
      activity: new FormControl(this.mealPref.activity),
      workoutDays: new FormControl(this.mealPref.workoutDays),
      dietType: new FormControl(this.mealPref.dietType),
      goal: new FormControl(this.mealPref.goal),
      currentWeight: new FormControl(this.mealPref.currentWeight),
      targetWeight: new FormControl(this.mealPref.targetWeight),
      height: new FormControl(this.mealPref.height),
      allergies: new FormControl(this.mealPref.allergies),
      cuisines: new FormControl(this.mealPref.cuisines),
      budget: new FormControl(this.mealPref.budget),
      mealPerDay: new FormControl(this.mealPref.mealPerDay),
      foodToInclude: new FormControl(this.mealPref.foodToInclude),
      foodToExclude: new FormControl(this.mealPref.foodToExclude),
      allergy: new FormControl(this.mealPref.allergies),
      mealPrepTime: new FormControl(this.mealPref.mealPrepTime),
    })

  }


  ngOnInit(): void {
    this.mealPrefService.get().subscribe(value => {
      this.mealPref = value;
      this.formGroup.controls['age'].setValue(this.mealPref.age);
      this.formGroup.controls['gender'].setValue(this.mealPref.gender);
      this.formGroup.controls['activity'].setValue(this.mealPref.activity);
      this.formGroup.controls['workoutDays'].setValue(this.mealPref.workoutDays);
      this.formGroup.controls['dietType'].setValue(this.mealPref.dietType);
      this.formGroup.controls['goal'].setValue(this.mealPref.goal);
      this.formGroup.controls['currentWeight'].setValue(this.mealPref.currentWeight);
      this.formGroup.controls['targetWeight'].setValue(this.mealPref.targetWeight);
      this.formGroup.controls['height'].setValue(this.mealPref.height);
      this.formGroup.controls['allergies'].setValue(this.mealPref.allergies?.split(","));
      this.formGroup.controls['cuisines'].setValue(this.mealPref.cuisines?.split(","));
      this.formGroup.controls['budget'].setValue(this.mealPref.budget);
      this.formGroup.controls['mealPerDay'].setValue(this.mealPref.mealPerDay);
      this.formGroup.controls['foodToInclude'].setValue(this.mealPref.foodToInclude);
      this.formGroup.controls['foodToExclude'].setValue(this.mealPref.foodToExclude);
      this.formGroup.controls['mealPrepTime'].setValue(this.mealPref.mealPrepTime);
    });

    ;
  }

  saveAll() {
    this.mealPref.height = this.formGroup.controls['height'].value;
    this.mealPref.mealPerDay = this.formGroup.controls['mealPerDay'].value;
    this.mealPref.cuisines = this.formGroup.controls['cuisines'].value.toString();
    this.mealPref.budget = this.formGroup.controls['budget'].value;
    this.mealPref.currentWeight = this.formGroup.controls['currentWeight'].value;
    this.mealPref.targetWeight = this.formGroup.controls['targetWeight'].value;
    this.mealPref.activity = this.formGroup.controls['activity'].value;
    this.mealPref.workoutDays = this.formGroup.controls['workoutDays'].value;
    this.mealPref.goal = this.formGroup.controls['goal'].value;
    this.mealPref.age = this.formGroup.controls['age'].value;
    this.mealPref.gender = this.formGroup.controls['gender'].value;
    this.mealPref.dietType = this.formGroup.controls['dietType'].value;
    this.mealPref.foodToInclude = this.formGroup.controls['foodToInclude'].value;
    this.mealPref.foodToExclude = this.formGroup.controls['foodToExclude'].value;
    this.mealPref.allergies = this.formGroup.controls["allergies"].value.toString();
    this.mealPref.mealPrepTime = this.formGroup.controls['mealPrepTime'].value;

    this.mealPrefService.save(this.mealPref).subscribe(() => {
      this.matSnackBar.open('Meal Preference saved successfully', 'Dismiss', {
        duration: 2000
      })
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  };
}
