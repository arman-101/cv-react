import "../styles/input.css";

export default function Input({inputData, setInputData}) {
  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputData(prev => ({...prev, [name]: value}))
  }

  return (
    <div className="input">
      <div className="personal">
        <div className="title">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" />
          <h2>Personal Details</h2>
        </div>
        <hr />
        <div className="label-input">
          <label htmlFor="name">Full Name: </label>
          <input type="text" name="name" value={inputData.name} onChange={handleChange} maxLength={35}/>
        </div>
        <div className="label-input">
          <label htmlFor="profession">Profession: </label>
          <input type="text" name="profession" value={inputData.profession} onChange={handleChange} maxLength={60}/>
        </div>
        <div className="label-input">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" value={inputData.email} onChange={handleChange} maxLength={60}/>
        </div>
        <div className="label-input">
          <label htmlFor="phone">Phone: </label>
          <input type="tel" name="phone" value={inputData.phone} onChange={handleChange} maxLength={60}/>
        </div>
        <div className="label-input">
          <label htmlFor="address">Address: </label>
          <input type="text" name="address" value={inputData.address} onChange={handleChange} maxLength={60}/>
        </div>
        <div className="label-input about-input">
          <label htmlFor="about">About Me: </label>
          <textarea name="about" id="about" value={inputData.about} onChange={handleChange}></textarea>
        </div>

      </div>

      
    </div>
  );
}
