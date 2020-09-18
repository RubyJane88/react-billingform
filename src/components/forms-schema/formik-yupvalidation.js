import * as yup from "yup";

export const schema = yup.object({
  companyName: yup.string().label("This  ").required(),
  fullName: yup.string().label("This").required(),
  country: yup
    .object({
      code: yup.string().label("code").notRequired().nullable(),
      label: yup.string().label("label").notRequired().nullable(),
      phone: yup.string().label("phone").notRequired().nullable(),
    })
    .label("Country")
    .notRequired()
    .nullable(),
  region: yup.string().label("This ").required(),
  address: yup.string().label("This ").required(),
  city: yup.string().label("This ").required(),
  zipCode: yup.string().label("This ").required(),
  vatId: yup.string().label("This ").required(),
});
