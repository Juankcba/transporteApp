'use client';
import React, {useState} from 'react'
import { Button } from '@nextui-org/react';
import {addBlog} from "../actions/blog-actions"
const FormAddBlog = () => {
    const [isSubmiting, setIsSubmting] = useState(false);

    const handleCreate = async() => {
        try {
            setIsSubmting(true);
            const body ={
                title:'nueva entrada',
                content:'Algo de la entrada'
            }
            await addBlog(body)
        } catch (error) {
            console.error(error)
        } finally{
            setIsSubmting(false);
        }
    }


  return (
    <div>
        <Button isDisabled={isSubmiting} type="button" 
        onClick={handleCreate}
        >Agregar entrada</Button>
    </div>
  )
}

export default FormAddBlog