import React from 'react'
import { Navbar, HomeBanner, Companies, Discover, Category, Learn, GooglePlay, Footer } from './support/export'
import { LoginMain, ForgotPassword, ChangePassword, RegisterAlumni, RegisterCompany } from './support/export'
import { NavbarGeneral, FooterGeneral, Events , Jobs, Notif, Help} from './support/export'




function App() {
  return (
    <div>
{/* landing */}
      {/* <Navbar />
      <HomeBanner />
      <Companies />
      <Discover />
      <Category />
      <Learn />
      <GooglePlay/>
      <Footer/> */}

{/* Login-Register Pages */}
      {/* <LoginMain /> */}
      {/* <ForgotPassword/> */}
      {/* <ChangePassword/> */}
      {/* <RegisterAlumni /> */}
      {/* <RegisterCompany/> */}

      {/* Need otp */}

{/* Alumni Pages*/}
      <NavbarGeneral/>
      {/* <Events/> */}
      {/* <Jobs/> */}
      {/* <Notif/> */}
      <Help/>
     
      <FooterGeneral/>



    </div>
  );
}

export default App;
