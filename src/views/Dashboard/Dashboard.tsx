import React,{useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../hoc/Layout';
import ShipFreight from '../../assets/images/ship-64.png'; 
import AirFreight from '../../assets/images/airplane-64.png'; 
import TruckFreight from '../../assets/images/truck-64.png'; 
import AuthContext from '../../context/auth-context';

interface DashboardProps{}

export default function Dashboard(props:DashboardProps) {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [findValue, setFindValue] = useState('');
    const [findshipmentData, setFindShipmentData] = useState([]);
    const [shipmentData, setShipmentData] = useState([]);

    const context = useContext(AuthContext);



    useEffect(() => {
        if(!context.isAuthenticated) return;
        setLoading(true);
            const graphqlQuery = {
                query:`
                {
                    shipments {
                        shipments{
                            id
                            name
                            mode
                            type
                            destination
                            origin
                        }
                    }
                }
                `
            }
            fetch('http://localhost:5000/graphql',{
                method:'POST',
                headers:{
                Authorization: 'Bearer '+ context.token,
                'Content-Type': 'application/json'
                },
                body:JSON.stringify(graphqlQuery)
            })
            .then((res) => {
                return res.json();
            })
            .then((resData) => {
                console.log(resData,'shipment dasboard');
                if(resData.errors && resData.errors[0].status === 422){
                setError(
                    "Validation failed"
                );
                setLoading(false);
                return null;
                }
                if(resData.errors){
                setError('Shipment failed to load');
                setLoading(false);
                return null;
                }
                if(resData.data.shipments.shipments){
                    setTimeout(() => {
                        setShipmentData(resData.data.shipments.shipments);
                        setLoading(false);
                    },1000);
                }
            });
        
    }, [context,setLoading,setError])

    const handleFindChange = (e:any) => setFindValue(e.target.value); 
    const handleFind = () => {
            console.log(findValue);
    }


    return (
        <Layout showNavTab={true}>
            <div className="app--home">
           {loading  ? (<div className="text-center">Loading....</div>) : (<div className="row">
                <div className="col-12 col-lg-8">
                    <div className="top--section">
                        <div className="d-flex align-items-start justify-content-between">
                            <h4 className="mb-4 display-4">Quick access</h4>
                            <Link to="/create" className="btn create-action d-flex align-items-center">
                                <svg style={{width:"22px",height:"22px"}} version="1.1" id="Plus" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 20 20" enable-background="new 0 0 20 20">
                                   <path d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"/>
                                </svg>
                                <span>Create Shipment</span>
                            </Link>
                        </div>
                        <div className="list--cards">
                            <div className="row">
                                <div className="col-12 col-lg-4 col_">
                                    <Link to="/create?mode=sea" className="card">
                                        <div className="card-body">
                                            <div className="img-container">
                                                <img src={ShipFreight}  alt="" />
                                            </div>
                                            <div className="card-title">
                                                <h5 className="display--subhead">Ship freight</h5>
                                                <span className="display-span">Reliable</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-lg-4 col_">
                                    <Link to="/create?mode=road" className="card">
                                        <div className="card-body">
                                            <div className="img-container">
                                                <img src={TruckFreight}  alt="" />
                                            </div>
                                            
                                            <div className="card-title">
                                                <h5 className="display--subhead">Truck freight</h5>
                                                <span className="display-span">Reliable</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div  className="col-12 col-lg-4 col_">
                                        <Link to="/create?mode=air" className="card">
                                            <div className="card-body">
                                                <div className="img-container">
                                                   <img src={AirFreight}  alt="" />
                                                 </div>
                                                <div className="card-title">
                                                    <h5 className="display--subhead">Plane freight</h5>
                                                    <span className="display-span">Reliable</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom--section mt-2">
                        {shipmentData.length > 0 ?
                           ( <>
                        <div className="d-flex align-items-center justify-content-between ">
                            <h4 className="display-4">Shipment history</h4>
                            <Link to="/dashboard/allshipment/" className="action--button  d-flex align-items-center">
                                <span className="display-span">See all</span>
                                <svg style={{width:"18px",height:"18px"}} className="ms-1" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg"  x="0px"
                                    y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
                                   <path d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="shipment-history-table">
                          <div className="table-responsive">

                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Shipment ID</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Mode</th>
                                        <th scope="col" className="col-1">Status</th>
                                        <th scope="col" className="col-1"></th>
                                    </tr>
                                </thead>
                                <tbody className="tbody">
                                    <tr>
                                        <th scope="row">NHJ78776</th>
                                        <td>Funiture</td>
                                        <td>Sea</td>
                                        <td>
                                            <a className="btn status-active">Active</a>
                                        </td>
                                        <td>
                                            <Link to="/shipment/2" className="btn act btn-outline d-flex align-items-center">
                                                <span>Detail</span>
                                                <svg style={{width:"12px",height:"12px"}} className="ms-1" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg"  x="0px"
                                                    y="0px" viewBox="0 0 20 20" fill="#333" enable-background="new 0 0 20 20">
                                                <path d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"># NHJ78776</th>
                                        <td>Funiture</td>
                                        <td>Sea</td>
                                        <td>
                                            <a className="btn status-completed">Completed</a>
                                        </td>
                                        <td>
                                            <a className="btn act btn-outline d-flex align-items-center">
                                                <span>Detail</span>
                                                <svg style={{width:"12px",height:"12px"}} className="ms-1" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg"  x="0px"
                                                    y="0px" viewBox="0 0 20 20" fill="#333" enable-background="new 0 0 20 20">
                                                <path d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">NHJ78776</th>
                                        <td>Funiture</td>
                                        <td>Sea</td>
                                        <td>Active</td>
                                        <td>
                                           <a className="btn act btn-outline d-flex align-items-center">
                                                <span>Detail</span>
                                                <svg style={{width:"12px",height:"12px"}} className="ms-1" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg"  x="0px"
                                                    y="0px" viewBox="0 0 20 20" fill="#333" enable-background="new 0 0 20 20">
                                                <path d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                                                </svg>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">NHJ78776</th>
                                        <td className="truncate">Funiture</td>
                                        <td>Sea</td>
                                        <td>Active</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">NHJ78776</th>
                                        <td>Funiture</td>
                                        <td>Sea</td>
                                        <td>Active</td>
                                        <td>@mdo</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </>)
                        
                        : (<div className="text-center mt-4">
                               <span>No Shipment</span> 
                         </div>)}
                    </div>

                  

                </div>
                <div className="col-12 col-lg-4">
                   <h4 className="mb-4 display-4">Tracking your shipment</h4>
                   <div className="app-rig--wrapper">
                       <div className="card">
                           <div className="card-body">
                               <div className="shipment--inp">
                                    <div className="input-gp mb-3">
                                            <input value={findValue} type="text" className="form-control" placeholder="Search by shipment ID" aria-label="" aria-describedby="basic-addon2" 
                                            onChange={handleFindChange}/>
                                            <button className="btn btn-primary" onClick={handleFind}>Find</button>
                                            </div>
                                    </div>
                                

                                {findshipmentData.length > 0 ? (<div className="shipment--display">
                                    <div className="shipment--map">
                                        map cant display
                                    </div>

                                    <div className="_shiping-details">
                                       <div className="shipping--location">
                                           <span className="loc-place">Atlana to Chicago apple store</span>
                                           <h5>NHJ78652365</h5>
                                       </div>
                                       <p className="shipping--desc">
                                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate possimus quod officia atque ea saepe repellat libero? Ab totam maxime et
                                       </p>
                                        <div className="shipping--lis-div">
                                            <ul className="lis_ul">
                                                <li>
                                                    <span>Mode</span>
                                                    <h5>Sea</h5>
                                                </li>
                                                <li className="lis-divider" />
                                                <li>
                                                    <span>Status</span>
                                                    <h5>Active</h5>
                                                </li>
                                            </ul>
                                        </div>
                                    <div className="view-shipment-action">
                                        <a className="btn"> See more</a>
                                    </div>
                                    </div>

                                </div>): null}
                           </div>
                       </div>
                   </div>
                </div>
            </div>)
            }
            
            </div>
            <br />
            <br />
        </Layout>
    )
}
