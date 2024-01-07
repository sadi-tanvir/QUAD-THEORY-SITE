import * as Yup from "yup";

export const productSchema = Yup.object({
    id: Yup.string().min(2).max(30).required("Please Enter Product ID"),
    name: Yup.string().min(2).max(30).required("Please Enter Product Name"),
    price: Yup.string().required("Please Enter Product Price"),
    image: Yup.string().required("Please Enter Product Image URL")
})