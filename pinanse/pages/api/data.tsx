// pages/api/data.js
export default function handler(req, res) {
    const data = {
      totalIncome: '250',
      totalExpenses: '250.56',
    };
  
    res.status(200).json(data);
  }
  