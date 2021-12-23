import { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useDispatch } from "react-redux";
import { updatePersonalAction } from "../redux/slices/paramedicSlice";
import { useNavigate } from "react-router-dom";
export default function UserDataForm() {
  const dispacth = useDispatch();
  const [value, setValue] = useState<Date | null>(null);
  const fullNameInput = useRef<HTMLInputElement>(null);
  const workplaceInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function sendParamedicInfo() {
    console.log(fullNameInput.current, workplaceInput.current && value);
    if (fullNameInput.current && workplaceInput.current) {
      const fullNameValue = fullNameInput.current.value;
      const workplaceValue = workplaceInput.current.value;
      console.log(typeof value);
      dispacth(
        updatePersonalAction({
          fullName: fullNameValue,
          workplace: workplaceValue,
          date: String(value),
        })
      );
      navigate("/items", { replace: true });
    }
    return;
  }
  return (
    <div>
      <TextField
        inputRef={fullNameInput}
        id="fullNameInput"
        label="Full Name"
        variant="standard"
      />
      <TextField
        inputRef={workplaceInput}
        id="workplaceInput"
        label="Work Place"
        variant="standard"
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button
        onClick={() => {
          sendParamedicInfo();
        }}
        variant="contained"
        color="success"
      >
        Move To Register Items
      </Button>
    </div>
  );
}
