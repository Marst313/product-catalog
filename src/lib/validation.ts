type ReviewForm = {
  name: string;
  email: string;
  rating: string;
};

type ReviewFormErrors = {
  name: string;
  email: string;
  rating: string;
};

export const validateReviewForm = (form: ReviewForm): ReviewFormErrors => {
  return {
    name: form.name.trim() ? "" : "Name is required",
    email: /^\S+@\S+\.\S+$/.test(form.email) ? "" : "Valid email required",
    rating: form.rating ? "" : "Rating is required",
  };
};
