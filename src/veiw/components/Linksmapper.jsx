import React, { Fragment } from "react";
import LinkLi from "./LinkLi";
import ArrowSVG from "./ArrowSVG";

const Linksmapper = ({ depth, data }) => {
  return data?.map((e) => {
    if (e.path === null)
      return (
        <div key={e.id}>
          {depth === 1 ? (
            <span className="high-level-link">
              {e.linkName} <ArrowSVG></ArrowSVG>
            </span>
          ) : (
            <span className="low-level-link">{e.linkName}</span>
          )}
          <div>
            {e.children && (
              <Linksmapper depth={depth + 1} data={e.children}></Linksmapper>
            )}
          </div>
        </div>
      );
    else
      return (
        <LinkLi key={e.id} path={e.path}>
          {e.linkName}
        </LinkLi>
      );
  });
};

export default Linksmapper;
