import React from "react";

export default function TradeDetailCard({ headline, subHeading, children }) {
  return (
    <div className="Trade-detail-card-main">
      {headline && (
        <div className="Trade-detail-card-header-div">
          <div className="Trade-detail-card-header">{headline}</div>
          {subHeading && (
            <div className="Trade-detail-card-subheader">{subHeading}</div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
