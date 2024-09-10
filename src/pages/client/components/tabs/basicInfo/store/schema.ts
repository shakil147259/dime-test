import * as Yup from "yup";
import { BasicInfoShape } from "./types";

export const basicInfoSchema = Yup.object<BasicInfoShape>().shape({
  firstName: Yup.string().required("Name is required"),
  emailAddress: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
});
