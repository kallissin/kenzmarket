import * as yup from 'yup';

export const cartSchema = yup.object().shape({
    name: yup.string().required(),
    quantity: yup.number().required().positive().integer()
})