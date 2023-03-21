import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <div className="Container_footer">
      <div className="footer_Left">
        <h1 className="Logo">DEBA.</h1>
        <p className="Desc_footer">
        We have the best and latest cloths in Town.
        We also have clothes from trending clothing lines as well.
        The Comfortability of Our Customers is Our Priority.
        </p>
        <div className="SocialMedia">
          <div className="SocialMedia_Icon"><FacebookIcon/></div>
          <div className="SocialMedia_Icon"><InstagramIcon/></div>
          <div className="SocialMedia_Icon"><TwitterIcon/></div>
        </div>
      </div>
      <div className="footer_Center">
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>New Arrivals</li>
          <li>Men's</li>
          <li>Women's</li>
          <li>My Account</li>
          <li>Track Order</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="footer_Right">
        <h3>Contact</h3>
        <div className="ContactItem">
          <MapsHomeWorkIcon style={{marginRight:"10px"}}/>
          Methodist University Ghana, 3rd floor, lab 2
        </div>

        <div className="ContactItem">
          <PhoneIcon style={{marginRight:"10px"}}/>
          +233 505050505
        </div>

        <div className="ContactItem">
          <MailOutlineIcon style={{marginRight:"10px"}}/>
          debafashion@gmail.com
        </div>

        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="not available"/>
      </div>
    </div>
  );
};

export default Footer;
