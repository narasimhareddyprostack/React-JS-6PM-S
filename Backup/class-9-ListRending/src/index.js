import ReactDOM from 'react-dom/client'
import App from './App'
let root=ReactDOM.createRoot(document.getElementById('root'))
//root.render("Hello,!GE")         //str
//root.render(<h2>Hello,!GE</h2>) //tag
//root.render(<h1>GM</h1><h2>GE</h2>) 
//root.render(<><h1>GM</h1><h2>GE</h2><h3>GN</h3></>);  //empty JSX fragment
root.render(<App/>)  //component
