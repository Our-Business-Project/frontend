export const formatPhone = (phoneNumber: string) => {
  return phoneNumber.replace(/^380(\d{2})(\d{3})(\d{2})(\d{2})$/, '+380 ($1) $2-$3-$4');
};
