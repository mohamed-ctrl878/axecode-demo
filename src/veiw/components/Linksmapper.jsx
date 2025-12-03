import React, { Fragment } from "react";
import LinkLi from "./LinkLi";
import ArrowSVG from "./ArrowSVG";

const Linksmapper = ({ depth, data, setToggle }) => {
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
              <Linksmapper
                setToggle={setToggle}
                depth={depth + 1}
                data={e.children}
              ></Linksmapper>
            )}
          </div>
        </div>
      );
    else
      return (
        <LinkLi onClick={() => setToggle((e) => !e)} key={e.id} path={e.path}>
          {e.linkName}
        </LinkLi>
      );
  });
};

export default Linksmapper;
