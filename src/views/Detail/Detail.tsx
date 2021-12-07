import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../hoc/Layout';


interface DetailProps{}


export default function Detail(props:DetailProps) {
    return (
        <Layout showNavTab={true}>
            <div className="app-shiphment-detail">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="top-level">
                            <span className="display-span">All Shipment</span>
                            <svg style={{width:"12px",height:"auto"}} className="ms-1" version="1.1" id="Chevron_thin_right" xmlns="http://www.w3.org/2000/svg"  x="0px"
                                    y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
                                   <path d="M13.25,10L6.109,2.58c-0.268-0.27-0.268-0.707,0-0.979c0.268-0.27,0.701-0.27,0.969,0l7.83,7.908
                                    c0.268,0.271,0.268,0.709,0,0.979l-7.83,7.908c-0.268,0.271-0.701,0.27-0.969,0c-0.268-0.269-0.268-0.707,0-0.979L13.25,10z"/>
                            </svg>
                            <span className="ms-2 display--subhead">Shipment Details</span>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="col-12 cd-section">
                                   <div>
                                        <h2 className=" display-3 mb-0">NHJ78652365</h2>
                                        <p className="display-span">Created at: 2021-3-4 08:34</p>
                                   </div>
                                   <div>
                                       <Link to="/shipment/update?_sid=23ghchdcd" className="btn btn-dark">Update Shipment</Link>
                                   </div>
                                </div>
                                <div className="cd-detail">
                                    <div className="cd-detail-head">
                                        <p>Please confirm your shipment provided, if changes is needed use the Update button above</p>
                                    </div>
                                    <div className="cd-detail-listing">
                                        <div className="row mb-1">
                                            <div className="col-12 col-md-6">
                                                <div>
                                                    <span className="display-span">PORT OF LOADING (ORIGIN)</span>
                                                    <h5>Shanghai Port</h5>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                                <div>
                                                    <span className="display-span">TYPE</span>
                                                    <h5>FCL</h5>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                                <div>
                                                    <span className="display-span">CURRENT STATUS</span>
                                                    <h5 className="status-active-color">ACTIVE</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-12 col-md-6">
                                                <div>
                                                    <span className="display-span">LOCATION OF DISCHARGE (DESTINATION)</span>
                                                    <h5>Saarbrücker Str. 38, 10405 Berlin</h5>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                                   <div>
                                                    <span className="display-span">SHIPPING MODE</span>
                                                    <h5>Sea</h5>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3"></div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-12 col-md-6">
                                                <div>
                                                    <span className="display-span">COMMODITY</span>
                                                    <h5>T-shirts(Summer2018) from Shanghai to Hamburg</h5>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                                   <div>
                                                    <span className="display-span">TOTAL</span>
                                                    <h5>10000</h5>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-3"></div>
                                        </div>
                                        <br />
                                        <hr className="border-top" />
                                        <div className="cargo mt-4">
                                            <h5>Cargo - </h5>
                                            <div className="row mt-3">
                                                <div className="col-12 col-md-6">
                                                    <div>
                                                        <span className="display-span">TYPE</span>
                                                        <h5>Fabric</h5>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-3">
                                                    <div>
                                                        <span className="display-span">DESCRIPTION</span>
                                                        <h5>1000 Blue T-shirts</h5>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-3">
                                                    <div>
                                                        <span className="display-span">VOLUME</span>
                                                        <h5>3</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="cargo mt-4">
                                            <h5>Services - </h5>
                                            <div className="row mt-3">
                                                <div className="col-12 col-md-6">
                                                    <div>
                                                        <span className="display-span">TYPE</span>
                                                        <h5>Customs</h5>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-3">
                                                    <div>
                                                        <span className="display-span">VALUE</span>
                                                        <h5>null</h5>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-3">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-4 pb-2">
                    <div className="card">
                        <div className="card-body">
                            <p>This is a danger zone, Be sure before you continue the 'delete' process.</p>
                            <div>
                              <button className="btn btn-danger">Delete Shipment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
