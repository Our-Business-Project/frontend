export const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,255}$/;
export const phoneRegex = /^\+380\s\(((39|50|63|66|67|68|73|93|94|95|96|97|98|99))\)\s(\d{3})-(\d{2})-(\d{2})$/;
export const phoneRegexForReplace = [/^(\+38)(0\d{2})(\d{3})(\d{2})(\d{2})$/, '$1 ($2) $3-$4-$5'];
