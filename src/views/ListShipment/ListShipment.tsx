import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import Table from '../../components/Table/Table';
import Layout from '../../hoc/Layout';


interface ListShipmentProps{}

export default function ListShipment(props:ListShipmentProps) {
    const [searchItem,setSearchItem] = useState('');
    const [searchError,setSearchError] = useState<String>('');
    const [dropdown, setDropdown] = useState<Boolean>(false);

    const handleDropdown = (e:any) => {

    }

    const handleChange =(e:any) => {
        setSearchItem(e.target.value);
    }
 
    return (
        <Layout showNavTab={true}>
             <div className="app-allshipment">
                <div className="allshipment-searchbar-wrapper">
                       <div className="col-5 col-md-6 col-lg-9">
                        <input type="text" value={searchItem} name="search" className="form-control" placeholder="Search by shipment ID" aria-label="" aria-describedby="basic-addon2" 
                            onChange={(e) => handleChange(e)}
                        />
                        {searchError ? (
                            <div className="invalid-feedback">{searchError}</div>
                        ) : null}
                        </div>
                        <Link to="/create" className="btn new-shipment-btn btn-primary">New Shipment</Link>
                        <button className="btn  btn-sm btn-outline-secondary export-btn tooltips">
                            <svg version="1.1" id="Share" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                viewBox="0 0 20 20" enableBackground="new 0 0 20 20" >
                               <path  d="M9,13h2V4h2l-3-4L7,4h2V13z M17,7h-3v2h2v9H4V9h2V7H3C2.447,7,2,7.447,2,8v11c0,0.552,0.447,1,1,1h14
                                c0.553,0,1-0.448,1-1V8C18,7.448,17.553,7,17,7z"/>
                            </svg>
                            <span className="tooltiptext">Export Table</span>
                        </button>
                </div>
              
                <div className="allshipment-table">
                     <div className="d-flex mb-3 align-items-center justify-content-between">
                       <h4 className="display-4">Shipment history</h4>
                        <div>
                            <span className="display-span">Sort by:</span>
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    shipmentID
                                </button> 
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/shipment/UFGTRE" className="dropdow-item">Detail</Link>
                                    </li>
                                    <li>
                                    <Link to="/shipment/edit?=UIODFT" className="dropdow-item">Edit</Link>
                                    </li>
                                    <li>
                                        <a className="dropdow-item">Delete</a>
                                    </li>
                                </ul>   
                            </div>
                        </div>
                     </div>
                       <div className="table-responsive">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Shipment ID</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Orgin</th>
                                            <th scope="col">Destination</th>
                                            <th scope="col">Mode</th>
                                            <th scope="col">Total</th>
                                            <th scope="col" className="col-1">Status</th>
                                            <th scope="col" className="col-1"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="tbody">
                                        <tr>
                                            <th scope="row">NHJ78776</th>
                                            <td>Funiture</td>
                                            <td>Funiture</td>
                                            <td>Funiture</td>
                                            <td>Sea</td>
                                            <td>1000</td>
                                            <td>
                                                <a className="btn status-active">Active</a>
                                            </td>
                                            <td>
                                                <div className="btn-group">
                                                    <button type="button" onClick={(e) => handleDropdown(e)} className="btn act btn-outline  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Action
                                                    </button> 
                                                    <ul className="dropdown-menu">
                                                        <li>
                                                            <Link to="/shipment/UFGTRE" className="dropdow-item">Detail</Link>
                                                        </li>
                                                        <li>
                                                        <Link to="/shipment/edit?=UIODFT" className="dropdow-item">Edit</Link>
                                                        </li>
                                                        <li>
                                                            <a className="dropdow-item">Delete</a>
                                                        </li>
                                                    </ul>   
                                                </div>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>

                            <div className="pagination mt-2">
                                <div className="col-12">
                                  <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item disabled">
                                        <a className="page-link" href="#"  aria-disabled="true">Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                    </nav>
                                </div>
                            </div>
                </div>
            </div>
        </Layout>

    )
}
