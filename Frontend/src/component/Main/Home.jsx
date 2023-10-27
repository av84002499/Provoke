import React from "react";

const Home = () => {
  return (
    <table className="pricing-table">
      <thead>
        <tr>
          <th>Plan</th>
          <th>Monthly Price</th>
          <th>Yearly Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basic</td>
          <td>$100</td>
          <td>$8700</td>
        </tr>
        <tr>
          <td>Standard</td>
          <td>$200</td>
          <td>$15600</td>
        </tr>
        <tr>
          <td>Premium</td>
          <td>$500</td>
          <td>$37200</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Home;