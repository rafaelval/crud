import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, postProduct } from './redux/actions';

function App() {

  const [isLoading, setIsLoading] = useState(true)

  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  const getproducts= async()=>{
    await dispatch(getProducts())
  }

  const newProduct = async()=>{
    await dispatch(postProduct({name: "agua",
      size: 3,
      unitaryPrice: 2000,
      imgUrl: "https://d2yoo3qu6vrk5d.cloudfront.net/images/20160617113152/agua-en-botella-www-soycarmin-com-914x607.jpg?itok=1466181167",
      description: "agua embotellada"}))
  }

  useEffect(() => {
    newProduct()
  }, [])
  

  useEffect(() => {
    getproducts()
  }, [products])
  
  

  // useEffect(() => {
  //   return (async () => {
  //     await dispatch(getProducts())
  //     setIsLoading(false)
  //   })()
  // }, [products])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
