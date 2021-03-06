import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import './RegisterPage.css'

const RegisterPage = () => {
  const [branch, setBranch] = useState('')
  const [grade, setGrade] = useState('')
  const [rank, setRank] = useState('')
  const [status, setStatus] = useState('')

  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    mos: "",
    currently_status: status,
    branch: branch,
    grade: grade,
    rank: rank
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );
  
  function populate(){
    
  
    let opt = [];

    if (branch === 'USMC'){
      if (grade === "Enlisted"){
        opt = ["  ", ('Pvt', 'Private'), ('PFC', 'Private First Class'), ('LCpl', 'Lance Corporal'), ('Cpl' , 'Corporal'),  ('Sgt' , 'Sergeant'), ('SSgt' , 'Staff Sergeant'),
        ('GySgt' , 'Gunnery Sergeant'),  ('MSgt' , 'Master Sergeant'),  ('1Sgt' , 'First Sergeant'), ('MGySgt' , 'Master Gunnery Sergeant'),  ('SgtMaj' , 'Sergeant Major')
      ]
      
      }else if(grade == "Officer"){
        opt = [
          ('2ndLt', 'Second Lieutenant'), ('1stLt', 'First Lieutenant'), ('Capt', 'Captain'), ('Maj', 'Major'),  ('LtCol', ' Lieutenant Colonel'), ('Col', 'Colonel'),
           ('BGen', 'Brigadier General'),  ('MajGen', 'Major General'),  ('LtGen', ' Lieutenant General'), ('Gen', 'General')
 
      ]      
      }else if (grade == "Warrant Officer"){
        opt = [
          ('WO1', 'Warrant Officer 1'), ('CWO2', ' Chief Warrant Officer 2'), ('CWO3', 'Chief Warrant Officer 3'), ('CWO4', 'Chief Warrant Officer 4'),  ('CWO5', 'Chief Warrant Officer 5')
      ]      
      }
    }else if(branch == "USA"){
      if (grade == "Enlisted"){
        opt = [
          ('PV1', 'Private'), ('PV2', 'Private 2nd Class'), ('PFC', 'Private first classes'), ('SPC', 'Army Specialist'), ('CPL','Corporal'), ('Sgt', 'Sergeant'), 
           ('SSG', 'Staff Sergeant'), ('SFC', 'Sergeant first class'),  ('MSG', 'Master Sergeant'),  ('1SG', 'First Sergeant'), ('SGM', 'Sergeant Major')
      ]      }
      else if (grade == "Officer"){
        opt = [
          ('2ndLt', 'Second Lieutenant'), ('1stLt', 'First Lieutenant'), ('Capt', 'Captain'), ('Maj', 'Major'),  ('LtCol', ' Lieutenant Colonel'), ('Col', 'Colonel'),
           ('BGen', 'Brigadier General'),  ('MajGen', 'Major General'),  ('LtGen', ' Lieutenant General'), ('Gen', 'General')
      ]      }
      else if (grade == "Warrant Officer"){
        opt = [
          ('WO1', 'Warrant Officer 1'), ('CW2', ' Chief Warrant Officer 2'), ('CW3', 'Chief Warrant Officer 3'), ('CW4', 'Chief Warrant Officer 4'),  ('CW5', 'Chief Warrant Officer 5')
      ]      
      }
    }else if (branch == 'USN' || branch == "USCG"){
      if (grade == "Enlisted"){
        opt = [
          ('SR', 'Seaman Recruit'), ('SA', 'Seaman Apprentices'), ('SN', 'Seaman'), ('PO3', 'Petty Officer Third Class'),  ('PO2', '	Petty Officer Second Class'), 
           ('PO1', 'Petty Officer First Class'), ('CPO', '	Chief Petty Officer'),  ('SCPO', 'Senior Chief Petty Officer'),  ('MCPO', '	Master Chief Petty Officer')
      ]
      }
      else if (grade == "Officer"){
        opt = [
          ('Ensign', 'Ensign'), ('Junior Grade', '	Lieutenant, Junior Grade'), ('Lieutenant', 'Lieutenant'), ('Lieutenant Commander', 'Lieutenant Commander'),  ('Commander', ' Commander'), ('Captain', 'Captain'),
           ('Commodore', '	Rear Admiral, Commodore'),  ('Rear Admiral', 'Rear Admiral, Upper Half'),  ('Vice Admiral', ' Vice Admiral'), ('Admiral', 'Chief of Naval Operations Commandant of the Coast Guard Admiral')
      ]      }
      else if (grade == "Warrant Officer"){
        opt = [" " ('WO1', 'Warrant Officer 1'), ('CWO2', ' Chief Warrant Officer 2'), ('CWO3', 'Chief Warrant Officer 3'), ('CWO4', 'Chief Warrant Officer 4'),  ('CWO5', 'Chief Warrant Officer 5')
      ]      
      }
    }else if (branch == "USAF"){
      if (grade == "Enlisted"){
        // self.rank = models.CharField(max_length=50, choices=self.usaf_enlisted_ranks,default=self.usaf_enlisted_ranks.AB)
      }
      else if (grade == "Officer"){
        opt = [" | ", ('2ndLt', 'Second Lieutenant'), ('1stLt', 'First Lieutenant'), ('Capt', 'Captain'), ('Maj', 'Major'),  ('LtCol', ' Lieutenant Colonel'), ('Col', 'Colonel'),
           ('BGen', 'Brigadier General'),  ('MajGen', 'Major General'),  ('LtGen', ' Lieutenant General'), ('Gen', 'General')
      ] 
      }
      
    }
    let options = opt.map(el => <option>{el}</option>)
    return options
  }  
 
  


  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        </label>
        <label>
          MOS:{" "}
          <input
            type="text"
            name="mos"
            value={formData.mos}
            onChange={handleInputChange}
          />
        </label>
        
          Duty Status:{" "}
          <select value={status} className="currently_status" onChange={(e) => setStatus(e.target.value)}>
            <option value={''}>{''}</option>
            <option value={'Active'}>Active</option>
            <option value={'Reserve'}>Reserve</option>
            <option value={'Veteran'}>Veteran</option>
          </select>
         
      
         Military Branch (USMC/USA/USN/USAF/USCG): {" "}
          <select value={branch} className="branch" onChange={(e) => setBranch(e.target.value)}>
            <option value={''}></option>
            <option value={'USMC'}>USMC</option>
            <option value={'USA'}>USA</option>
            <option value={'USN'}>USN</option>
            <option value={'USAF'}>USAF</option>
            <option value={'USCG'}>USCG</option>
          </select>
          Grade (Officer/Warrent Officer/Enlisted): {" "}
          <select value={grade} className="grade" onChange={(e) => setGrade(e.target.value)}>
            <option value={''}> </option>
            <option value={'Officer'}>Officer</option>
            <option value={'Warrant Officer'}>Warrant Officer</option>
            <option value={'Enlisted'}>Enlisted</option>
          </select>
          Rank: {" "}

          <select itemID="rank" className="rank" onChange={(e) => setRank(e.target.value)}>
            {branch !=""  && grade != "" ?populate() :<option>Select above</option> }
          </select>
        
        <button>Register!</button>
      </form>
    </div>
  );
};

export default RegisterPage;
