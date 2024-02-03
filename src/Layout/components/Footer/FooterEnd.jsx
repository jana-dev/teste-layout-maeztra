import React from 'react'
import './FooterEnd.css'
import PoweredByVtex from '../../../assets/powered-by-vtex.png'
import PoweredByMaeztra from '../../../assets/powered-by-maeztra.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkedIn, Facebook, Instagram, YouTube } from '@mui/icons-material';
import { faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';

export const FooterEnd = () => {
    return (
        <div className='footer-end'>
            <div className='social'>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/maeztraconsultoria/" target='_blank' rel="noreferrer">
                            <Facebook sx={{ fontSize: 32 }} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/maeztra/" target='_blank' rel="noreferrer">
                            <LinkedIn sx={{ fontSize: 32 }} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/maeztra_consultoria/" target='_blank' rel="noreferrer">
                            <Instagram sx={{ fontSize: 32 }} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@maeztra" target='_blank' rel="noreferrer">
                            <YouTube sx={{ fontSize: 32 }} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='payments'>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCcVisa} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCcMastercard} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCcVisa} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCcMastercard} />
                    </li>
                </ul>
            </div>
            <div className='powered'>
                <ul>
                    <li>
                        <img src={PoweredByVtex} alt="powered by vtex" />
                    </li>
                    <li>
                        <img src={PoweredByMaeztra} alt="powered by maeztra" />
                    </li>
                </ul>
            </div>
        </div>
    )
}