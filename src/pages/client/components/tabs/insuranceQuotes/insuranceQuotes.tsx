import { IconPlus } from "@tabler/icons-react";
import { Button, Divider, Label } from "../../../../../shared/components";
import { NotesInfo } from "./components/notesInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import { addNote } from "./store/quotesSlice";
import { uniqueKey } from "../../../../../utils";

export const InsuranceQuotes = () => {
  const state = useSelector((state: RootState) => state.qtotesInfo);
  const dispatch = useDispatch();
  const notesSection = (
    <div className="spouse my-10 flex flex-col  gap-8">
      <Button
        size="lg"
        variant="outlined"
        className="border-primary focus:ring-primary text-primary"
        onClick={() => {
          dispatch(addNote({ index: state.notes.length }));
        }}
      >
        <IconPlus />
        Add Notes
      </Button>
      {state.notes.map((_, i) => {
        return (
          <NotesInfo
            index={i}
            key={uniqueKey(`quote_note_${i}`)}
            itemKey={uniqueKey(`quote_note_${i}`)}
          />
        );
      })}
    </div>
  );

  return (
    <>
      <Label as="h2">Notes</Label>
      <Divider />
      {notesSection}

      {/* <Label as="h2">Folllow-Up Dates</Label>
      <Divider />
      {followUpDatesSection}

      <Label as="h2">Service Requests</Label>
      <Divider />
      {serviceRequestsSection} */}
    </>
  );
};

export default InsuranceQuotes;
