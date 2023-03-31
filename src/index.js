import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { sliderItems, categories, popularProducts } from './data';


import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// 00:11 -> 22:08
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/productList/:category' element={<ProductList />} />
      <Route path='/product/:id' element={<Product />} /> 
      <Route path='/signinup' element={<Signinup />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}
// pages 

// home
function Home() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Announcement />
      <Navbar pf={PF} />
      <div className="mainPage">
      <Slider pf={PF} />
      <Categories pf={PF} />
      <h1 className='title' style={{ marginLeft: "35px" }}>Popular Products</h1>
      <Products pf={PF} />
      <Newsletter />
      </div>
      <Footer pf={PF} />
    </>
  )
}
// !home
// productList 
function ProductList() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Announcement />
      <Navbar pf={PF}/>
      <div className="mainPage">
      <FilterProducts pf={PF}/>
      <Products pf={PF}/>
      <Newsletter />
      <Footer pf={PF}/>
      </div>
    </>
  )
}
// !productList 

// product 
function Product() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Announcement />
      <Navbar pf={PF}/>
      <div className="mainPage">
      <ProductDetails pf={PF}/>
      <Newsletter />
      <Footer pf={PF}/>
      </div>
    </>
  )
}
// !product 
// cart
function Cart() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Announcement />
      <Navbar pf={PF}/>
     <div className="mainPage">
     <CartContainer pf={PF}/>
      <Footer pf={PF}/>
     </div>
    </>
  )
}
// !cart
// Signinup  
function Signinup() {
  const [login, setLogin] = useState(false);
  return (
    <div className='signinup'>
      <div className="signinupBg leftBg"><img src="./img/p20.png" alt="" /></div>
      <div className="signinupBg rightBg"><img src="./img/p20-2.png" alt="" /></div>
      <div className="wrapper">
        <div className="title-text">
          <div className="title login" style={{ marginLeft: login && "-50%" }}>Login</div>
          <div className="title login">Register</div>
        </div>

        <div className="form-container">
          <div className="slide-controls">
            <input type="radio"
              name='slider'
              id='login'
              checked={!login && true}
              hidden
              onChange={(e) => (e.target.value)} />
            <input type="radio"
              name='slider'
              id='signup'
              checked={login && true}
              onChange={(e) => (e.target.value)}
              hidden />
            <label htmlFor="login" className='slide login' onClick={() => { setLogin(false) }}>Login</label>
            <label htmlFor="signup" className='slide singup' onClick={() => { setLogin(true) }}>SingUp</label>
            <div className="slide-tab"></div>
          </div>
          <div className="form-inner">
            <form
              style={{ marginLeft: login && "-50%" }}
              className='login'>
              <div className="field">
                <input type="email" placeholder='Email Address' />
              </div>
              <div className="field">
                <input type="password" placeholder='Password' />
              </div>
              <div className="pass-link"><Link to=''>Forgot password ?</Link></div>
              <button>Login</button>
              <div className="signupLink" onClick={() => { setLogin(true) }}>Not a member ? <Link to=''>Sign Up Now</Link></div>
            </form>
            <form
              style={{ display: login && "block" }}
              className='signup'>
              <div className="field " style={{ display: "flex", justifyContent: "space-between" }}>
                <input type="text" style={{ width: "49%" }} placeholder='First Name' />
                <input type="text" style={{ width: "49%" }} placeholder='Last Name' />
              </div>
              <div className="field">
                <input type="email" placeholder='Email Address' />
              </div>
              <div className="field">
                <input type="password" placeholder='Password' />
              </div>
              <div className="field">
                <input type="password" placeholder='Confirm Your Password' />
              </div>
              <button>Register</button>
              <div className="signupLink" onClick={() => { setLogin(false) }}>Already sign up ? <Link to=''>login Now</Link></div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
// !Signinup  
// !pages 

// component 
function Navbar({pf}) {
  const [language,setLanguage]=useState(false);
  
  window.onscroll=function(){
    if(document.documentElement.scrollTop>10){
      document.querySelector('.navbar')?.classList.add('fixed');
    }else{
      document.querySelector('.navbar')?.classList.remove('fixed');
    }
  }
  const [isOpen, open] = useState(false);
  return (
    <div className="navbar">
      <div className="navbarWrapper container-fluid">
        <div className="mobile" style={{ left: isOpen && "0" }}>
          <div className="closeIcon"  ><i className="fa fa-times" onClick={() => open(false)} ></i></div>
          <div className="searchContainer mobileItem">
            <input type="text" placeholder='search' />
            <div className="icon"><i className="fa fa-search"></i></div>
          </div>
          <div className={language ? "show language mobileItem" : "language mobileItem"}>
            <div className="languageTop" onClick={()=>setLanguage(!language)}>
              <div className="flag"><img src={pf+"flags/en.png"} alt="" /></div>
              <span className="text">En</span>
              <i className="fa fa-angle-down"></i>
            </div>
            <div className="languageBottom">
              <div className="languageBottomItem">
                <div className="flag"><img src={pf+'flags/sa.png'} alt="" /></div>
                <span className="text">Ar</span>
              </div>
              <div className="languageBottomItem">
                <div className="flag"><img src={pf+'flags/sa.png'} alt="" /></div>
                <span className="text">Ar</span>
              </div>
            </div>
          </div>
          <div className="mobileItem"><Link to="/signinup">login/Register</Link></div>
        </div>
        <div className="row">
          <div className="col-md-4 col-2 nvabarLeft">
            <i className="fas fa-bars" onClick={() => open(true)}></i>
            
            <div className={language ? "show language hasDisapair" : "language hasDisapair"}>
              <div className="languageTop" onClick={()=>setLanguage(!language)}>
                <div className="flag"><img src={pf+"flags/en.png"} alt="" /></div>
                <span className="text">En</span>
                <i className="fa fa-angle-down"></i>
              </div>
              <div className="languageBottom">
                <div className="languageBottomItem">
                  <div className="flag"><img src={pf+'flags/sa.png'} alt="" /></div>
                  <span className="text">Ar</span>
                </div>
                <div className="languageBottomItem">
                  <div className="flag"><img src={pf+'flags/sa.png'} alt="" /></div>
                  <span className="text">Ar</span>
                </div>
              </div>
            </div>
            <div className="searchContainer hasDisapair">
              <input type="text" placeholder='search' />
              <div className="icon"><i className="fa fa-search"></i></div>
            </div>
          </div>
          <div className="col-md-4 col-8 nvabarCenter">
            <Link to="/"><img src={pf+"logo.png"} alt="" className="logo" /></Link>
          </div>
          <div className="col-md-4 col-2 nvabarRight">
            <div className="menuItem hasDisapair"><Link to="/signinup">Login/Register</Link></div>
            <Link to='/cart'>
            <div className="menuItem">
              <div className="iconBadge">4</div>
              <div className="nvabarRightIcon"><i className="fa fa-shopping-cart"></i></div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
function Announcement() {
  return (
    <div className="announcementContainer">
      Super deal! free shipping on orders over 50 $
    </div>
  )
}
function Slider({pf}) {
  let [slideIndex, setSlideIndex] = useState(0);
  function sliderClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex >= 0 ? slideIndex-- : slideIndex = sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex > sliderItems.length - 1 ? slideIndex = 0 : slideIndex++);
    }
  }
  return (
    <div className="slider">
      <div className="sliderArrow" onClick={() => sliderClick("left")}>
        <i className="fa fa-angle-left"></i>
      </div>

      <div className="sliderWrapper" style={{ transform: `translateX(${slideIndex * (-100)}vw)` }}>
        {
          sliderItems.map((item) => (
            <div key={item.id} className="silde" style={{ backgroundColor: item.bg }}>
              <div className="imgContainer">
                <img src={pf+item.img} alt="" />
              </div>
              <div className="infoContainer">
                <h1 className="sliderTitle">{item.title}</h1>
                <p className="sliderDesc">{item.desc}</p>
                <button className="sliderBtn">shop now</button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="sliderArrow" onClick={() => sliderClick("right")}>
        <i className="fa fa-angle-right"></i>
      </div>
    </div>
  )
}
function Categories({pf}) {
  return (
    <div className="categories row">
      {
        categories.map((item) => (
          <CategorieItem pf={pf} item={item} key={item.id} />
        ))
      }
    </div>
  )
}
function CategorieItem({ item, pf }) {
  return (
    <Link to="productList/:category" className="categorieItem col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="categorieItemImg">
        <img src={pf+item.img} alt="" />
      </div>
      <div className="categorieInfo">
        <h2 className="categorieItemTitle">{item.title} </h2>
        <button>Shop now</button>
      </div>
    </Link>
  )
}
function Products({pf}) {
  return (
    <div className="products row">
      {
        popularProducts.map((item) => (
          <ProductItem pf={pf} item={item} key={item.id} />
        ))
      }
      <div className="pagination">
        <div className="paginationContainer">
          <span className="paginationItem prev"><i className="fa fa-angle-left"></i></span>
          <span className="paginationItem page">1/2</span>
          <span className="paginationItem prev"><i className="fa fa-angle-right"></i></span>
        </div>
      </div>
    </div>
  )
}
function ProductItem({ item,pf }) {
  const PU=process.env.REACT_APP_PUBLIC_URL;
  return (
    <Link to={"/product/:id"} className="productItem col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="productInfo">
        <div className="productItemImg">
          <img src={pf+item.img} alt="" />
        </div>
        <div className="productInfoCentent">
          <div className="icon">
            <i className="fa fa-shopping-cart"></i>
          </div>
          <div className="icon">
            <i className="fa fa-search"></i>
          </div>
          <div className="icon">
            <i className="far fa-heart"></i>
          </div>
        </div>
      </div>
      <div className="productInfo-2">
        <div className="price text">$ 20</div>
        <div className="productRemise text"> - 50%</div>
        <div className="prductRate">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <i className="far fa-star"></i>
        </div>
      </div>
    </Link>
  )
}
function Newsletter() {
  return (
    <div className="newsletter ">
      <h1 className="title">newsletter</h1>
      <p className="newsletterDesc">Get timely updates from your favorite products</p>
      <div className="inputContainer">
        <input type="email" placeholder='Your Email' />
        <button className="icon">
          <i className="fab fa-telegram-plane"></i>
        </button>
      </div>
    </div>
  )
}
function Footer({pf}) {
  return (
    <div className="footer row">
      <div className="col-sm-12 col-md-4 footerLeft">
      <Link to="/"><img src={pf+"logo.png"} alt="" className="logo" /></Link>
        <p className="footerDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eius accusantium iusto cupiditate dolorum perspiciatis iste
          inventore nobis dolores molestias veniam, ratione, quas facilis?
        </p>
        <div className="icons">
          <Link to="" className="icon" style={{ backgroundColor: "#3b5999" }}><i className="fab fa-facebook-f"></i></Link>
          <Link to="" className="icon" style={{ backgroundColor: "#e4405F" }}><i className="fab fa-instagram"></i></Link>
          <Link to="" className="icon" style={{ backgroundColor: "#55ACEE" }}><i className="fab fa-twitter"></i></Link>
          <Link to="" className="icon" style={{ backgroundColor: "#E60023" }}><i className="fab fa-pinterest-p"></i></Link>
        </div>
      </div>
      <div className="col-sm-12 col-md-4 footerCenter">
        <h3 className="title">Useful Links</h3>
        <ul className="list">
          <li className="listItem"><Link to="/">home</Link></li>
          <li className="listItem"><Link to="/">cart</Link></li>
          <li className="listItem"><Link to="/">man fashion</Link></li>
          <li className="listItem"><Link to="/">woman fashion</Link></li>
          <li className="listItem"><Link to="/">Accessoires</Link></li>
          <li className="listItem"><Link to="/">my account</Link></li>
          <li className="listItem"><Link to="/">order tracking</Link></li>
          <li className="listItem"><Link to="/">wishlist</Link></li>
          <li className="listItem"><Link to="/">terms</Link></li>
        </ul>
      </div>
      <div className="col-sm-12 col-md-4 footerRight">
        <h3 className="title">Contact</h3>
        <div className="contactContainer">
          <div className="contactItem">
            <div className="icon" style={{ backgroundColor: "green" }}><i className="fa fa-map-marker"></i></div>
            <div className="text">AnyWhere</div>
          </div>
          <div className="contactItem">
            <div className="icon" style={{ backgroundColor: "tomato" }}><i className="fa fa-phone"></i></div>
            <div className="text">+2127 67 77 36 20</div>
          </div>
          <div className="contactItem">
            <div className="icon" style={{ backgroundColor: "teal" }}><i className="fa fa-envelope"></i></div>
            <div className="text">Saw.Saw@gmail.com</div>
          </div>
        </div>
        <img src={pf+"/payement.png"} alt="" />
      </div>
    </div>
  )
}
function FilterProducts({pf}) {
  return (
    <div className="filterContainer row">
      <h1 className="title">Dresses</h1>
      <div className="filteres">
        <div className="filter">
          <span className="filterText">Filter Products : </span>
          <select className=''>
            <option disabled selected>Color</option>
            <option value="">White</option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>
          <select className=''>
            <option disabled selected>Size</option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filterText">sort Products : </span>
          <select name="" id="">
            <option selected>Newest</option>
            <option >Price (asc)</option>
            <option >Price (desc)</option>
          </select>
        </div>
      </div>
    </div>

  )
}
function ProductDetails({pf}) {
  const [img,setImg]=useState(pf+'p12.png')
  function handleClick(e){
    setImg(e.target.src)
  }
  return (
    <div className="productDetails row">
      <div className="col-sm-12 col-md-6 productImg">
        <div className="imgContainer">
          <img src={img} alt="" id="productimage" />
        </div>
        <div className="smallImgs">
          <div className="smallImg"><img onClick={(e)=>handleClick(e)} className='small-img' src={pf+"p12.png"} alt="" /></div>
          <div className="smallImg"><img onClick={(e)=>handleClick(e)} className='small-img' src={pf+"p13.png"} alt="" /></div>
          <div className="smallImg"><img onClick={(e)=>handleClick(e)} className='small-img' src={pf+"p14.png"} alt="" /></div>
          <div className="smallImg"><img onClick={(e)=>handleClick(e)} className='small-img' src={pf+"p15.png"} alt="" /></div>
        </div>

      </div>
      <div className="col-sm-12 col-md-6 ProductInfo">
        <h1 className="title">Dress</h1>
        <div className="productDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Ex, distinctio sapiente perferendis unde cumque voluptatum
            a nulla. Vitae distinctio voluptas eveniet a?
        </div>
        <div className="productPrice">$ 20</div>
        <div className='productChoices'>
          <div className="productChoice">
            <div className="text">color : </div>
            <span className="color"></span>
            <span className="color"></span>
            <span className="color"></span>
          </div>
          <div className="productChoice">
            <div className="text">Size : </div>
            <select defaultValue={"Size"}>
              <option disabled >Size</option>
              <option value="">XS</option>
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
            </select>
          </div>
        </div>
        <div className="userAction">
          <div className="quantity">
            <span className='controlBtn'>-</span> <span className="num">1</span> <span className='controlBtn'>+</span>
          </div>
          <Link to="/cart"><button>
            <div className="layer"></div>
            <div className="text">Add to cart</div>
          </button></Link>
        </div>

      </div>
    </div>
  );
}
function CartContainer({pf}) {
  return (
    <div className="cartContainer">
      <h1 className="title">Your Bag <i className="fa fa-shopping-cart"></i></h1>
      <div className="cartTop ">
        <button style={{ backgroundColor: "white" }}>
          <div className="text">continue shopping</div>
          <div className="layer"></div>
        </button>
        <div className="statistics">
          <span className="text">shopping bag (2)</span>
          <span className="text">your wishlist (2)</span>
        </div>
        <button style={{ backgroundColor: "black", color: "white" }}>
          <div className="text">checkout now</div>
          <div className="layer" style={{ backgroundColor: "tomato" }}></div>
        </button>
      </div>
      <div className="cartBottom row">
        <div className="col-sm-12 col-md-9 orderInfo ">

          <div className="orderItem">
            <div className="imgContainer">
              <img src={pf+"p1.png"} alt="" />
            </div>
            <div className="orderDetails">
              <div className="proprities">
                <div className="proprityItem">
                  <div className="proprity name">Product : </div>
                  <span className='value'>dress</span>
                </div>
                <div className="proprityItem">
                  <div className="proprity name">ID : </div>
                  <span className='value'>123456789</span>
                </div>
                <div className="proprityItem color">
                  <div className="proprity ">Color : </div>
                  <span className='value'><div className="circle"></div></span>
                </div>
                <div className="proprityItem">
                  <div className="proprity name">Size : </div>
                  <span className='value'>L</span>
                </div>
              </div>
              <div className="numpric">
                <div className="quantity">
                  <span className='controlBtn'>-</span> <span className="num">1</span> <span className='controlBtn'>+</span>
                </div>
                <div className="price">$ 30</div>
              </div>
            </div>
          </div>
          <div className="orderItem">
            <div className="imgContainer">
              <img src={pf+"p1.png"}  alt="" />
            </div>
            <div className="orderDetails">
              <div className="proprities">
                <div className="proprityItem">
                  <div className="proprity name">Product : </div>
                  <span className='value'>dress</span>
                </div>
                <div className="proprityItem">
                  <div className="proprity name">ID : </div>
                  <span className='value'>123456789</span>
                </div>
                <div className="proprityItem">
                  <div className="proprity name">Color : </div>
                  <span className='value'><div className="circle"></div></span>
                </div>
                <div className="proprityItem">
                  <div className="proprity name">Size : </div>
                  <span className='value'>L</span>
                </div>
              </div>
              <div className="numpric">
                <div className="quantity">
                  <span className='controlBtn'>-</span> <span className="num">1</span> <span className='controlBtn'>+</span>
                </div>
                <div className="price">$ 30</div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-sm-12 col-md-3 orderSummury">
          <h2 className="title">order summary</h2>
          <div className="summaryGroup">
            <div className="summaryItem">
              <div className="proprity">subtotal</div>
              <div className="value">$ 80</div>
            </div>
            <div className="summaryItem">
              <div className="proprity">estimited shipping</div>
              <div className="value">$ 5.90</div>
            </div>
            <div className="summaryItem">
              <div className="proprity">shipping discount</div>
              <div className="value">$ -5.90</div>
            </div>
            <hr />
            <div className="summaryItem">
              <div className="proprity"><strong>total</strong></div>
              <div className="value"><strong>$ 80</strong></div>
            </div>
          </div>
          <button>
            <div className="text">continue shopping</div>
            <div className="layer"></div>
          </button>

        </div>
      </div>
    </div>
  )
}

  // !component 
