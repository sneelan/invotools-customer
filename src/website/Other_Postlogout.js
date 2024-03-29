import React  from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Aroot_Carousel from './Snippet_Carousel';


export default () => (
    <>       
      <main>
        <div id="hero" className='row p-0 m-0 align-items-center m-auto'>
          <div className="col-lg-6 px-5 pe-lg-4 text-center text-lg-start order-last order-lg-first my-3 my-lg-0">
            <h2>You've Been Successfully Logged Out , See You Next Time!</h2>
            <p className=''>Thank you for using our administrative web portal. Your session has been ended. For security purposes, please close your browser window. <br/>
            If you need to re-access your account, please click on login button.
            </p>
            <a href='https://ayatacommerce.auth.ap-south-1.amazoncognito.com/login?client_id=3ne1tt8ls87dk6ruk7ridnk6o&response_type=code&scope=email+openid+phone&redirect_uri=https://admin.invotools.io/' className='btn btn-primary'>Login</a>
            <p className='pt-3'>
              <span className="text-theme-secondary-7"> Want to know more about the InvoTools, please visit </span><a href='https://www.invotools.io' target='_blank'>www.invotools.io</a>
            </p>

          </div>
          <div className="col-lg-6 p-0 rder-first order-lg-last mt-3 mt-lg-0 text-center ">
            <img src='/img/website/postlogout.png' className='img-fluid' />
          </div>
        </div>
      </main>
    </>
  );