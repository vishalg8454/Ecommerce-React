import {createContext,useContext,useEffect,useState} from "react";
import axios from "axios";

const ProductContext = createContext(null);

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({children}) =>{
    
    const [productList,setProductList] = useState([]);
    useEffect(()=>{
        (async () => {
          try {
            const response = await axios.get(`api/products`);
            setProductList(response.data.products);
          } catch (error) {
            console.log(error);
          }
        })();
      },[])
    return(
        <ProductContext.Provider value={{productList}}>
            {children}
        </ProductContext.Provider>
    );
}

export {ProductProvider,useProduct};
