'use client';
import React, {useState} from 'react'
import { Button } from '@nextui-org/react';
import {addIncome} from "../actions/income-actions"
const FormAddIncome = () => {
    const [isSubmiting, setIsSubmting] = useState(false);

    const handleCreate = async() => {
        try {
            setIsSubmting(true);
            const body ={
                time: '12:00',
                date: '06/09/24',
                local_sale: 0,
                cash: 0,
                redbus_sale: 0,
                redbus_cash: 0
            }
            await addIncome(body)
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

export default FormAddIncome