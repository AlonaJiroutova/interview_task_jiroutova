import "./TableBody.css";
import parse from "html-react-parser";

const TableBody = ({
  sortedData,
  data,
  selectedValue,
  id,
  detailInfo,
  detailHandling,
}) => {
  return (
    <tbody>
      {sortedData
        .filter((item) => {
          return selectedValue.currency === ""
            ? item
            : item.currency.includes(selectedValue.currency);
        })
        .filter((item) => {
          return selectedValue.payType === ""
            ? item
            : item.paymentType.includes(selectedValue.payType);
        })
        .filter((item) => {
          return selectedValue.payStatus === ""
            ? item
            : item.status.includes(selectedValue.payStatus);
        })
        .map((item) => {
          const {
            paymentId,
            timestamp,
            amount,
            currency,
            paymentType,
            status,
          } = item;

          const date = new Date(timestamp).toLocaleDateString();
          const index = paymentId - 1;
          console.log(date);
          return (
            <tr key={paymentId}>
              <td>{date}</td>
              <td>{amount}</td>
              <td>{currency}</td>
              <td>{paymentType}</td>
              <td>{status}</td>
              <td className="detail-container">
                <a
                  className="detail"
                  href="#"
                  onClick={() => detailHandling(paymentId)}
                >
                  Details
                </a>
                {paymentId === id && (
                  <div
                    className="detail-block"
                    // className={
                    //   showDetails
                    //     ? "detail-block show"
                    //     : "detail-block hide"
                    // }
                  >
                    <p>
                      Date:
                      {new Date(data[index].timestamp).toLocaleString()}
                    </p>
                    <p>Amount:{data[index].amount}</p>
                    <p>Currency:{data[index].currency}</p>
                    <p>Payment Type:{data[index].paymentType}</p>
                    <p>Payment Status:{data[index].status}</p>
                    <p>Recipient: {detailInfo.recipient}</p>
                    <span>Note: {parse(`${detailInfo.note}`)}</span>
                  </div>
                )}
              </td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default TableBody;
