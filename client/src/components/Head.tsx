import React from 'react'

export const Head = (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <h1>Home</h1>
        <div id="user" />
      </div>
      <div id="nav">
        <div id="el" style={{ color: "#000" }}>
          Top picks
        </div>
        <div id="el">Recent</div>
        <div id="el">Collections</div>
        <div id="el">Explore</div>
      </div>
    </>
  );