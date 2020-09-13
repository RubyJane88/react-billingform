import * as yup from "yup";

export const schema = yup.object({
  companyName: yup.string().label("Company Name").required(),
});
