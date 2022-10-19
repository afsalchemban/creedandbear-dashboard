import { Logo } from "../common/logo/Logo";
import save from '../../assets/icons/save.png'
import { Button } from "../common/button/Button";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { login, randomUser } from "../../fake-api/api";

//Login page component
export const LoginPage = (props) => {

  const [loggedUser, setLoggedUser] = useContext(UserContext); //take loggedIn user from store
  const navigate = useNavigate(); // used to navigate to users page when logged successfully

  
  /* to store form data */
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const handleChange = (event) => {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
  };
  /* to store form data */



  /* submit button click */
  const [message, setMessage] = useState(null); //to show error messge
  const handleSubmit = async (event) => {
    event.preventDefault(); // prevents the submit button from refreshing the page
    setMessage(null);
    try {
      const result = await login(loginInfo.email, loginInfo.password);
      setLoggedUser(result.data.user);
      navigate('/users');
    } catch (error) {
      setMessage(error.message);
    }
  };
  /* submit button click */



  /* show random credentials to test login */
  const [emailInfo, setEmailInfo] = useState(null);
  const getLoginDetails = () => {
    const user = randomUser();
    setEmailInfo(user.email);
  }
  useEffect(() => {
    getLoginDetails();
  }, []);
  /* show random credentials to test login */

  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className=" py-12 px-6 h-full w-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-left">
                      <Logo />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p className="mb-4 text-sm">Please login to your account</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          name="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          name="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <Button icon={save} type="submit" color="bg-indigo-700" hover="bg-indigo-800">Login</Button>
                      </div>
                    </form>
                    <p className="text-red-600 text-center text-sm">{message}</p>
                  </div>
                </div>
                <div
                  className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"

                >
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">For testing login please follow instructions below</h4>
                    <div className="text-sm">
                      Use this random user information to login
                      <p>email :{emailInfo}</p>
                      <p>password :123456</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}