import React from "react";
import Table from "react-bootstrap/Table";

/**This is the table component of the footer. Using React Bootstrap's Table.
 * None of these links go anywhere at this point, but in the future they may.*/
export default function FooterMain() {
  return (
    <>
      <Table
        id="footer-table"
        className="text-center table-borderless"
        size="sm"
      >
        <thead>
          <tr>
            <th>Shop Plants</th>
            <th>Shop Supplies</th>
            <th>Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="links">
              <a href="#">All Succulents</a>
            </td>
            <td className="links">
              <a href="#">Soil</a>
            </td>
            <td className="links">
              <a href="#">About Us</a>
            </td>
          </tr>
          <tr>
            <td className="links">
              <a href="#">Explore by Genre</a>
            </td>
            <td className="links">
              <a href="#">Food and Fertilizer</a>
            </td>
            <td className="links">
              <a href="#">Events/Calendar</a>
            </td>
          </tr>
          <tr>
            <td className="links">
              <a href="#">Exclusive Products</a>
            </td>
            <td className="links">
              <a href="#">Pots and Containers</a>
            </td>
            <td className="links">
              <a href="#">Shipping/Ordering</a>
            </td>
          </tr>
          <tr>
            <td className="links">
              <a href="#">New Products</a>
            </td>
            <td className="links"></td>
            <td className="links">
              <a href="#">Succulent Care</a>
            </td>
          </tr>
          <tr>
            <td className="links"></td>
            <td className="links"></td>
            <td className="links">
              <a href="#">Contact Us</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
