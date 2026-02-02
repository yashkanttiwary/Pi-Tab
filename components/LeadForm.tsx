import React, { useState } from 'react';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Button } from './ui/Button';
import { TrustBadge } from './TrustBadge';
import { LeadFormData, FormErrors } from '../types';

interface LeadFormProps {
  onSuccess: () => void;
  className?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ onSuccess, className = '' }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    parentName: '',
    mobileNumber: '',
    city: '',
    childClass: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const classOptions = [
    'Class 3', 'Class 4', 'Class 5',
    'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.parentName.trim() || formData.parentName.length < 2) {
      newErrors.parentName = 'Please enter a valid name';
      isValid = false;
    }

    // Indian Mobile Number Validation: Optional +91, 6-9 start, 10 digits
    const phoneRegex = /^(?:\+?91[\-\s]?)?[6-9]\d{9}$/;
    if (!formData.mobileNumber.trim() || !phoneRegex.test(formData.mobileNumber.replace(/\s/g, ''))) {
      newErrors.mobileNumber = 'Enter a valid 10-digit mobile number';
      isValid = false;
    }

    if (!formData.city.trim() || formData.city.length < 2) {
      newErrors.city = 'Please enter your city';
      isValid = false;
    }

    if (!formData.childClass) {
      newErrors.childClass = 'Please select a class';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for field on change
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API Call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form Submitted:', formData);
      onSuccess();
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`lead-form-card bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 ${className}`}>
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-slate-900">Book a Free Home Demo</h3>
        <p className="text-slate-600 text-sm mt-2">See Pi Tab in action at your home</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Parent Name"
          name="parentName"
          placeholder="e.g. Rahul Sharma"
          value={formData.parentName}
          onChange={handleChange}
          error={errors.parentName}
          autoComplete="name"
          className="form-input-field"
        />

        <Input
          label="Mobile Number"
          name="mobileNumber"
          type="tel"
          placeholder="e.g. 98765 43210"
          value={formData.mobileNumber}
          onChange={handleChange}
          error={errors.mobileNumber}
          maxLength={15}
          autoComplete="tel"
          inputMode="tel"
          className="form-input-field"
        />

        <Input
          label="City"
          name="city"
          placeholder="e.g. Bangalore"
          value={formData.city}
          onChange={handleChange}
          error={errors.city}
          autoComplete="address-level2"
          className="form-input-field"
        />

        <Select
          label="Child's Class"
          name="childClass"
          options={classOptions}
          value={formData.childClass}
          onChange={handleChange}
          error={errors.childClass}
          placeholder="Select Class"
          className="form-input-field"
        />

        <div className="pt-2">
          <Button type="submit" fullWidth isLoading={isSubmitting}>
            Book Free Demo
          </Button>
        </div>
      </form>
      
      <TrustBadge />
    </div>
  );
};