'use client';
import React,{useState} from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Input } from '@nextui-org/input';

import { editIncome } from './../actions/income-actions';
interface Props{
    id:  string, 
    time: string,
    date: string,
    local_sale: number,
    cash: number
    redbus_sale: number
    redbus_cash: number
    create_at: date
}
const ModalEditIncome = ({income}:Props) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [time, setTime] = useState(income.time);
    const [date, setDate] = useState(income.date);
    const [localSale, setLocalSale] = useState(income.local_sale);
    const [cash, setCash] = useState(income.cash);
    const [redbusSale, setRedbusSale] = useState(income.redbus_sale);
    const [redbusCash, setRedbusCash] = useState(income.redbus_cash);
    const [isSubmiting, setIsSubmting] = React.useState(false);
    
    
  
    const handleEdit = async() => {
        try {
            setIsSubmting(true);
            if(time != '' && date != '' && localSale != '' && cash != '' && redbusSale != '' && redbusCash!=''){
            await editIncome({
                id: income.id,
                time: time,
                date: date,
                local_sale: +localSale,
                cash: +cash,
                redbus_sale: +redbusSale,
                redbus_cash: +redbusCash
            })
            onClose();} else{
                alert("Debes completar los campos")
            }
        } catch (error) {
            console.error(error)
        } finally{
            setIsSubmting(false);
        }
    }
    
  
  
    const handleOpen = () => {
      
      onOpen();
    }
  
    return (
      <>
        <div className="">
          
            <Button color="warning" className="text-white"  onPress={() => handleOpen()}>Editar entrada</Button>
          
        </div>
        <Modal 
          size={'full'} 
          isOpen={isOpen} 
          onClose={onClose} 
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{income.id}</ModalHeader>
                <ModalBody>
                <Input 
                    isRequired
                type="text" label="Fecha"
                value={date}
                  onValueChange={setDate}
                />
                <Input 
                    isRequired
                type="text" label="Hora" 
                  value={time}
                  onValueChange={setTime}
                />
                <Input 
                    isRequired
                type="number" label="Ventas del local" 
                  value={localSale}
                  onValueChange={setLocalSale}
                />
                <Input 
                    isRequired
                type="number" label="Efectivo" 
                  value={cash}
                  onValueChange={setCash}
                />
                <Input 
                    isRequired
                type="number" label="Ventas Red Bus" 
                  value={redbusSale}
                  onValueChange={setRedbusSale}
                />
                <Input 
                isRequired
                type="number" label="Efectivo Red Bus"   
                value={redbusCash}
                onValueChange={setRedbusCash}/>
                 
                  
                </ModalBody>
                <ModalFooter>
                  <Button type="button" color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button type="button" isDisabled={isSubmiting}  color="primary" onPress={handleEdit}>
                    Editar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
}

export default ModalEditIncome




