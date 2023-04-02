from django.core.exceptions import ValidationError

class MinimumDigitsValidator:
    def __init__(self, min_digits=1):
        self.min_digits = min_digits
    
    def validate(self, password, user=None):
        count = 0
        for char in password:
            if char.isdigit():
                count += 1
        if count < self.min_digits:
            raise ValidationError(f'This password must contain at least {self.min_digits} numerical character(s).')
        
    def get_help_text(self):
        return f'Your password must have at least {self.min_digits} numerical character(s).'

class MinimumSpecialCharsValidator:
    def __init__(self, min_special_chars=1):
        self.min_special_chars = min_special_chars
    
    def validate(self, password, user=None):
        count = 0
        for char in password:
            if not char.isalnum():
                count += 1
        if count < self.min_special_chars:
            raise ValidationError(f'This password must contain at least {self.min_special_chars} special character(s).')
        
    def get_help_text(self):
        return f'Your password must have at least {self.min_special_chars} special character(s).'
