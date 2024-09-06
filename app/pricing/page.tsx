export const dynamic = 'force-dynamic';
import { title } from "@/components/primitives";
import prisma from './../../lib/prisma';
import FormAddIncome from './../../components/incomes/components/FormAddIncome';
import ButtonDeleteIncome from './../../components/incomes/components/ButtonDeleteIncome';
import ModalEditIncome from './../../components/incomes/components/ModalEditIncome';
import { currency } from './../../utils/currency';

export default async function PricingPage() {
  const incomes = await prisma.income.findMany();
 
 
  return (
    <div className="flex w-full flex-col">
    <div className="flex w-full justify-between items-center">
    <h1 className={title()}>Ingresos</h1>
    <FormAddIncome />
    </div>
    <div className="flex flex-col gap-4 my-4">
      {incomes.map(income => (
        <div className="border border-white rounded-md p-4" key={income.id}>
          <h3>Ventas Local: {currency(income.local_sale)}</h3>
          <h3>Efectivo: {currency(income.cash)}</h3>
          <h3>Ventas RedBus: {currency(income.redbus_sale)}</h3>
          <h3>Ventas RedBus Efectivo: {currency(income.redbus_cash)}</h3>
          <h2>Subtotal: {currency(income.local_sale + income.redbus_sale)}</h2>
          <h3> {income.date} {income.time}</h3>
          
          
          <div className=" mt-4 w-full flex justify-end items-center gap-4">
            <ModalEditIncome income={income}/>
          <ButtonDeleteIncome id={income.id} />
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
