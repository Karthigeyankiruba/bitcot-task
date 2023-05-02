import * as yup from "yup";
const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

export const signupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6)
    .matches(regex, { message: "Please create a strong password" })
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required(),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6)
    .matches(regex, { message: "Please create a strong password" })
    .required(),
});

export const productGeneralSchema = yup.object().shape({
  productName: yup.string().required("Productname is required"),
  description: yup.string().required("Description is Required"),
  price: yup.string().required("Price is Required"),
  comparePrice: yup.string().required("Compare price is Required"),
  costperItem: yup.string().required("Cost per item is Required"),
  taxRate: yup.string().required("Tax rate is Required"),
  category: yup.string().required("Please select an option"),
  status: yup.string().required("Please select an option"),
});

export const productVariationSchema = yup.object().shape({
  variant1: yup.string().required("Varient is required"),
  variantPrice1: yup.string().required("Price is Required"),
  variantStock1: yup.string().required("stock price is Required"),
  variant2: yup.string().required("Varient is required"),
  variantPrice2: yup.string().required("Price is Required"),
  variantStock2: yup.string().required("stock price is Required"),
});
