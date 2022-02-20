import { useEffect, useState } from 'react';
import {userData} from './Data';
import { FaUserCircle } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import { BsCalendarDate } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';
import { FaListAlt } from 'react-icons/fa'


function User(){
    const [value, setValue] = useState('');
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const { id, img, name, age, qualification, email, skills } = userData[index];

    document.body.style = `background:aliceblue ;`;
   

    const handleNext = ()=>{
        let newIndex = index + 1;
        if(newIndex >= userData.length){
            newIndex = 0;
        }   
        setIndex(newIndex);
        setText('');
        setValue('')
    }


// useEffect(()=>{
// setText('My Name is')
// setValue(name)
// },[])

useEffect(() => {
    setText('My Name is')
    setValue(name)
}, [index])

    
    const displayInfo = (count)=>{

        switch(count){
            case 1:
                return setValue(name),setText('My Name is')
            case 2:
                return setValue(email), setText('My Email is')
            case 3:
                return setValue(age), setText('My Age is')
            case 4:
                return setValue(qualification), setText('My Qualifications are')
            case 5:
                return setValue(skills), setText('My Skills are')
            default:
                return null
        }
        
    }

    return(
        <main>
            <section className="user-container">
                <article className="user-img-container">
                    <img src={img} alt="image" />
                </article>

                <div className="display-info">
                    <h3>{text}</h3>
                    <h1>{value}</h1>
                </div>

                <article className="btn-container">
                <button className="user-btn" onClick={()=> {displayInfo(1)}}><FaUserCircle/></button>
                <button className="user-btn" onClick={()=> {displayInfo(2)}}><ImMail/></button>
                <button className="user-btn" onClick={()=> {displayInfo(3)}}><BsCalendarDate/></button>
                <button className="user-btn" onClick={()=> {displayInfo(4)}}><FaUserGraduate/></button>
                <button className="user-btn" onClick={()=> {displayInfo(5)}}><FaListAlt/></button>
                </article>
                
                <button className='next-btn' onClick={() =>handleNext()}>Next</button>

            </section>
        </main>
    )
}

export default User;