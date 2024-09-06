'use client'
import React from 'react'
import {Button} from "@nextui-org/react";
import { useState } from 'react';
import {deleteIncome} from '../actions/income-actions'
interface Props{
    id: string
}
const ButtonDeleteIncome = ({id}:Props) => {
    const [isSubmiting, setIsSubmting] = useState(false);
    const handleDelete = async() => {
        try {
            setIsSubmting(true);
            await deleteIncome(id);
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

export default ButtonDeleteIncome