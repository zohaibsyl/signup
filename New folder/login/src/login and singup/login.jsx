import styles from "./login.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Login(){
    return(
        <div className={styles.name}>
       <div className={styles.div}>     
        <h1>login page</h1>
        <FaUser />
        <input className={styles.input} type="text" placeholder="enter your email" /> <br />
        <RiLockPasswordFill /> <input className={styles.input2} type="password" placeholder="enter your password" /> <br />
     
        <button className={styles.button}>login</button> <br />
        <button className={styles.button2}>signup</button>
        <img className={styles.img} src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg " alt="" />
        <br /> <FaFacebookSquare /> <HiOutlineMail /> <FaTelegram />



        {/* <a href="#" onClick={clickFunc}>Create an account</a> */}

        </div>
        </div>

    )
}
export default Login
