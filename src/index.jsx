import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

// document.getElementById('root').addEventListener("scroll", () => {
// 	console.log("scroll");
// })

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)