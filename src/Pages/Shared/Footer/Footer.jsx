import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaRegEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcStripe, FaCcPaypal } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' footer-container opacity-95 mt-20 text-white bg-black  '>

            <div className='flex pb-5 pt-16 px-8 flex-col lg:flex-row max-[600px]:text-center justify-between '>

                <div>

                    <div className='flex  max-[600px]:mr-8 items-center'>
                      
                    <img className='h-10 max-[600px]:ml-[100px] w-10 mr-2 rounded-full' src="https://i.ibb.co/RcqKbmZ/image-5.png" alt="" />
                        <Link to="/" ><h1 className='text-4xl  font-extrabold'>Diginave</h1></Link>
                    </div>

                    <p className='my-4  text-white'>Diginave is a leading digital agency specializing  <br /> in web development, digital marketing, design, <br /> content creation, video editing, and SEO. We  drive <br /> digital success for businesses with innovative solutions  <br /> and a client-centric approach.</p>

                    <p >Find us on social media:</p>
                    <div className='flex max-[600px]:justify-center gap-5 text-4xl mt-2'>
                        <Link className='text-blue-800' to='https://www.facebook.com/diginave'> <FaFacebook></FaFacebook></Link>
                        <Link className='text-blue-500' to='https://twitter.com/parvezh23'> <FaTwitter></FaTwitter></Link>
                        <Link className='text-blue-600' to='https://www.linkedin.com/in/parvez-hossain-a1998020b/'> <FaLinkedin></FaLinkedin></Link>

                    </div>

                </div>

                {/* policies */}
                <div className='max-[571px]:mb-10 max-[571px]:mt-10'>
                    <h1 className='text-2xl my-3  font-bold '>Policies</h1>
                    <div className='space-y-1'>
                        <p>Privacy Policy</p>
                        <p>Terms of Conditions</p>
                        <p>Refund policy</p>
                        <p>Payment policy</p>

                    </div>
                </div>


                {/* contact info */}
                <div >
                    <h1 className='text-2xl my-3 font-bold '>Contact Us</h1>
                    <div className='flex max-[571px]:pl-14  gap-2'>
                        <div className='text-2xl mt-2'>
                            < FaMapMarkerAlt />
                        </div>
                        <p>H#05, RD#05, kaderabad housing, <br /> Mohammadpur, Dhaka-1207, Bangladesh </p>
                    </div>

                    <div className='flex max-[571px]:pl-14 my-4 gap-2'>
                        <div className='text-2xl '>
                            < FaRegEnvelope />
                        </div>
                        <p>support@diginave.com</p>
                    </div>

                    <div className='flex max-[571px]:pl-14 gap-2'>
                        <div className='text-2xl mt-1'>
                            < FaPhoneAlt />
                        </div>
                        <p>(+880) 1838634389, (+880) 1614908855</p>
                    </div>

                    {/* payment card icon */}
                    <div className='text-4xl flex justify-center gap-3 mt-4'>
                        <FaCcPaypal className=''></FaCcPaypal>
                        <FaCcVisa className=''></FaCcVisa>
                        <FaCcMastercard className=''></FaCcMastercard>
                        <FaCcAmex className=''></FaCcAmex>
                        <FaCcStripe className=''></FaCcStripe>
                    </div>


                </div>

            </div>



            <div className='max-[571px]:mb-10 flex flex-col md:flex-row max-[600px]:items-center justify-around text-white my-10 text-bold underline decoration-2 '>


                <p>About Us</p>
                <p>Blog</p>
                <Link to='/contact'><p>Contact Us</p></Link>
                <p>Shipping Method</p>
                <p>Order Tracking</p>


            </div>

            {/* divider */}
            <div className="divider text-7xl">  </div>

            <div className='pb-9 text-bold text-center pt-4'>
                <p> &copy; 2023 Diginave.<span className=' text-red-600'> All Rights Reserved</span></p>
            </div>
        </div>
    );
};

export default Footer;