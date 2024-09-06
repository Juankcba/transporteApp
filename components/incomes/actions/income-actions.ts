'use server';
import prisma from './../../../lib/prisma';
import { revalidatePath } from "next/cache";
interface IIcome {
    id?:  string, 
    time: string,
    date: string,
    local_sale: number,
    cash: number
    redbus_sale: number
    redbus_cash: number
    create_at: date
}

export const addIncome = async(body:IIncome) =>{

    const newIncome = await prisma.income.create({data:body});
    revalidatePath('/pricing');
    return newIncome;
}

export const deleteIncome = async(id:string) => {

    const income = await prisma.income.findFirst({where:{id: id}});
    if(!income){
        throw new Error("No existe entrada");
        
    }
    const deleteIncome = await prisma.income.delete({where:{id:id}})
    revalidatePath('/pricing');
    return deleteIncome;
}


export const editIncome = async(body:IIncome) =>{

    const income = await prisma.income.findFirst({where:{id: body.id}});
    if(!income){
        throw new Error("No existe entrada");
        
    }
    const updatedIncome = await prisma.income.update({where:{id: body.id},
        data: {
            time: body.time,
            date: body.date,
            local_sale: body.local_sale,
            cash: body.cash,
            redbus_sale: body.redbus_sale,
            redbus_cash: body.redbus_cash,
      
    }})
    revalidatePath('/pricing');
    return updatedIncome
}