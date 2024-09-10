import * as Yup from "yup";
import { InsuranceShape } from "./types";

export const insuranceInfoSchema = Yup.object<InsuranceShape>().shape({
  policyNumber: Yup.string().required("Policy number is required"),
});
