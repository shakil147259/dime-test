import { Divider, Label, Select } from "../../../../../shared/components";

export const Compliance = () => {
  const consentSection = (
    <div className="spouse my-10 flex flex-col  gap-8">
      <div className="flex flex-row gap-3">
        <Select
          label="Consent for Data Storage"
          className="uppercase"
          options={[
            { label: "Married", value: "m" },
            { label: "Unmarried", value: "u" },
          ]}
        />
        <Select
          label="GDPR Compliance Status"
          className="uppercase"
          options={[
            { label: "Married", value: "m" },
            { label: "Unmarried", value: "u" },
          ]}
        />
      </div>
    </div>
  );

  return (
    <>
      <Label as="h2">Consent and Compliance</Label>
      <Divider />
      {consentSection}
    </>
  );
};

export default Compliance;
