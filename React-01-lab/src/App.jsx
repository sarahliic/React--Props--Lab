import './App.css'
import Companies from './component/Companies'
import Programers from './component/Programers'
import Services from './component/Services'

function App() {

  return (
    <>
    <div className='main-container'>
    <Companies companyName="Aramco" members="3"  history="1996" name="Sarah" languages="JavaScript" experinces="2years" company="Aramco"  name2="Rahaf" languages2="C#" experinces2="7 years" company2="Aramco"  name3="Mohummed" languages3="JavaScript" experinces3="2 years" company3="Aramco" servicesTypes="Oil-Gas" prices="23804$">
    
    </Companies>
    <Companies companyName="Tuwaiq" members="3"  history="2016" name="Ahmad" languages="Python" experinces="5 years" company="Tuwaiq" name2="Sultan" languages2="Java" experinces2="3 years" company2="Tuwaiq" name3="Mousa" languages3="Python" experinces3="1 years" company3="Tuwaiq"  servicesTypes="Courses" prices="90304$">
    
    </Companies>
    <Companies companyName="Alibab Cloud" members="3"  history="2011" name="Noor" languages="C++" experinces="9 years" company="Alibaba Cloud" name2="Amirah" languages2="Asp.net" experinces2="7 years" company2="Alibaba Cloud" name3="Omar" languages3="GO" experinces3="1 years" company3="Alibaba Cloud" servicesTypes="Servers" prices="21304$">
    
    </Companies>
    </div>
   

   
    </>
  )
}

export default App
