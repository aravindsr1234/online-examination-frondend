import './register.css';

const Register = () => {
    return (
        <>
            <form id="registrationForm">
                <h2>Exam Registration</h2>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <button type="submit">Start Exam</button>
            </form>
        </>
    )
};

export default Register;