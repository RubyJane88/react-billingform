import * as yup from "yup";

export const schema = yup.object({
  companyName: yup.string().label("Company Name").required(),
  fullName: yup.string().label("Full Name").required(),
  country: yup
    .object({
      code: yup.string().label("code").notRequired().nullable(),
      label: yup.string().label("label").notRequired().nullable(),
      phone: yup.string().label("phone").notRequired().nullable(),
    })
    .label("Country")
    .notRequired()
    .nullable(),
  region: yup.string().label("Region/State/Province").required(),
  address: yup.string().label("Address").required(),
  city: yup.string().label("City").required(),
  zipCode: yup.string().label("Zip Code").required(),
  vatId: yup.string().label("Vat Id").required(),
});
