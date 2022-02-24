import * as yup from 'yup';

export const productSchema = yup.object().shape({
    name: yup.string().required(),
    quantity: yup.number().required().positive().integer(),
    price: yup.number().required().positive()
})