import { Component, Input, effect, forwardRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ]
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() options: any[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() searchable: boolean = false;
  @Input() showValue: boolean = false;

  disabled = signal(false);
  isOpen = signal(false);
  searchTerm = signal('');
  selectedValue = signal<any>(null);
  filteredOptions = signal<any[]>([]);

  private onChange: any = () => { };
  private onTouched: any = () => { };

  constructor() {
    effect(() => {
      if (!this.filteredOptions.length) {
        this.filteredOptions.set([...this.options]);
      }
    })
  }

  writeValue(value: any): void {
    this.selectedValue.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  toggleDropdown(): void {
    if (!this.disabled()) {
      this.isOpen.update(v => !v);
      if (!this.isOpen()) {
        this.searchTerm.set('');
        this.filteredOptions.set([...this.options]);
      }
    }
  }

  filterOptions(): void {
    const search = this.searchTerm().toLowerCase();
    if (!search) {
      this.filteredOptions.set([...this.options]);
    } else {
      this.filteredOptions.set(
        this.options.filter(option =>
          option.label.toLowerCase().includes(search)
        )
      );
    }
  }

  selectOption(option: any): void {
    this.selectedValue.set(option.value);
    this.onChange(option.value);
    this.onTouched();
    this.isOpen.set(false);
    this.searchTerm.set('');
    this.filterOptions();
  }

  getSelectedLabel(): string {
    const selected = this.options.find(opt => opt.value === this.selectedValue());
    return selected ? selected.label : '';
  }

  isSelected(option: any): boolean {
    return this.selectedValue() === option.value;
  }
}