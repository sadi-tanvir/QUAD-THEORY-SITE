'use client'
import React from 'react'
import InputField from './InputField';

interface ModalTypes {
    id: string;
    title: string;
    handleSubmit: any;
    values: any;
    handleChange: any;
    handleBlur: any;
    touched: any;
    errors: any;
}


const Modal = ({ id, title, handleSubmit, values, handleChange, handleBlur, touched, errors }: ModalTypes) => {

    return (
        <>
            <input type="checkbox" id={id} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                <div className="modal-action flex justify-between items-center">
                    <h3 className="font-bold text-lg">{title}</h3>
                        <label htmlFor={id} className="btn btn-error">X</label>
                    </div>
                    <form onSubmit={handleSubmit} className="card-body">
                        <InputField
                            label='Id'
                            name="id"
                            placeholder='Product Id'
                            value={values.id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            touched={touched.id}
                            error={errors.id}
                        />

                        <InputField
                            label='Name'
                            name="name"
                            placeholder='Product Name'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            touched={touched.name}
                            error={errors.name}
                        />

                        <InputField
                            label='Price'
                            name="price"
                            placeholder='Product Price'
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            touched={touched.price}
                            error={errors.price}
                        />

                        <InputField
                            label='Image URL'
                            name="image"
                            placeholder='Product Image URL'
                            value={values.image}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            touched={touched.image}
                            error={errors.image}
                        />

                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">
                                    Create Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal



{/* Put this part before </body> tag */ }
// <input type="checkbox" id="my_modal_6" className="modal-toggle" />
// <div className="modal" role="dialog">
//     <div className="modal-box">
//         <h3 className="font-bold text-lg">Hello!</h3>
//         <form className="card-body">
//             <div className="form-control">
//                 <label className="label">
//                     <span className="label-text">Email</span>
//                 </label>
//                 <input type="email" placeholder="email" className="input input-bordered" required />
//             </div>
//             <div className="form-control">
//                 <label className="label">
//                     <span className="label-text">Password</span>
//                 </label>
//                 <input type="password" placeholder="password" className="input input-bordered" required />
//                 <label className="label">
//                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                 </label>
//             </div>
//             <div className="form-control mt-6">
//                 <button className="btn btn-primary">Login</button>
//             </div>
//         </form>
//         <div className="modal-action">
//             <label htmlFor="my_modal_6" className="btn">Close!</label>
//         </div>
//     </div>
// </div>