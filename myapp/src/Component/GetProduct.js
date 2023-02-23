import React,{useState,useLayoutEffect,useEffect} from 'react';
// import NavBar from './NavBar'


console.log(process.env.REACT_APP_API)
function GetProduct(props) {
    const[emptyCart,setCart]=useState([])
    useLayoutEffect(()=>{
        document.body.style.backgroundColor="white";
        document.title="home"
    })
    const[apiProduct,setProduct]=useState([])

    useEffect(()=>{
        
            props.setProgress(40)
            fetch(`https://fakestoreapi.com/products/category/${props.getCatgory}`)
            .then((response)=>response.json())
            .then((data)=>{
                props.setProgress( 100)

                setProduct(data)})
            .catch((error)=>console.log(error))
        
    },[])
    // const getProductAPI=()=>{
    //     props.setProgress(40)
    //     fetch(`https://fakestoreapi.com/products`)
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         props.setProgress( 100)
    //         console.log(process.env.REACT_APP_API)
    //         setProduct(data)})
    //     .catch((error)=>console.log(error))
    // }
//     const test=()=>{
// // console.log("test")
//     }
// let cart = []
const addtocart = (event) => {
    let titlepro = event.target.parentNode.querySelector('.card-title').textContent
    let desc =event.target.parentNode.querySelector('.card-text').textContent
   let existingItem = emptyCart.findIndex(item=>item.title===item.titlepro)
   if(existingItem>0){
    emptyCart[existingItem].quantity +=1;
   }else{
    emptyCart.push({"title":titlepro,"descrption":desc,"quantity": 1})
    console.log(emptyCart)}
    setCart(emptyCart)

}
  
  

  return (
    <div>
      
        {/* <button  onClick={getProductAPI}>Get Product</button>  */}
        <div className='my-5'></div>
      <div className='row '>
                {apiProduct.map((element,index)=>(
     <div className='col-md-3 my-4 ' key={element.id}>
             <div  className="card" style={{width: "350px", height:"400px"}}>
                        <img src={element.image} style={{width: "220px", height:"230px",marginLeft:"60px"}} alt={element.title}/>
                     <div className="card-body">
                        <h5 className="card-title">{element.title.slice(0,20)}</h5>
                        <p className="card-text">{element.description.slice(0,64)}</p>
                        <button onClick={(event) => addtocart(event)} style={{ display: "flex", zIndex: "auto",  justifyContent: "center", backgroundColor: "indianred", position: "absolute"}} href="/" className="btn btn-primary">Add to Cart</button>
                    
                    </div>
         </div>
  </div>
        ))}

      </div>
    </div>
  )
}

export default GetProduct
