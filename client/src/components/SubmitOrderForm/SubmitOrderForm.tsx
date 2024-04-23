import Header from "../Header/Header";
import "./SubmitOrderForm.css";
import { FormElementProps } from "../../models/FormElementProps.model";
import pizzaSpecifications from "../../dummy-data/ingredients.json";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { FoodOrder } from "../../models/FoodOrder.model";
import Button from "../Button/Button";
import FormElement from "../FormElement/FormElement";

const dropDownData = pizzaSpecifications.filter(
  (value) => value.type === "dropdown"
) as FormElementProps[];
const fieldsetData = pizzaSpecifications.filter(
  (value) => value.type === "fieldset"
) as FormElementProps[];

const SubmitOrderForm = () => {
  const [foodOrder, setFoodOrder] = useState<FoodOrder>({
    size: "Small",
    crust: "Classic Crust",
    sauce: "Classic Tomato",
    cheese: "Mozzarella",
    toppings: [],
  });

  const [submittedOrders, setSubmittedOrders] = useState<FoodOrder[]>([]);

  const handleSubmitOrder = (e: any) => {
    e.preventDefault();
    console.log(foodOrder);
    setSubmittedOrders((prevState) => {
      return [foodOrder, ...prevState];
    });
  };

  const handleChangeDropDown = (e: any) => {
    setFoodOrder((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeFieldSet = (e: any) => {
    updateToppings(e.target.name, e.target.checked);
  };

  const updateToppings = (name: string, checked: boolean) => {
    const preExistingToppings = [...foodOrder.toppings];
    if (checked) {
      preExistingToppings.push(name);
      setFoodOrder((prevState) => ({
        ...prevState,
        toppings: preExistingToppings,
      }));
      return;
    }
    preExistingToppings.splice(preExistingToppings.indexOf(name), 1);
    setFoodOrder((prevState) => ({
      ...prevState,
      toppings: preExistingToppings,
    }));
    return;
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmitOrder(e)}>
        <Header size={2} text="Submit Order"></Header>
        <div className="dropdowns-section">
          {dropDownData.map((ingredient) => {
            return (
              <FormElement
                key={uuidv4()}
                labelName={ingredient.labelName}
                type={ingredient.type}
                values={ingredient.values}
                func={(e) => handleChangeDropDown(e)}
                value={
                  ingredient.labelName === "size"
                    ? foodOrder.size
                    : ingredient.labelName === "crust"
                    ? foodOrder.crust
                    : ingredient.labelName === "sauce"
                    ? foodOrder.sauce
                    : foodOrder.cheese
                }
              ></FormElement>
            );
          })}
        </div>
        <div>
          {fieldsetData.map((ingredient) => {
            return (
              <FormElement
                key={uuidv4()}
                labelName={ingredient.labelName}
                type={ingredient.type}
                values={ingredient.values}
                func={(e) => handleChangeFieldSet(e)}
                value={foodOrder.toppings}
              ></FormElement>
            );
          })}
        </div>
        <Button text="Submit" func={(e) => handleSubmitOrder(e)}></Button>
      </form>
    </>
  );
};

export default SubmitOrderForm;
