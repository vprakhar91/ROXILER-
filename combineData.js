const asyncHandler = require('express-async-handler');
const listTransactions = require('./listTransactions'); 
const statistics = require('./statistics');
const barChart = require('./barChart');
const pieChart = require('./pieChart');

const combineData = asyncHandler(async (req, res) => {
  const month = req.query.month;

  const transactions = await listTransactions(month);
  const stats = await statistics(month);
  const barChartData = await barChart(month);
  const pieChartData = await pieChart(month);


  const combinedData = {
    transactions: transactions.data,
    pagination: transactions.pagination,
    statistics: stats,
    barChart: barChartData,
    pieChart: pieChartData,
  };

  res.json(combinedData);
});

module.exports = combineData;
