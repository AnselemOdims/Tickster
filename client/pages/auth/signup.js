const SignUp = () => {
    return ( 
        <div className="sign-up">
            <h2>Sign Up</h2>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
     );
}
 
export default SignUp;