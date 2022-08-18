import PhoneIcon from '../../../static/icons/telephone_Icon.svg';
import EmailIcon from '../../../static/icons/Email_Icon.svg';
import WebsiteIcon from '../../../static/icons/Website_Icon.svg';
function HeaderNav() {
    return (
        <section className='mainNav'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-5'>
                        <div className='menuText'> Get Kotak Group Accident Protect for just 811</div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-7'>
                        <ul className='infoList'>
                            <li>
                                <img src={PhoneIcon} alt='phone' />
                                <span>Toll Free No: 1800 266 4545</span>
                            </li>
                            <li>
                                <img src={EmailIcon} alt='phone' />
                                <span>Email: care@kotak.com</span>
                            </li>
                            <li>
                                <img src={WebsiteIcon} alt='phone' />
                                <span>www.kotakgeneral.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeaderNav;