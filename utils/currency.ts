export const currency = (value: number) => {
    // Crear formateador
    const formatter = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    return formatter.format(value); //$2,500.00
  };
  