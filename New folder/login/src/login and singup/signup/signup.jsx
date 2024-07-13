import styles from './signup.module.css';
import { FaUserAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";



function Signup(){
    return(
        <div className={styles.main}>
       <div>     
        <h1>Signup</h1>
        <img className={styles.img2} src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg " alt="" />
          <div className={styles.input3}>
          <FaUserAlt /><input  className={styles.input4} type="text" placeholder="enter your Full Name" /> <br /> <br /> 
          <FaUserAlt /><input className={styles.input4} type="text" placeholder="enter your last name" /> <br /> <br /> 
          <MdMarkEmailUnread /><input className={styles.input4} type="text" placeholder="enter your email" /> <br /> <br /> 
          <RiLockPasswordFill /><input className={styles.input4} type="password" placeholder="enter your password" /> <br /> 
        </div>



        <button className={styles.button5}>submit</button>

        </div>
        </div>

    )

}
export default Signup