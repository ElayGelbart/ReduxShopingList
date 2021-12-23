import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItemsAction } from "../redux/slices/paramedicSlice";

export default function ItemDataForm() {
  const currentQClass = useRef<HTMLTableSectionElement>(null);
  const [NewItemsArray, setNewItem] = useState<JSX.Element[]>([]);
  const ItemNameInput = useRef<HTMLInputElement>(null);
  const FullQuantityInput = useRef<HTMLInputElement>(null);
  const CurrentQuantityInput = useRef<HTMLInputElement>(null);
  const state = useSelector<State, State>((state) => state);
  const dispatch = useDispatch();

  const addItemToTable = () => {
    const JSXItemElement = (
      <TableRow
        key={ItemNameInput.current?.value}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {ItemNameInput.current?.value}
        </TableCell>
        <TableCell align="right">{FullQuantityInput.current?.value}</TableCell>
        <TableCell className="currentQ" align="right">
          {
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              defaultValue={CurrentQuantityInput.current?.value}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
          }
        </TableCell>
      </TableRow>
    );
    setNewItem((prevState) => [...prevState, JSXItemElement]);
  };

  function sendDataToServer() {
    if (currentQClass.current) {
      const Items: State.Item[] = [];
      for (const tr of currentQClass.current.children) {
        const itemObj: State.Item = {
          name: "",
          fullQuantity: 0,
          currentQuantity: 0,
        };
        console.log(tr.className);
        if (tr.className.match(/InputRow/)) {
          continue;
        }
        itemObj.name = String(tr.children[0].textContent);
        itemObj.fullQuantity = Number(tr.children[1].textContent);
        const InputElement: Partial<HTMLInputElement> =
          tr.children[2].children[0].children[1].children[0];
        itemObj.currentQuantity = Number(InputElement.value);
        Items.push(itemObj);
      }
      console.log(Items, "items");
      dispatch(updateItemsAction(Items));
    }
  }

  useEffect(() => {
    console.log(state);
    // get the right State
  }, [state]);
  return (
    <div>
      <h1>Hello {state.userData.fullName}</h1>
      <h4>Please fill the current quantity</h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Full Quantity</TableCell>
              <TableCell align="right">Current Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody ref={currentQClass}>
            {state.items.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.fullQuantity}</TableCell>
                <TableCell className="currentQ" align="right">
                  {
                    <TextField
                      id="standard-number"
                      label="Number"
                      type="number"
                      defaultValue={0}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                    />
                  }
                </TableCell>
              </TableRow>
            ))}
            {NewItemsArray}
            <TableRow
              className="InputRow"
              key="add Item"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {" "}
                {
                  <TextField
                    id="standard-number"
                    label="Item Name"
                    inputRef={ItemNameInput}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                  />
                }
              </TableCell>
              <TableCell align="right">
                {
                  <TextField
                    id="standard-number"
                    label="Full Quantity"
                    inputRef={FullQuantityInput}
                    type="number"
                    defaultValue={0}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                  />
                }
              </TableCell>
              <TableCell className="currentQ" align="right">
                {
                  <TextField
                    id="standard-number"
                    label="Current Quantity"
                    inputRef={CurrentQuantityInput}
                    type="number"
                    defaultValue={0}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                  />
                }
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => {
          sendDataToServer();
        }}
        variant="contained"
        color="success"
      >
        Send Quantity To Server
      </Button>
      <Button
        onClick={() => {
          addItemToTable();
        }}
        variant="contained"
        color="success"
      >
        Add Item To Table
      </Button>
    </div>
  );
}
