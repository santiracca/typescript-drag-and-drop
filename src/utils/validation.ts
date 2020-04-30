export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validatable: Validatable) {
  let isValid;
  if (validatable.required) {
    isValid = isValid && validatable.value.toString().trim().length !== 0;
  }
  if (validatable.maxLength != null && typeof validatable.value == "string") {
    isValid = isValid && validatable.value.length < validatable.maxLength;
  }
  if (validatable.minLength != null && typeof validatable.value == "string") {
    isValid = isValid && validatable.value.length > validatable.minLength;
  }
  if (validatable.min != null && typeof validatable.value === "number") {
    isValid = isValid && validatable.value > validatable.min;
  }
  if (validatable.max != null && typeof validatable.value === "number") {
    isValid = isValid && validatable.value < validatable.max;
  }
  return isValid;
}
