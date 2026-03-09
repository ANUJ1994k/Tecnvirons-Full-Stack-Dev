import { useEffect } from "react";
import useTransactions from "../hooks/useTransactions";
import TransactionTable from "../components/TransactionTable";

export default function Dashboard() {
    const { transactions, setPage } = useTransactions();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      
      <h1>DataMart Transactions</h1>
      
      <TransactionTable transactions={transactions} />
    </div>
  );
}