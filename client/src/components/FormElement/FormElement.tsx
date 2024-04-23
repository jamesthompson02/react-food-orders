import { FormElementProps } from "../../models/FormElementProps.model";
import Header from "../Header/Header";
import "./FormElement.css";
import { v4 as uuidv4 } from "uuid";

const FormElement = ({
  type,
  labelName,
  value,
  values,
  func,
}: FormElementProps) => {
  if (type === "fieldset") {
    return (
      <>
        <Header size={4} text={labelName}></Header>

        <fieldset
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(4, 1fr)`,
            gridTemplateRows: `repeat(${Math.ceil(values.length / 4)},1fr)`,
            rowGap: "0.5rem",
          }}
        >
          {values.map((val) => {
            return (
              <label key={uuidv4()}>
                <span>{val}</span>
                <input
                  type="checkbox"
                  name={val}
                  checked={value.includes(val)}
                  onChange={(e) => func(e)}
                ></input>
              </label>
            );
          })}
        </fieldset>
      </>
    );
  }
  return (
    <>
      <label>
        <span>{labelName}:</span>
        <select
          name={labelName}
          value={value}
          onChange={(e) => {
            func(e);
          }}
        >
          {values.map((value) => {
            return (
              <option value={value} key={uuidv4()}>
                {value}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
};

export default FormElement;
