import React, { useState,useContext,useEffect } from 'react'
import {Link} from "react-router-dom";
import AuthContext from '../../context/auth-context';
import fetchApi from '../../utils/fetch';


export default function NavBar() {
  const context = useContext(AuthContext);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const [username,setUsername] = useState('');
    const [auth,setAuth] = useState(false);
     
    
    useEffect(() => {
      if(!context.isAuthenticated){
        return;
      }
      setAuth(true);
      setLoading(true);
        const graphqlQuery = {
            query:`
              {
                user{
                    name
                }
              }
            `
          }
         
          fetchApi(graphqlQuery,context.token)
          .then((resData) => {

            if(resData.errors && resData.errors[0].status === 422){
              setError(
                "Validation failed"
              );
              setLoading(false);
              return null;
            }
            if(resData.errors){
              setError(
                "No name found"
              );
              setLoading(false);
              return null;
            }
            if(resData.data.user){
              setUsername(resData.data.user.name);
              setLoading(false);
            }
          })
    }, [context,setLoading,setError,setUsername,setAuth])
    return (
        <header className="navtop--header">
          <nav className="navbar navbar-expand-lg  nav--menus ">
                <div className="container">
                    <div className="navbar--brand--user">
                       <Link className="navbar-brand" to="/dashboard">Sio<span className="navbar-p">p</span>p</Link>
                       {!auth? null : (
                           <>
                             <span className="breadcumb-slash"></span>
                             <span className="navbar-user">{loading  ? 'Loading...' : username }</span>
                           </>
                       )}
                       
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-end mb-2 mb-lg-0 w-100">
                          {auth ? (
                              <>
                                <li className="nav-item">
                                <Link className="nav-link"  to="#">
                                   Support
                                </Link>
                            </li>
                            <li className="nav-v-divider" />
                            <li className="nav-item">
                                <a  style={{cursor:"pointer"}} className="nav-link d-flex align-items-center" onClick={context.isLogout}  >
                                    <span>Sign Out</span>
                                    <svg style={{width:"20px",height:"20px"}} className="ms-2" version="1.1" id="Log_out" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 20 20" enableBackground="new 0 0 20 20">
                                    <path fill="" d="M19,10l-6-5v3H6v4h7v3L19,10z M3,3h8V1H3C1.9,1,1,1.9,1,3v14c0,1.1,0.9,2,2,2h8v-2H3V3z"/>
                                    </svg>

                                </a>
                            </li>
                              </>
                          ) : (
                            <>
                                <li className="nav-item">
                                <Link className="nav-link"  to="/login">
                                   Login
                                </Link>
                                </li>
                                <li className="nav-item ms-1">
                                    <Link className="nav-link btn-dark text-white"  to="/signup">
                                    Signup
                                    </Link>
                                </li>
                            </>
                            
                            )}
                          
                          
                        </ul>
                    
                    </div>
                </div>
                </nav>
        </header>
    )
}
