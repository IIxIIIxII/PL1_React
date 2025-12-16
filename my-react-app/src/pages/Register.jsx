import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();

        const user = { lastName, firstName, phone, email, password };
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/login");
    };

    return (
        <form onSubmit={handleRegister}>
            <h1>Регистрация</h1>


            <input
            type="email"
            placeholder="Электронная почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />

            <input
            type="text"
            placeholder="Фамилия"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            />

            <input
            type="text"
            placeholder="Имя"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            />

            <input
            type="tel"
            placeholder="+996 555 12-34-56"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern={"^\\+996 [2579]\\d{2} \\d{2}-\\d{2}-\\d{2}$"}
            title="Формат: +996 555 12-34-56"
            onInvalid={(e) => e.target.setCustomValidity('Неверный формат номера. Ожидается: +996 555 12-34-56')}
            onInput={(e) => e.target.setCustomValidity('')}
            required
            />

            <input 
            type="password"
            placeholder="Придумайте пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />


            <button>Регистрация</button>

        </form>
    );


}
