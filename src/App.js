import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './App.css'

const App = ({ month, search, perPage, currentPage }) => {
  const [transactions, setTransactions] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`/transactions`, {
          params: {
            month,
            search,
            page: currentPage,
            per_page: perPage,
          },
        });

        setTransactions(response.data.data);
        setTotalPages(Math.ceil(response.data.pagination.total_items / perPage));
      } catch (error) {
        console.error(error);
       
      }
    };

    fetchTransactions();
  }, [month, search, perPage, currentPage]); // Update on changes

  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Date of Sale</th>
          <th>Price</th>
          <th>Sold</th>
          <th>Category</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.product_id}</td>
            <td>{transaction.dateOfSale.toLocaleDateString()}</td>
            <td>{transaction.price}</td>
            <td>{transaction.isSold ? 'Yes' : 'No'}</td>
            <td>{transaction.category}</td>
            {/* Add more table cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
