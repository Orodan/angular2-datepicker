import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent }  from './src/datepicker.component';

@NgModule({
    imports: [FormsModule],
    declarations: [DatePickerComponent],
    exports: [DatePickerComponent]
})
export class DatePickerModule { }
