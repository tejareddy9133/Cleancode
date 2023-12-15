import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid red",
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "15%" }}>
          <img
            src="https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWl8ZW58MHx8MHx8fDA%3D"
            alt=""
            height={"90%"}
            width={"100%"}
          />
        </div>
        <div
          style={{
            width: "75%",
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ backgroundColor: "teal", height: "80%", width: "auto" }}
          >
            About
          </div>
          <div
            style={{ backgroundColor: "teal", height: "80%", width: "auto" }}
          >
            US
          </div>
          <div
            style={{ backgroundColor: "teal", height: "80%", width: "auto" }}
          >
            Cricket
          </div>
          <div
            style={{ backgroundColor: "teal", height: "80%", width: "auto" }}
          >
            US
          </div>
          <div
            style={{ backgroundColor: "teal", height: "80%", width: "auto" }}
          >
            Cricket
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
