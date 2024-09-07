import { IconPlus } from "@tabler/icons-react";
import { Button, Divider, Label } from "../../../../../shared/components";
import { uniqueKey } from "../../../../../utils";
import { ReactNode, useState } from "react";
import { NotesInfo } from "./components/notesInfo";
import { FollowUpDatesInfo } from "./components/followUpDatesInfo";
import { ServiceRequestsInfo } from "./components/serviceRequestsInfo";

export const InsuranceQuotes = () => {
  const [notes, setNotes] = useState<ReactNode[]>([]);
  const [followUpDate, setFollowUpDate] = useState<ReactNode[]>([]);
  const [serviceRequests, setServiceRequests] = useState<ReactNode[]>([]);

  const removeNotes = (indexToRemove: number) => {
    setNotes((prevNotes) =>
      prevNotes.filter((_, index) => index !== indexToRemove)
    );
  };

  const removeFollowUpDate = (indexToRemove: number) => {
    setFollowUpDate((prevFollsetFollowUpDate) =>
      prevFollsetFollowUpDate.filter((_, index) => index !== indexToRemove)
    );
  };

  const removeServiceRequests = (indexToRemove: number) => {
    setServiceRequests((prevServiceRequests) =>
      prevServiceRequests.filter((_, index) => index !== indexToRemove)
    );
  };

  const notesSection = (
    <div className="spouse my-10 flex flex-col  gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          setNotes((prev) => {
            const index = notes.length + 1;
            return [
              ...prev,
              <NotesInfo
                index={index}
                remove={removeNotes}
                key={uniqueKey(`beneficiaries-${index}`)}
              />,
            ];
          });
        }}
      >
        <IconPlus />
        Add Notes
      </Button>
      {notes.map((item) => {
        return item;
      })}
    </div>
  );

  const followUpDatesSection = (
    <div className="children my-10 flex flex-col  gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          setFollowUpDate((prev) => {
            const index = followUpDate.length + 1;
            return [
              ...prev,
              <FollowUpDatesInfo
                index={index}
                remove={removeFollowUpDate}
                key={uniqueKey(`beneficiaries-${index}`)}
              />,
            ];
          });
        }}
      >
        <IconPlus />
        Add Follow-Up Dates
      </Button>
      {followUpDate.map((item) => {
        return item;
      })}
    </div>
  );

  const serviceRequestsSection = (
    <div className="children my-10 flex flex-col  gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          setServiceRequests((prev) => {
            const index = serviceRequests.length + 1;
            return [
              ...prev,
              <ServiceRequestsInfo
                index={index}
                remove={removeServiceRequests}
                key={uniqueKey(`immportantDates-${index}`)}
              />,
            ];
          });
        }}
      >
        <IconPlus />
        Add Service Requests
      </Button>
      {serviceRequests.map((item) => {
        return item;
      })}
    </div>
  );
  return (
    <>
      <Label as="h2">Notes</Label>
      <Divider />
      {notesSection}

      <Label as="h2">Folllow-Up Dates</Label>
      <Divider />
      {followUpDatesSection}

      <Label as="h2">Service Requests</Label>
      <Divider />
      {serviceRequestsSection}
    </>
  );
};

export default InsuranceQuotes;
