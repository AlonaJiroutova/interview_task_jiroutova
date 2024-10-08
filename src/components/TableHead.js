import "./TableHead.css";

const TableHead = ({
  selectedValue,
  sortBy,
  sortOrder,
  sortHandling,
  filterHandling,
}) => {
  return (
    <thead>
      <tr>
        <th onClick={() => sortHandling("timestamp")}>
          Payment Date
          {sortBy === "timestamp" && (sortOrder === "asc" ? "↑" : "↓")}
        </th>
        <th onClick={() => sortHandling("amount")}>
          Amount
          {sortBy === "amount" && (sortOrder === "asc" ? "↑" : "↓")}
        </th>
        <th>
          <form action="submit">
            <label htmlFor="currency">Currency:</label>
            <select
              onChange={filterHandling}
              className="select-el"
              id="currency"
              name="currency"
              value={selectedValue.currency}
            >
              <option value=""></option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="CZK">CZK</option>
              <option value="HUF">HUF</option>
            </select>
          </form>
        </th>
        <th>
          <form action="submit">
            <label htmlFor="payType">Payment Type:</label>
            <select
              onChange={filterHandling}
              className="select-el"
              id="payType"
              name="payType"
              value={selectedValue.payType}
            >
              <option value=""></option>
              <option value="APPLE_PAY">APPLE_PAY</option>
              <option value="GOOGLE_PAY">GOOGLE_PAY</option>
              <option value="CARD_ONLINE">CARD_ONLINE</option>
              <option value="BANK_TRANSFER">BANK_TRANSFER</option>
            </select>
          </form>
        </th>
        <th>
          <form action="submit">
            <label htmlFor="payStatus">Payment Status:</label>
            <select
              onChange={filterHandling}
              className="select-el"
              id="payStatus"
              name="payStatus"
              value={selectedValue.payStatus}
            >
              <option value=""></option>
              <option value="PENDING">PENDING</option>
              <option value="SUCCESS">SUCCESS</option>
              <option value="CANCELED">CANCELED</option>
            </select>
          </form>
        </th>
        <th>Detail info</th>
      </tr>
    </thead>
  );
};

export default TableHead;
