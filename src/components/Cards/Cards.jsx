import React from 'react'
import styles from './Cards.module.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import CountUp from 'react-countup'
import cx from 'classnames'; 
import loadingImage from '../../images/loading.gif'

function Cards({data: {confirmed, recovered, deaths, lastUpdate }}) {
    lastUpdate = new Date(lastUpdate).toDateString();
    return (
        <div className={cx("container my-3", styles.container)}>
            {   !confirmed ? (
                    <div className="text-center"><img className="w-50" src={loadingImage} alt="Lazy loading"/></div>
                ) : (
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className={cx("card text-center", styles.infected)}>
                                <div className="card-body">
                                    <h5 className="card-title">Infected</h5>
                                    <CountUp 
                                        start={0} 
                                        end={confirmed.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                    <p className={cx("card-text", styles.date)}>{lastUpdate}</p>
                                    <p>Number of active cases of COVID-19</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className={cx("card text-center", styles.recovered)}>
                                <div className="card-body">
                                    <h5 className="card-title">Covered</h5>
                                    <CountUp 
                                        start={0} 
                                        end={recovered.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                    <p className={cx("card-text", styles.date)}>{lastUpdate}</p>
                                    <p>Number of recoveries form COVID-19</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className={cx("card text-center", styles.deaths)}>
                                <div className="card-body">
                                    <h5 className="card-title">Deaths</h5>
                                    <CountUp 
                                        start={0} 
                                        end={deaths.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                    <p className={cx("card-text", styles.date)}>{lastUpdate}</p>
                                    <p>Number of deaths caused by COVID-19</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Cards
