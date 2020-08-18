import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, Button } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const OrderForm = () => {

//set dropdown menu components
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        size: "",
        sauce: "",
        protein: "",
        pineapple: false,
        onion: false,
        pepper: false,
        mushrooms: false,
        olives: false,
        special: ""
    })

// set button function to validate input is submitted
    const [buttonDisabled, setButtonDisabled] = useState(true);

// making button enabled when form is validated and submitted           
useEffect(() => {
    schema.isValid(formData).then((valid) => {
        setButtonDisabled(!valid);
    });
}, [formData]);

// set final ordering state
    const [post, setPost] = useState([]);

// set errors
    const [errors, setErrors] = useState({
        name: "",
        size: "",
        sauce: "",
        protein: "",
        pineapple: false,
        onion: false,
        pepper: false,
        mushrooms: false,
        olives: false,
        special: ""
    })

// inline validation with yup
const validateChange = (e) => {
    yup
    .reach(schema, e.target.name)
    .validate(e.target.value)
    .then((valid) => {
        setErrors({
        ...errors,
        [e.target.errors]: ""
        })
    })
    .catch((err) => {
        console.log(err);
        setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
        })
    })
}
// validation using schema
    const schema = yup.object().shape({
        name: yup.string().required("Full Name Required").min(2),
        size: yup.string().required("Must specify pizza size"),
        sauce: yup.string().required(),
        protein: yup.string().required(),
        pineapple: yup.boolean(),
        onion: yup.boolean(),
        pepper: yup.boolean(),
        mushrooms: yup.boolean(),
        olives: yup.boolean(),
        special: yup.string(),
    });

// submit form 
    const formSubmit = (e) => {
        e.preventDefault();
        schema.validate(formData).then(() => {
            axios
            .post('https://reqres.in/api/users', formData)
            .then((response) => {
                console.log(response.data, "this is your posted data")
                //reset information of the form
                setFormData({
                    name: "",
                    size: "",
                    sauce: "",
                    protein: "",
                    pineapple: false,
                    onion: false,
                    pepper: false,
                    mushrooms: false,
                    olives: false,
                    special: "",
                });
            })
            .catch(err => console.log(err.response));

    });
  };

// handling change of form component
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value });
    };
    const handleToppings = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };
    const toggle = (e) => setDropdownOpen((prevState) => !prevState);

    return (
        <>
        <Card color='danger'>
            <h2 style={{color: 'white', textAlign: 'center'}}>
                Let's Build Your Pizza!
            </h2>
            <CardImg style={{width: '100%', margin: '0 auto'}} src={require('./Assets/Pizza.jpg')}/>
        </Card>
        <Form data-cy='submit' onSubmit={formSubmit} style={{ margin: '20px auto', width: '50%'}}>
        <FormGroup>
            <legend>Name</legend>
            <Input 
                type='name' 
                name='name' 
                data-cy='name'
                value={formData.name}
                onChange={handleChange}
            />
        </FormGroup>

        {/* new group to select pizza size */}

        <FormGroup>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {formData.size === 0 ? "Select Your Pizza Size" : formData.size}
                </DropdownToggle>
                <DropdownMenu>
                    <div onClick={() => {
                        toggle();
                        setFormData({ ...formData, size: "Select Your Pizza Size" });
                        }}
                    >
                        --Pizza Size Available--
                    </div>
                    <div
                        onClick={() => {
                        toggle();
                        setFormData({ ...formData, size: "Small" });
                        }}
                    >
                        Small
                    </div>
                    <div
                        onClick={() => {
                        toggle();
                        setFormData({ ...formData, size: "Medium" });
                        }}
                    >
                        Medium
                    </div>
                    <div
                        onClick={() => {
                        toggle();
                        setFormData({ ...formData, size: "Large" });
                        }}
                    >
                        Large
                    </div>
                    <div
                        onClick={() => {
                        toggle();
                        setFormData({ ...formData, size: "Extra-Large" });
                        }}
                    >
                        Extra Large
                    </div>
                </DropdownMenu>
            </Dropdown>
        </FormGroup>

        {/* New group to select type of sauce */}

        <FormGroup tag="fieldset">
          <legend>Sauce</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value={formData.sauce}
                onChange={handleChange}
              />
              Marinara Red
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value={formData.sauce}
                onChange={handleChange}
              />
              Garlic Ranch
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value={formData.sauce}
                onChange={handleChange}
              />
              Tangy BBQ
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="sauce"
                value={formData.sauce}
                onChange={handleChange}
              />
              White Alfredo
            </Label>
          </FormGroup>
        </FormGroup>

        {/* New group for protein selection */}

        <FormGroup tag="fieldset">
          <legend>Protein</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="protein"
                value={formData.protein}
                onChange={handleChange}
              />
              Beef
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="protein"
                value={formData.protein}
                onChange={handleChange}
              />
              Chicken
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="protein"
                value={formData.protein}
                onChange={handleChange}
              />
              Pork
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="protein"
                value={formData.protein}
                onChange={handleChange}
              />
              Pepperoni
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="protein"
                value={formData.protein}
                onChange={handleChange}
              />
              Sausage
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="protein"
                value={formData.protein}
                onChange={handleChange}
              />
              Bacon
            </Label>
          </FormGroup>
        </FormGroup>

        {/* form for the toppings */}

        <FormGroup tag="fieldset">
          <legend>Toppings</legend>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="pineapple"
                checked={formData.pineapple}
                onChange={handleToppings}
                data-cy="checkbox1"
              />
              Pineapple
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="onion"
                checked={formData.onion}
                onChange={handleToppings}
                data-cy="checkbox2"
              />
              Onion
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="pepper"
                checked={formData.pepper}
                onChange={handleToppings}
                data-cy="checkbox3"
              />
              Green Pepper
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="mushrooms"
                checked={formData.mushrooms}
                onChange={handleToppings}
                data-cy="checkbox4"
              />
              Sliced Mushrooms
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="olives"
                checked={formData.olives}
                onChange={handleToppings}
                data-cy="checkbox5"
              />
              Olives
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <legend>Special Instructions</legend>
          <Input
            type="textarea"
            name="special"
            value={formData.special}
            onChange={handleChange}
          />
        </FormGroup>
        <Link to={'/PizzaParty'}>
        <Button color='success' size='sm' isabled={buttonDisabled} type="submit">Submit</Button>
        </Link>
        <pre>{JSON.stringify(post, null, 2)}</pre>
      </Form>
    </>
  );
};

export default OrderForm;