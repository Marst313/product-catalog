import { useState } from "react";
import { toast } from "sonner";
import { validateReviewForm } from "@/lib/validation";

export const useReviewForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    rating: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateReviewForm(form);
    setErrors(newErrors);

    const isValid = !Object.values(newErrors).some(Boolean);
    if (!isValid) return;

    toast.success("Review submitted successfully!");
    setForm({ name: "", email: "", rating: "", comment: "" });
    setErrors({ name: "", email: "", rating: "" });
  };

  return { form, errors, handleChange, handleSubmit };
};
