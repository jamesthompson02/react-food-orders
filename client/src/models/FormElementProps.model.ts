export interface FormElementProps {
  type: "dropdown" | "fieldset";
  labelName: string;
  values: string[];
  value?: any;
  func: (e?: any) => any;
}
