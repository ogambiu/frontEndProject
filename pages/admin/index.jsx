import React from 'react'
import Input from '../../components/form/Input'
import Title from '../../components/ui/Title'
import { useFormik } from 'formik';
import { adminSchema } from '../../schema/admin';

const Login = () => {
<<<<<<< HEAD
    const onSubmit = async (values, actions) => {
=======
    const onSubmit = async (values,actions) => {
>>>>>>> 7b9e6cc1236e76f5c25deba5d4736f218cee5e2e
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      }

    const {values, errors,touched, handleSubmit, handleChange, handleBlur } = 
    useFormik({
        initialValues:{
          username:"",
          password:""
        },
        onSubmit,
        validationSchema:adminSchema,
      });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Kullanıcı Adı",
            value:values.username,
            errorMessage: errors.username,
            touched: touched.username,
          },
          {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Şifre",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
          },
    ]
  return (
    <div className="container mx-auto">
        <form className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto" onSubmit={handleSubmit}> 
            <Title addClass="text-[40px] mb-6">Admin Girişi</Title>
            <div className="flex flex-col gap-y-2 w-full">
                {inputs.map((input) => (
                    <Input
                    key = {input.id}
                    {...input}
                    onChange= {handleChange}
                    onBlur={handleBlur}
                    />
                ))}
                <div >
                    <button className="btn-primary w-full mt-6">Giriş</button>  
                </div>
            </div>
        </form>

    </div>
  )
}

export default Login