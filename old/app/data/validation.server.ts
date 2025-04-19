type ExpenseInput = {
  title: string;
  amount: string;
  date: string;
};

type CredentialsInput = {
  email: string;
  password: string;
};

type ValidationErrors = {
  [key: string]: string;
};

// ----- Валидации -----

function isValidTitle(value: string): boolean {
  return value.trim().length > 0 && value.trim().length <= 30;
}

function isValidAmount(value: string): boolean {
  const amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
}

function isValidDate(value: string): boolean {
  return Boolean(value) && new Date(value).getTime() < new Date().getTime();
}

function isValidEmail(value: string): boolean {
  return value.trim().length > 0 && value.includes('@');
}

function isValidPassword(value: string): boolean {
  return value.trim().length >= 7;
}

// ----- Экспортируемые функции -----

export function validateExpenseInput(input: ExpenseInput): void {
  const validationErrors: ValidationErrors = {};

  if (!isValidTitle(input.title)) {
    validationErrors.title = 'Invalid expense title. Must be at most 30 characters long.';
  }

  if (!isValidAmount(input.amount)) {
    validationErrors.amount = 'Invalid amount. Must be a number greater than zero.';
  }

  if (!isValidDate(input.date)) {
    validationErrors.date = 'Invalid date. Must be a date before today.';
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}

export function validateCredentials(input: CredentialsInput): void {
  const validationErrors: ValidationErrors = {};

  if (!isValidEmail(input.email)) {
    validationErrors.email = 'Invalid email address.';
  }

  if (!isValidPassword(input.password)) {
    validationErrors.password = 'Invalid password. Must be at least 7 characters long.';
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
