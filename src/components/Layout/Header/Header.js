import BannerImage from '../../../static/images/bannerImage.png';
import BannerImage1 from '../../../static/images/fire-fighters-g5a2e10c89_1920 (1)@2x.png';
import kotakLogo from '../../../static/images/kotakLogo.png';
function Header() {
    return (
        <section className='bannerSecton'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-8 col-md-6 col-lg-6'>
                        <div className='bannerContent'>
                            <h1>Protect Yourself Against  <span>Unforeseen Mishaps </span><span>In Life</span></h1>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                        <div className='logo'>
                            <img src={kotakLogo} alt="kotak-logo" />
                        </div>
                    </div>
                </div>
            </div>
            <img src={BannerImage} className="bannerImage" alt="banner" />
            <img src={BannerImage1} className="bannerImage1" alt="banner" />
            
        </section>
    )
}
export default Header;