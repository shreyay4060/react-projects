import styles from "./Form.module.css";
import React ,{useState} from "react";
import Button from "./Button";
import { IoCallSharp } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";

export default function Form(){
 

    const[contact,setContact]=useState({
        fname:"",
        email : "",
        text:""
    })

    const[newValue,setNewValue]=useState([])

    function handleChange(event){
        const{name,value}=event.target;
        setContact((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    function handleClick(event){
        setNewValue((prev)=>{
            return [
                ...prev,
                contact
            ]
        })
        // event.preventDefault();
        setContact({
            fname:"",
            email:"",
            text:""
        })
    }

    function submitted(event){
        console.log("Submitted")
        event.preventDefault();
    }


    function handleDelete(id){
        setNewValue((prev)=>{
            return ( prev.filter((_,index)=>{
                return index !== id;
            })
        )
        })
    }


    return <>
    <div className={styles.form}>
        <div>


        <div className={styles.btns}>
        <Button onClick={handleChange} href="https://wa.me/8421915279" icon=<LuMessageSquareText fontSize="20px"/> name="VIA SUPPORT CHAT"/>
        <Button
        icon={<IoCallSharp fontSize="20px" />}
        onClick={() => window.location.assign('tel:+8421915279')}
        name="VIA CALL"
        />

        </div>
        <Button href="mailto:shreyay4060@gmail.com" isOutline={true} name="VEA EMAIL FORM" icon=<LuMessageSquareText fontSize="20px"/> />

        <form onSubmit={submitted}>

        <fieldset>
                <legend>Name</legend>
                <input onChange={handleChange} name="fname" value={contact.fname}  className={styles.input} type="text" isRequired={true} />
        </fieldset>
        <fieldset>
            <legend>E-mail</legend>
            <input onChange={handleChange} name="email" value={contact.email} className={styles.input} type="email" id="#email" isRequired/>
        </fieldset>
        <fieldset>
            <legend>Text</legend>
            <textarea onChange={handleChange} name="text" value={contact.text}  className={styles.input}id="#text" rows="3"></textarea>
        </fieldset><br /><br />
        <Button onClick={handleClick} type="submit" name="Submit"/>
        <br />
        </form>
    </div>
        </div>
    <div className={styles.information}>

        {newValue.map((item,index)=>(<div className={styles.info} key={index}>
              <h1>{item.fname}</h1>
              <p>{item.email}</p><br />
              <p>{item.text}</p>
              <Button name="delete" onClick={()=>handleDelete(index)}/>
               </div>
        ))}
        </div>
    </>
}


