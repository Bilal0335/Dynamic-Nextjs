import React from "react";
import Link from "next/link";

const Products = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Product Page</h1>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ margin: "10px 0" }}>
          <Link
            href="/products/1"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Product 1
          </Link>
        </li>
        <li style={{ margin: "10px 0" }}>
          <Link
            href="/products/2"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Product 2
          </Link>
        </li>
        <li style={{ margin: "10px 0" }}>
          <Link
            href="/products/3"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Product 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
