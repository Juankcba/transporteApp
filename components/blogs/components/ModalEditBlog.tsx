'use client';
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Input } from '@nextui-org/input';

import { editBlog } from './../actions/blog-actions';
interface Props{
    id: string,
    title: string,
    content:string
}
const ModalEditBlog = ({blog}:Props) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [title, setTitle] = React.useState(blog.title);
    const [content, setContent] = React.useState(blog.content);
    const [isSubmiting, setIsSubmting] = React.useState(false);
    
    console.log(blog)
  
    const handleEdit = async() => {
        try {
            setIsSubmting(true);
            if(title != '' && content != ''){
            await editBlog({
                id: blog.id,
                title: title,
                content: content
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
                <ModalHeader className="flex flex-col gap-1">{blog.id}</ModalHeader>
                <ModalBody>
                <Input 
                    isRequired
                type="text" label="Title" 
                  value={title}
                  onValueChange={setTitle}
                />
                <Input 
                isRequired
                type="text" label="Content"   
                value={content}
                onValueChange={setContent}/>
                 
                  
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

export default ModalEditBlog




