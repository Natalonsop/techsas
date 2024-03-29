import React from "react";
import Fondo11Chimba from "@images/Fondo11Chimba.png";
import ChicaCorriendo from "@images/Chica-Corriendo.png";
import Mancuernas from "@images/Mancuernas.png";
import GymIso from "@images/GymIso.png";
import Canchita from "@images/Canchita.png";


export default function HomePage(){
    return (
        <>
            <div className="gen Body"></div>
            <div className="section over-hide">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section text-center py-5 py-md-0">
                                <input className="pricing" type="checkbox" id="pricing" name="pricing"/>
                                <label htmlFor="pricing"><span className="block-diff">Trainers<span
                                    className="float-end">Places</span></span></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="pricing-wrap">
                                                <h4 className="mb-5">Trainers</h4>
                                                <h2 className="mb-2"> Contrata tu entrenador</h2>
                                                <p className="mb-4">Desde 40.000 COP por persona</p>
                                                
                                                
                                                <a href="#0" className="link">Elige tu entrenador</a>
                                                <div className="img-wrap img-2">
                                                    <img src={Fondo11Chimba} alt="" />
                                                </div>
                                                <div className=" img-1">
                                                    <img src={ChicaCorriendo} alt=""style={{ width: 290 }} />
                                                </div>       
                                                <div className="img-wrap img-6">
                                                    <img src={Mancuernas} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="pricing-wrap">
                                                <h4 className="mb-5">Sites</h4>
                                                <h2 className="mb-2"> Arrienda un lugar </h2>
                                                <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i>
                                                </p>
                                                <p className="mb-4">Escoje una cancha o gym en la ciudad que prefieras</p>
                                                <a href="#0" className="link">Elige un lugar</a>
                                                <div className="img-wrap img-2">
                                                    <img src="https://assets.codepen.io/1462889/grass.png" alt="" />
                                                </div>
                                                <div className="img-wrap img-4">
                                                    <img src={Canchita} alt="" />
                                                </div>
                                                <div className="img-wrap img-5">
                                                    <img src="https://assets.codepen.io/1462889/Ivy.png" alt="" />
                                                </div>
                                                <div className="img-wrap img-7">
                                                    <img src={GymIso} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
