//Yup taki bütün fonksiyonları import et
import * as yup from 'yup';

// Validasyon şeması 
// Formdaki inputların geçerli olması için geçerli koşulları tanımladığımız alan

//1 Büyük harf
//1 Küçük harf
//1 Sayı
//1 Özel karakter
//Min 5 karakter
const regex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';
//Bir alan için koşulları yazarken ilk olarak o alanın tipini tanımlayan YUP fonksiyonunu çağırırız.

export const schema = yup.object().shape({
    //Email'in geçerli olması için gerekli koşullar
    email: yup
    .string()
    .email('Email geçerli bir formatta olmalı')
    .required('Email zorunlu bir alan'),

    //yaşın geçerli olması için koşullar
    age: yup
    .number()
    .min(18, "Yaş 18'den küçük olamaz")
    .max(100, "Yaş 100'den büyük olamaz")
    .integer('Lütfen tam sayı giriniz')
    .required('Yaş zorunlu bir alan'),

    //Şifre'nin geçerli olması için koşullar
    password: yup
    .string()
    .min(5, 'Şifreniz en az 5 karakter olmalı')
    // şifre regex kurallarına uygun mu kontrol eder
    .matches(regex, 'Şireniz yeterince güçlü değil')
    .required('Şifre zorunlu bir alan'),

    //Şifre onay alanının geçerli olması için koşullar
    passwordConfirm: yup
    .string()
    //oneOf()kontrol ettiğimiz inputtaki verinin verdiğimiz değerlere eşit olup olmadığını kontrol eder
    //ref() farklı bir inputtaki veriye erişmemizi sağlar
    .oneOf([yup.ref('password')], 'Onay şifreniz eşleşmiyor')
    .required('Lütfen şifrenizi onaylayın'),

});
