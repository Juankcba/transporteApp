'use client'
import React from 'react'
import {Button} from "@nextui-org/react";
import { useState } from 'react';
import {deleteBlog} from '../actions/blog-actions'
interface Props{
    id: string
}
const ButtonDeleteBlog = ({id}:Props) => {
    const [isSubmiting, setIsSubmting] = useState(false);
    const handleDelete = async() => {
        try {
            setIsSubmting(true);
            await deleteBlog(id);
        } catch (error) {
            console.error(error);
        } finally{
            setIsSubmting(false);
        }
    }
    console.log(id)
  return (
    <Button isDisabled={isSubmiting} onClick={handleDelete} className="" color="danger">
    Eliminar
  </Button>
  )
}

export default ButtonDeleteBlog