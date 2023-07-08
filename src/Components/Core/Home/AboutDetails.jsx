
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const AboutDetails = () => {
   const [moreData, setMoreData] = useState([]);
   const { id } = useParams();

   const getMoreData = async () => {
      const res = await axios.get(`http://127.0.0.1:3004/about/${id}`);
      setMoreData(await res?.data);
      //   console.log(res.data);
   }

   useEffect(() => {
      getMoreData();
   }, []);

   return (
      <>
         <div className="pb-3">
            <div className="blog-item">
               <div className="position-relative">
                  <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />

               </div>
            </div>
            <div className="bg-white mb-3" style={{ padding: 30 }}>
               <div className="d-flex mb-3">
                  <a className="text-primary text-uppercase text-decoration-none" href="">
                     About Us
                  </a>
                  <span className="text-primary px-2">|</span>
                  <a className="text-primary text-uppercase text-decoration-none" href="">
                     Golden wings
                  </a>
               </div>
               <h2 className="mb-3">{moreData.title2}</h2>
               <img className="img-fluid float-left"
                  src="https://www.tourism-of-india.com/blog/wp-content/uploads/2021/03/ISKCON-vrindavan.jpg"
                  style={{ height: '200px', width: '300px' }}
               />
               <p>
                  {moreData.ReadMore1}
               </p><br />

               <h4 className="mb-3">{moreData.title3}</h4>
               <img className="img-fluid  float-right"
                  src="https://www.tripsavvy.com/thmb/OIV8wxT3sJYTuVONF2LI-F4lhXM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-148666156-56a3c3c65f9b58b7d0d39fb7.jpg"
                  style={{ height: '200px', width: '300px' }} />
               <p>
                  {moreData.ReadMore2}
               </p>
               <h5 className="mb-3">{moreData.title4}</h5>
               <img
                  className="img-fluid float-left"
                  src="https://imgnew.outlookindia.com/public/uploads/articles/2019/6/27/chinese-tourists.jpg"
                  style={{ height: '200px', width: '300px' }}
               />
               <p>
                  {moreData.ReadMore3}
               </p>
               <h5 className="mb-3">{moreData.title5}</h5>
               <img
                  className="img-fluid float-right"
                  src="https://wallpaperaccess.com/full/133822.jpg"
                  style={{ height: '150px', width: '300px' }}
               />
               <p>
                  {moreData.ReadMore4}
               </p>
               <h5 className="mb-3">{moreData.title6}</h5>
               <img
                  className="img-fluid  float-left"
                  src="https://www.indianchamber.org/wp-content/uploads/2019/09/5.jpg"
                  style={{ height: '200px', width: '300px' }}
               />
               <p>
                  {moreData.ReadMore5}
               </p>

            </div>
            <div className='container'>
               <h1 style={{ color: 'darkblue', textAlign: 'center' }}>Our Popular Destinations</h1><br />
               <h3 style={{ color: 'darkgreen', textAlign: 'center' }}>KERALA ('Spice Capital of India')</h3><br />
               <div className='row'>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://etimg.etb2bimg.com/photo/99296530.cms" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle1}</h5>
                        <p className="card-text">{moreData.description1}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://media.istockphoto.com/id/177447843/photo/house-boat-in-backwaters.jpg?s=612x612&w=0&k=20&c=9RnNr22SKJiNKuOukgfo82TtSgvSLMIZALXNf4m_VPM=" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle2}</h5>
                        <p className="card-text">{moreData.description2}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/Cochin-Skyline.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle3}</h5>
                        <p className="card-text">{moreData.description3}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://www.holidify.com/images/bgImages/KOVALAM.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle4}</h5>
                        <p className="card-text">{moreData.description4}</p>
                     </div>
                  </div>
               </div>
            </div><br />
            <div className='container'>

               <h3 style={{ color: 'darkgreen', textAlign: 'center' }}>KOLKATA ('City of Joy')</h3><br />
               <div className='row'>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Victoria-Memorial_600.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle5}</h5>
                        <p className="card-text">{moreData.description5}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://assets.telegraphindia.com/telegraph/2022/Sep/1663539331_new-project-2022-09-19t034158-861.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle6}</h5>
                        <p className="card-text">{moreData.description6}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Dakhineshwar_Temple_beside_the_Hoogly%2C_West_Bengal.JPG/1200px-Dakhineshwar_Temple_beside_the_Hoogly%2C_West_Bengal.JPG" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle7}</h5>
                        <p className="card-text">{moreData.description7}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://static.tnn.in/photo/msid-96367582,width-100,height-200,resizemode-75/96367582.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle8}</h5>
                        <p className="card-text">{moreData.description8}</p>
                     </div>
                  </div>
               </div>
            </div><br />

            <div className='container'>

               <h3 style={{ color: 'darkgreen', textAlign: 'center' }}>New Delhi('The Capital of India')</h3><br />
               <div className='row'>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://thefederal.com/file/2023/01/iStock-1369987507.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle9}</h5>
                        <p className="card-text">{moreData.description9}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://www.tusktravel.com/blog/wp-content/uploads/2022/04/Qutub-Minar-Delhi.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle10}</h5>
                        <p className="card-text">{moreData.description10}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://img.myloview.com/stickers/close-up-of-a-fountain-and-india-gate-at-night-in-new-delhi-india-700-223772185.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle11}</h5>
                        <p className="card-text">{moreData.description11}</p>
                     </div>
                  </div>
                  <div className="card" style={{ width: '16rem', height: '25rem', boxSizing: 'border-box', fontFamily: 'Arial', padding: '1rem', borderRadius: '10px', transition: 'transform 0.3s', margin: '0.5rem' }}>
                     <img src="https://cdn.britannica.com/67/156667-050-62285333/Lotus-Temple-New-Delhi-India.jpg" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">{moreData.cardtitle12}</h5>
                        <p className="card-text">{moreData.description12}</p>
                     </div>
                  </div>
               </div>
            </div>


         </div><br />

         <Link className="btn btn-primary mt-1" to='/'>Back To Home</Link>
       
 
         

      </>
   )
}

export default AboutDetails











// <div className="pb-3">
//   <div className="blog-item">
//     <div className="position-relative">
//       <img className="img-fluid w-100" src="img/blog-1.jpg" alt="" />
//       <div className="blog-date">
//         <h6 className="font-weight-bold mb-n1">01</h6>
//         <small className="text-white text-uppercase">Jan</small>
//       </div>
//     </div>
//   </div>
//   <div className="bg-white mb-3" style={{ padding: 30 }}>
//     <div className="d-flex mb-3">
//       <a className="text-primary text-uppercase text-decoration-none" href="">
//         Admin
//       </a>
//       <span className="text-primary px-2">|</span>
//       <a className="text-primary text-uppercase text-decoration-none" href="">
//         Tours &amp; Travel
//       </a>
//     </div>
//     <h2 className="mb-3">Dolor justo sea kasd lorem clita justo diam amet</h2>
//     <p>
//       Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit
//       diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna
//       kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum
//       sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur
//       justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
//       dolores diam nonumy, gubergren sit stet no diam kasd vero.
//     </p>
//     <p>
//       Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam
//       dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam
//       stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero
//       sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et
//       aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr,
//       stet et no diam sit. Dolor erat justo dolore sit invidunt.
//     </p>
//     <h4 className="mb-3">Est dolor lorem et ea</h4>
//     <img className="img-fluid w-50 float-left mr-4 mb-2" src="img/blog-2.jpg" />
//     <p>
//       Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua
//       tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam
//       takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no
//       dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam
//       lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
//       sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum
//       sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet
//       dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor
//       dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos.
//       Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor
//       sea kasd clita ipsum et.
//     </p>
//     <h5 className="mb-3">Est dolor lorem et ea</h5>
//     <img
//       className="img-fluid w-50 float-right ml-4 mb-2"
//       src="img/blog-3.jpg"
//     />
//     <p>
//       Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua
//       tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam
//       takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no
//       dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam
//       lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
//       sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum
//       sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet
//       dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor
//       dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos.
//       Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor
//       sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et
//       ut.
//     </p>
//   </div>
// </div>
