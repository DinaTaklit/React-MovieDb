import React from 'react'
import { FaLinkedinIn, FaGithubAlt, FaTwitter } from "react-icons/fa";
import './Footer.scss'

function Footer() {
    return (
        <div className="row">
            <div className="col-md-8 col-sm-6">
          <h3>ABOUT ME</h3>
          <p>
            I am Dina TAKLIT, a software engineer and a web developer who loves building web apps. I have a passion for Web development and Artificial Intelligence Field. I spend my time writing clean, well commented, organized, and optimized code.  
          </p>
          <ul className="list-inline social-icons">
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/dina-taklit/">
                <FaLinkedinIn/>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/DinaTaklit">
                <FaGithubAlt/>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/dina-taklit/">
                <FaTwitter/>
              </a>
            </li>
          </ul>
        </div>
            <div className="col-md-4 col-sm-6">
          <h3>KEEP IN TOUCH</h3>
          <ul className="list-unstyled">
            <li>
              <p>
                <strong>
                  <i className="fas fa-map-marker-alt"></i> Address:
                </strong>{" "}
                    Setif, Algeria
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <i className="fas fa-map-marker-alt"></i> Phone:
                </strong>{" "}
                +213 556 41 86 11
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <i className="fas fa-envelope"></i> Email:
                </strong>{" "}
                ez_taklit@esi.dz
              </p>
            </li>
          </ul>
        </div>
        </div>
    )
}

export default Footer
