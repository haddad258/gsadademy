import React, { Component } from 'react';
import Style from 'style-it';
export default ({ children }) =>
  (
    <Style>
      {`
            .container{
                display: flex;
                width:100%;
                align-items: center;
              }
              
              .border{
                border-bottom: 1px solid black;
                width: 80%;
              }
              
              .content {
                font-size: 17px;
                padding: 0 10px 0 10px;
              }
            `}
      <div className="container">
        <div className="border" />
        <span className="content">
          {children}
        </span>
        <div className="border" />
      </div>
    </Style>
  );