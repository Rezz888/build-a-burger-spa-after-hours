import React from 'react';
import * as yup from 'yup';
import styled from "styled-component";

const defaultFormState = {
    name: "",
    phone: "",
    bun: "sesame seed",
    patties: "1",
    condiments: {
        ketchup: false,
        mustard: false,
        mayonaise: false,
        barbecue: false,
        lettuce: false,
        onion: false,
        cheese: false,
        bacon: false
    },
    instructions: ""
}

const defaultErrorState = {
    name: '',
    phone: ''
}

const BurgerForm = props => {
    const [formState, setFormState] = useState(defaultFormState);
    const [errors, setErrors] = useState(defaultErrorState);
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <div>
            <label>
                Name
                <input type='text' name='name' onChange={handleChange} value={formState.name} data-cy='name' />
            </label>
            <label>
                Phone Number
                <input type='tel' name='phone' onChange={handleChange} value={formState.phone} data-cy='phone' />
            </label>

            <label>
                Select Bun
                <select name="bun" data-cy='bun' defaultValue='Sesame Seed' onChange={handleChange}>
                   <option value="Sesame Seed">Sesame Seed</option> 
                   <option value="Pretzel">Pretzel</option>
                   <option value="Brioche">Brioche</option>
                   <option value="Clabatta">Clabatta</option>
                   <option value="Kaiser Roll">Kaiser Roll</option>

                </select>
            </label>
            
            <fieldset>
                <label>
                    <input type='' name='' onChange={handleChange} value={} data-cy='' />
                    1 patty
                </label>
                <label>
                    <input type='' name='' onChange={handleChange} value={} data-cy='' />
                    2 patties
                </label>
                <label>
                    <input type='' name='' onChange={handleChange} value={} data-cy='' />
                </label>
            </fieldset>

            <fieldset>
                <label>
                    <input type='' name='' onChange={handleChange} value={} data-cy='' />
                </label>
                <label>
                    <input type='' name='' onChange={handleChange} value={} data-cy='' />
                </label>
                <label>
                    <input type='' name='' onChange={handleChange} value={} data-cy='' />
                </label>
                <label>
                    <input type='' name='' onChange={handleChange} value={} data-cy='' />
                </label>
                <label>
                    <input type='' name='' onChange={handleChange} value={} data-cy='' />
                </label>
                <label>
                    <input type='' name='' onChange={handleChange} value={} data-cy='' />
                </label>
                <label>
                    <input type='' name='' onChange={handleChange} value={} data-cy='' />
                </label>
                <label>
                    <input type='' name='' onChange={handleChange} value={} data-cy='' />
                </label>
            </fieldset>
            <label>
                <textarea />
            </label>

            <button>Order Your Burger</button>
        </div>
    );

}
export default BurgerForm;