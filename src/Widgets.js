import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newArticle =(heading, subtitle) =>(
        <div className="windgets__article">
           <div className="windgets__articleLeft">
              <FiberManualRecordIcon />
           </div>
           <div className="windgets__articleRight">
               <h4>{heading}</h4>
               <p>{subtitle}</p>
           </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
               <h2>LinkedIn News</h2>
               <InfoIcon />
            </div>
            {newArticle("React is back", "Top news - 9099 readers")}
            {newArticle("Coronavirus: UK update", "Top news - 9099 readers")}
            {newArticle("Coronavirus: UK update", "Top news - 9099 readers")}
            {newArticle("Coronavirus: UK update", "Top news - 9099 readers")}
            {newArticle("Coronavirus: UK update", "Top news - 9099 readers")}
            {newArticle("Coronavirus: UK update", "Top news - 9099 readers")}
            {newArticle("React is back", "Top news - 9099 readers")}
            {newArticle("React is back", "Top news - 9099 readers")}
            {newArticle("React is back", "Top news - 9099 readers")}
        </div>   
    );
}

export default Widgets
