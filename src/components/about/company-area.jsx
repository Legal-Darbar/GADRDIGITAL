import VideoPopup from '@/src/modals/video-popup';
import React,{useState} from 'react';

const company_content ={
    sub_title:  "ABOUT THE COMPANY",
    title: <>Gadr Digital <br /> Made for Innovators.</>,
    info_1: <>GADR Digital is a cutting-edge digital solutions company specializing in the design and development of high-quality websites and mobile applications. We create innovative, user-friendly, and scalable digital experiences tailored to meet the unique needs of businesses and individuals. From sleek, responsive websites to powerful mobile apps.</>,
    info_2: <>GADR Digital ensures top-tier functionality, performance, and design. Whether you're looking to establish your online presence, enhance user engagement, or streamline operations with a custom-built app, we bring your digital vision to life with expertise and precision.!</>,
    info_3: <>Our clean and simple development process, along with our transparent approach, ensures a seamless experience in app and website creation.</>,
}
const {sub_title, title, info_1, info_2, info_3}  = company_content


const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <div className="ab-company-area pt-105 pb-100">
               <div className="container">
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6">
                        <div className="ab-company-section-box">
                           <h4 className="inner-section-subtitle">{sub_title}</h4>
                           <h3 className="tp-section-title">{title}</h3>
                        </div>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="ab-company-right">
                           <div className="ab-company-section-text">
                              <p className="pb-10">{info_1}</p>
                              <p className="pb-10">{info_2}</p>
                              <p><span>{info_3}</span></p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row align-items-center">
                     {/*    */}
                     <div className="col-xl-4">
                        <div className="ab-company-video">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fas fa-play"></i></a>
                           <span>Watch Demo</span>
                        </div>
                     </div>
                     <div className="col-xl-8">
                        <div className="row">

                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                                 <div className="ab-company-fun-fact">
                                    <span>More Then</span>
                                    <h4>1,000<em>+</em></h4>
                                    <p>Clients</p>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>Branch</span>
                                    <h4>15<em>+</em></h4>
                                    <p>All Over World</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>Projects</span>
                                    <h4>150<em>+</em></h4>
                                    <p>Website & Apps</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

             {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"tJaBDth7B9g"}
      />
      {/* video modal end */}
        </>
    );
};

export default CompanyArea;