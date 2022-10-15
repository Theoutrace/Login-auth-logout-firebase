import { useContext, useRef } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const authToken = authCtx.token;

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // we can add validation here but will skip for now

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB04trebb3BO2K6NhkQfFl_9V5sEVMenYM",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authToken,
          password: enteredNewPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(res =>{
      //we assumed this Always succeeds
      alert('👍 Password Changed!')
    })
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" minLength='7' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
