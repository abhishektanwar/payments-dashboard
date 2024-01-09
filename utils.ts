const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options)
}

const formatRupee = (paisas:number):string => {
  const rupees = paisas / 100;
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(rupees);
}

export {formatDate,formatRupee}