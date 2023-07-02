import * as yup from "yup"

export const registerSchema = yup.object().shape({
    email: yup.string().email("E-posta formatı uygun değil.").required(),
    password: yup.string().min(5, 'En az 5 karakterli bir şifre gerekiyor.').max(12, 'En fazla 12 karakterli bir şifre girebilirsiniz.').required(),
})