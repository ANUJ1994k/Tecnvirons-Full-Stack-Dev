import {  List } from "react-window";

const Row = ({ index, style, data }) => {
  const item = data[index];

  if (!item) return null;

  return (
    <div style={style}>
      {item.customer_name} | {item.product} | ₹{item.amount}
    </div>
  );
};

export default function TransactionTable({ transactions = [] }) {
  if (!transactions.length) {
    return <div>Loading transactions...</div>;
  }

  return (
    <List
      height={600}
      itemCount={transactions.length}
      itemSize={50}
      width="100%"
      itemData={transactions}
    >
      {Row}
    </List>
  );
}