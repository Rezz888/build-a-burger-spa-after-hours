import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import styled from "styled-components";

const schema = yup.object().shape({
    name: yup.string().required('Please enter your name').min(3, 'That\s not a real name'),
    phone: yup.string().required('Please enter a phone number.').matches(/^[0-9]{10}$/, 'Please enter a valid phone numnber')
})

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
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        schema.isValid(formState).then(valid => {
          setIsDisabled(!valid);
        });
      }, [formState]);

    const validate = e => {
        e.persist();
        yup.reach(schema, e.target.name).validate(e.target.value)
        .then(valid => setErrors({...errors, [e.target.name]: ''}))
        .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}));
    }

    const handleChange = e => {
        if (e.target.type === 'checkbox') {
            setFormState({
                ...formState,
                 condiments: {
                    ...formState.condiments,
                [e.target.value]: e.target.checked
                }
            })
        } else {
            setFormState({
                ...formState,
                 [e.target.name]: e.target.value
            })
        }
        if (e.target.name === 'name' || e.target.name === 'phone') {
            validate(e);
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type='text' name='name' onChange={handleChange} value={formState.name} data-cy='name' />
                {errors.name.length > 0 && <p style={{color:'red'}}>{errors.name}</p>}
            </label>
            <label>
                Phone Number
                <input type='tel' name='phone' onChange={handleChange} value={formState.phone} data-cy='phone' />

                {errors.phone.length > 0 && <p style={{color:'red'}}>{errors.phone}</p>}
            </label>

            <label>
                Select Bun
                <select name="bun" data-cy='bun' defaultValue='Pretzel' onChange={handleChange}>
                   <option value="Sesame Seed">Sesame Seed</option> 
                   <option value="Pretzel">Pretzel</option>
                   <option value="Brioche">Brioche</option>
                   <option value="Clabatta">Clabatta</option>
                   <option value="Kaiser Roll">Kaiser Roll</option>

                </select>
            </label>
            
            <fieldset>
                <label>
                    <input type='radio' name='patties' onChange={handleChange} value={1} data-cy='1' />
                    1 patty
                </label>
                <label>
                    <input type='radio' name='patties' onChange={handleChange} value={2} data-cy='2' />
                    2 patties
                </label>
                <label>
                    <input type='radio' name='patties' onChange={handleChange} value={3} data-cy='3' />
                    3 patties
                </label>
            </fieldset>

            <fieldset>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} value="ketchup" data-cy='ketchup' />
                    Ketchup
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} value="mustard" data-cy='mustard' />
                    Mustard
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} value="mayonaise" data-cy='mayonaise' />
                    Mayonaise
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} value="barbecue" data-cy='barbecue' />
                    Berbecue
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} value="onion" data-cy='onion' />
                    Onion
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} value="lettuce"
                     data-cy='lettuce' />
                     Lettuce
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} value="cheese" data-cy='cheese' />
                    Cheese

                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} value="bacon" data-cy='bacon' />
                    Bacon
                </label>
            </fieldset>
            <label>
                <textarea name="instructions" data-cy="instructions" onChange={handleChange} value={formState.instructions}/>
            </label>

            <button type="submit" disabled={isDisabled}>Order Your Burger</button>
            </form>
        </FormContainer>
    );

}

const FormContainer = styled.div`

      margin: 5rem auto;
      width: 900px;
      display: flex;
      flex-direction: column;
      color: #fff;
`
export default BurgerForm;