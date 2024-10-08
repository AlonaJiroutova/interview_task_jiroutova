import "./Table.css";
import { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const url =
  "https://raw.githubusercontent.com/akcentacz/fe-interview-payments/refs/heads/main/data/payments/index.json";

const Table = () => {
  const [selectedValue, setSelectedValue] = useState({
    currency: "",
    payType: "",
    payStatus: "",
  });
  const [data, setData] = useState([]);
  const [detailInfo, setDetailInfo] = useState({});
  const [id, setId] = useState(1);
  // const [showDetails, setShowDetails] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortHandling = (key) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (sortOrder === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
    }
  });

  const filterHandling = (e) => {
    const { name, value } = e.target;
    setSelectedValue({ ...selectedValue, [name]: value });
  };

  const detailHandling = (paymentId) => {
    const url2 = `https://raw.githubusercontent.com/akcentacz/fe-interview-payments/refs/heads/main/data/payments/details/${paymentId}.json`;
    fetch(url2)
      .then((response) => response.json())
      .then((newData) => {
        console.log(newData);
        setDetailInfo(newData);
      })
      .catch((error) => {
        alert("Payment not found")
        console.error("Fetch error:", error);
      });

    setId(paymentId);
    // setShowDetails(!showDetails);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="container">
      <table className="table">
        <TableHead
          selectedValue={selectedValue}
          sortBy={sortBy}
          sortOrder={sortOrder}
          sortHandling={sortHandling}
          filterHandling={filterHandling}
        />
        <TableBody
          sortedData={sortedData}
          data={data}
          selectedValue={selectedValue}
          id={id}
          detailInfo={detailInfo}
          detailHandling={detailHandling}
        />
      </table>
    </div>
  );
};

export default Table;
