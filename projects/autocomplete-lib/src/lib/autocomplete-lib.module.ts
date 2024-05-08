import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from './autocomplete.component';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [AutocompleteComponent, HighlightPipe],
  exports: [ AutocompleteComponent, HighlightPipe]
})
export class AutocompleteLibModule {
}
