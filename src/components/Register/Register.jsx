

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="mx-auto text-center">
            <h2 className=" md:w-1/2 mb-8">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className="mb-4 w-3/4 px-4 py-2 " type="email" name="email" placeholder="Your email" id="" />
                <br />
                <input className="mb-4 w-3/4 px-4 py-2 "  type="password" name="password" placeholder="Pasword" id="" />
                <br />
                <input className="btn btn-secondary mb-4 w-3/4 px-4 py-2"  type="submit" name="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;