import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import './index.css';

const stock=[
{id: '1', name: 'Euro US Dollar', decimal: '4', symbol: 'EUR/USD'}, 
{id: '2', name: 'Euro Swiss Franc', decimal: '4', symbol: 'EUR/CHF'},
{id: '3', name: 'Euro Japanese Yen', decimal: '2', symbol: 'EUR/JPY'},
{id: '4', name: 'Euro British Pound', decimal: '4', symbol: 'EUR/GBP'},
{id: '5', name: 'Euro New Zealand Dollar', decimal: '4', symbol: 'EUR/NZD'},
{id: '6', name: 'Euro Canadian Dollar', decimal: '4', symbol: 'EUR/CAD'},
{id: '7', name: 'Euro Russian Ruble', decimal: '4', symbol: 'EUR/RUB'},
{id: '8', name: 'Euro Singapore Dollar', decimal: '4', symbol: 'EUR/SGD'},
{id: '9', name: 'Euro Danish Krone', decimal: '4', symbol: 'EUR/DKK'},
{id: '10', name: 'Euro Turkish Lira', decimal: '4', symbol: 'EUR/TRY'},
{id: '11', name: 'Euro South African Rand', decimal: '4', symbol: 'EUR/ZAR'},
{id: '12', name: 'Euro Australian Dollar', decimal: '4', symbol: 'EUR/AUD'},
{id: '13', name: 'Australian Dollar US Dollar', decimal: '4', symbol: 'AUD/USD'},
{id: '14', name: 'Australian Dollar Japanese Yen', decimal: '2', symbol: 'AUD/JPY'},
{id: '15', name: 'Australian Dollar Swiss Franc', decimal: '4', symbol: 'AUD/CHF'},
{id: '16', name: 'Australian Dollar Canadian Dollar', decimal: '4', symbol: 'AUD/CAD'},
{id: '17', name: 'Australian Dollar Singapore Dollar', decimal: '4', symbol: 'AUD/SGD'},
{id: '18', name: 'US Dollar Canadian Dollar', decimal: '4', symbol: 'USD/CAD'},
{id: '19', name: 'US Dollar Swiss Franc', decimal: '4', symbol: 'USD/CHF'},
{id: '20', name: 'US Dollar Japanese Yen', decimal: '2', symbol: 'USD/JPY'},
{id: '21', name: 'US Dollar New Zealand Dollar', decimal: '4', symbol: 'USD/NZD'},
{id: '22', name: 'US Dollar Russian Ruble', decimal: '4', symbol: 'USD/RUB'},
{id: '23', name: 'US Dollar Hong Kong Dollar', decimal: '4', symbol: 'USD/HKD'},
{id: '24', name: 'US Dollar UAE Dirham', decimal: '4', symbol: 'USD/AED'},
{id: '25', name: 'US Dollar Indian Rupee', decimal: '3', symbol: 'USD/INR'},
{id: '26', name: 'US Dollar Chinese Yuan Offshore', decimal: '4', symbol: 'USD/CNH'},
{id: '27', name: 'US Dollar Czech Koruna', decimal: '4', symbol: 'USD/CZK'},
{id: '28', name: 'US Dollar Danish Krone', decimal: '4', symbol: 'USD/DKK'},
{id: '29', name: 'US Dollar Norwegian Krone', decimal: '4', symbol: 'USD/NOK'},
{id: '30', name: 'US Dollar Polish Zloty', decimal: '4', symbol: 'USD/PLN'},
{id: '31', name: 'US Dollar Singapore Dollar', decimal: '4', symbol: 'USD/SGD'},
{id: '32', name: 'US Dollar South African Rand', decimal: '4', symbol: 'USD/ZAR'},
{id: '33', name: 'US Dollar Turkish Lira', decimal: '4', symbol: 'USD/TRY'},
{id: '34', name: 'Japanese Yen British Pound', decimal: '5', symbol: 'JPY/GBP'},
{id: '35', name: 'Canadian Dollar Japanese Yen', decimal: '2', symbol: 'CAD/JPY'},
{id: '36', name: 'Japanese Yen Turkish Lira', decimal: '5', symbol: 'JPY/TRY'},
{id: '37', name: 'Polish Zloty Japanese Yen', decimal: '4', symbol: 'PLN/JPY'},
{id: '38', name: 'Singapore Dollar Japanese Yen', decimal: '2', symbol: 'SGD/JPY'},
{id: '39', name: 'British Pound US Dollar', decimal: '4', symbol: 'GBP/USD'},
{id: '40', name: 'British Pound Canadian Dollar', decimal: '4', symbol: 'GBP/CAD'},
{id: '41', name: 'British Pound Swiss Franc', decimal: '4', symbol: 'GBP/CHF'},
{id: '42', name: 'British Pound New Zealand Dollar', decimal: '4', symbol: 'GBP/NZD'},
{id: '43', name: 'British Pound Danish Krone', decimal: '4', symbol: 'GBP/DKK'},
{id: '44', name: 'British Pound Norwegian Krone', decimal: '4', symbol: 'GBP/NOK'},
{id: '45', name: 'British Pound Polish Zloty', decimal: '4', symbol: 'GBP/PLN'},
{id: '46', name: 'British Pound Singapore Dollar', decimal: '4', symbol: 'GBP/SGD'},
{id: '47', name: 'British Pound South African Rand', decimal: '4', symbol: 'GBP/ZAR'},
{id: '48', name: 'British Pound Australian Dollar', decimal: '4', symbol: 'GBP/AUD'},
{id: '49', name: 'Swiss Franc New Zealand Dollar', decimal: '4', symbol: 'CHF/NZD'},
{id: '50', name: 'Canadian Dollar Swiss Franc', decimal: '4', symbol: 'CAD/CHF'},
{id: '51', name: 'Swiss Franc Singapore Dollar', decimal: '4', symbol: 'CHF/SGD'},
{id: '52', name: 'Swiss Franc Japanese Yen', decimal: '2', symbol: 'CHF/JPY'},
{id: '53', name: 'Indonesian Rupiah Australian Dollar', decimal: '5', symbol: 'IDR/AUD'},
{id: '54', name: 'Indonesian Rupiah British Pound', decimal: '5', symbol: 'IDR/GBP'},
{id: '55', name: 'Indonesian Rupiah Swiss Franc', decimal: '5', symbol: 'IDR/CHF'},
{id: '56', name: 'US Dollar Indonesian Rupiah', decimal: '2', symbol: 'USD/IDR'},
{id: '57', name: 'US Dollar Pakistani Rupee', decimal: '3', symbol: 'USD/PKR'},
{id: '58', name: 'Euro Pakistani Rupee', decimal: '3', symbol: 'EUR/PKR'},
{id: '59', name: 'Canadian Dollar Pakistani Rupee', decimal: '3', symbol: 'CAD/PKR'},
{id: '60', name: 'Japanese Yen Pakistani Rupee', decimal: '4', symbol: 'JPY/PKR'},
{id: '62', name: 'New Zealand Dollar Japanese Yen', decimal: '2', symbol: 'NZD/JPY'}, 
{id: '63', name: 'New Zealand Dollar South African Rand', decimal: '4', symbol: 'NZD/ZAR'},
{id: '64', name: 'New Zealand Dollar Singapore Dollar', decimal: '4', symbol: 'NZD/SGD'},
{id: '65', name: 'New Zealand Dollar Canadian Dollar', decimal: '4', symbol: 'NZD/CAD'},
{id: '66', name: 'New Zealand Dollar Australian Dollar', decimal: '4', symbol: 'NZD/AUD'},
{id: '67', name: 'US Dollar Swedish Krona', decimal: '4', symbol: 'USD/SEK'},
{id: '68', name: 'Euro Swedish Krona', decimal: '4', symbol: 'EUR/SEK'},
{id: '69', name: 'Norwegian Krone Swedish Krona', decimal: '4', symbol: 'NOK/SEK'},
{id: '70', name: 'British Pound Swedish Krona', decimal: '4', symbol: 'GBP/SEK'},
{id: '71', name: 'Gold Spot Australian Dollar', decimal: '2', symbol: 'XAU/AUD'},
{id: '72', name: 'Gold Spot Japanese Yen', decimal: '2', symbol: 'XAU/JPY'},
{id: '73', name: 'Gold Spot British Pound', decimal: '2', symbol: 'XAU/GBP'},
{id: '74', name: 'Gold Spot Swiss Franc', decimal: '2', symbol: 'XAU/CHF'},
{id: '75', name: 'Gold Spot Canadian Dollar', decimal: '2', symbol: 'XAU/CAD'},
{id: '76', name: 'Gold Spot New Zealand Dollar', decimal: '2', symbol: 'XAU/NZD'},
{id: '77', name: 'Silver Spot Australian Dollar', decimal: '3', symbol: 'XAG/AUD'},
{id: '78', name: 'New Zealand Dollar US Dollar', decimal: '4', symbol: 'NZD/USD'},
{id: '79', name: 'British Pound Japanese Yen', decimal: '2', symbol: 'GBP/JPY'},
{id: '80', name: 'Australian Dollar New Zealand Dollar', decimal: '4', symbol: 'AUD/NZD'},
{id: '81', name: 'UAE Dirham Argentinian Peso', decimal: '4', symbol: 'AED/ARS'},
{id: '82', name: 'UAE Dirham Australian Dollar', decimal: '4', symbol: 'AED/AUD'},
{id: '83', name: 'UAE Dirham Barbadian Dollar', decimal: '4', symbol: 'AED/BBD'},
{id: '84', name: 'UAE Dirham Baharain Dinar', decimal: '4', symbol: 'AED/BHD'},
{id: '85', name: 'UAE Dirham Brazil Real', decimal: '4', symbol: 'AED/BRL'},
{id: '86', name: 'UAE Dirham Canadian Dollar', decimal: '4', symbol: 'AED/CAD'},
{id: '87', name: 'UAE Dirham Swiss Franc', decimal: '4', symbol: 'AED/CHF'},
{id: '88', name: 'UAE Dirham Chilean Peso', decimal: '2', symbol: 'AED/CLP'},
{id: '89', name: 'UAE Dirham Chinese Yuan', decimal: '4', symbol: 'AED/CNY'},
{id: '90', name: 'UAE Dirham Czech Koruna', decimal: '4', symbol: 'AED/CZK'},
{id: '91', name: 'UAE Dirham Danish Krone', decimal: '4', symbol: 'AED/DKK'},
{id: '92', name: 'UAE Dirham Egyptian Pound', decimal: '4', symbol: 'AED/EGP'},
{id: '93', name: 'UAE Dirham Euro', decimal: '4', symbol: 'AED/EUR'},
{id: '94', name: 'UAE Dirham British Pound', decimal: '4', symbol: 'AED/GBP'},
{id: '95', name: 'UAE Dirham Hong Kong Dollar', decimal: '4', symbol: 'AED/HKD'},
{id: '96', name: 'UAE Dirham Hungarian Forint', decimal: '2', symbol: 'AED/HUF'},
{id: '97', name: 'UAE Dirham Indonesian Rupiah', decimal: '2', symbol: 'AED/IDR'},
{id: '98', name: 'UAE Dirham Israeli Shekel', decimal: '4', symbol: 'AED/ILS'},
{id: '99', name: 'UAE Dirham Indian Rupee', decimal: '2', symbol: 'AED/INR'},
{id: '100', name: 'UAE Dirham Jamaican Dollar', decimal: '2', symbol: 'AED/JMD'},
{id: '101', name: 'UAE Dirham Jordan Dinar', decimal: '4', symbol: 'AED/JOD'},
{id: '102', name: 'UAE Dirham Japanese Yen', decimal: '4', symbol: 'AED/JPY'},
{id: '103', name: 'UAE Dirham Kenyan Shilling', decimal: '2', symbol: 'AED/KES'},
{id: '104', name: 'UAE Dirham Korean Won', decimal: '2', symbol: 'AED/KRW'},
{id: '105', name: 'UAE Dirham Kuwaiti Dinar', decimal: '5', symbol: 'AED/KWD'},
{id: '106', name: 'UAE Dirham Lebanese Pound', decimal: '2', symbol: 'AED/LBP'},
{id: '107', name: 'UAE Dirham Sri Lankan Rupee', decimal: '2', symbol: 'AED/LKR'},
{id: '108', name: 'UAE Dirham Moroccan Dirham', decimal: '4', symbol: 'AED/MAD'},
{id: '109', name: 'UAE Dirham Mexican Peso', decimal: '4', symbol: 'AED/MXN'},
{id: '110', name: 'UAE Dirham Malaysian Ringgit', decimal: '4', symbol: 'AED/MYR'},
{id: '111', name: 'UAE Dirham Namibian Dollar', decimal: '4', symbol: 'AED/NAD'},
{id: '112', name: 'UAE Dirham Norwegian Krone', decimal: '4', symbol: 'AED/NOK'},
{id: '113', name: 'UAE Dirham Nepalese Rupee', decimal: '2', symbol: 'AED/NPR'},
{id: '114', name: 'UAE Dirham New Zealand Dollar', decimal: '4', symbol: 'AED/NZD'},
{id: '115', name: 'UAE Dirham Omani Rial', decimal: '4', symbol: 'AED/OMR'},
{id: '116', name: 'UAE Dirham Panamanian Balboa', decimal: '4', symbol: 'AED/PAB'},
{id: '117', name: 'UAE Dirham Philippine Peso', decimal: '2', symbol: 'AED/PHP'},
{id: '118', name: 'UAE Dirham Polish Zloty', decimal: '4', symbol: 'AED/PLN'},
{id: '119', name: 'UAE Dirham Qatari Riyal', decimal: '4', symbol: 'AED/QAR'},
{id: '120', name: 'UAE Dirham Romanian Leu', decimal: '4', symbol: 'AED/RON'},
{id: '121', name: 'UAE Dirham Russian Ruble', decimal: '4', symbol: 'AED/RUB'},
{id: '122', name: 'UAE Dirham Saudi Riyal', decimal: '4', symbol: 'AED/SAR'},
{id: '123', name: 'UAE Dirham Swedish Krona', decimal: '4', symbol: 'AED/SEK'},
{id: '124', name: 'UAE Dirham Singapore Dollar', decimal: '4', symbol: 'AED/SGD'},
{id: '125', name: 'UAE Dirham Thai Baht', decimal: '4', symbol: 'AED/THB'},
{id: '126', name: 'UAE Dirham Turkish Lira', decimal: '4', symbol: 'AED/TRY'},
{id: '127', name: 'UAE Dirham Taiwan Dollar', decimal: '4', symbol: 'AED/TWD'},
{id: '128', name: 'UAE Dirham Venezuelan Bolivar', decimal: '4', symbol: 'AED/VEF'},
{id: '129', name: 'UAE Dirham Central African Franc', decimal: '2', symbol: 'AED/XAF'},
{id: '130', name: 'UAE Dirham East Caribbean Dollar', decimal: '4', symbol: 'AED/XCD'},
{id: '131', name: 'UAE Dirham West African CFA franc', decimal: '2', symbol: 'AED/XOF'},
{id: '132', name: 'UAE Dirham South African Rand', decimal: '4', symbol: 'AED/ZAR'},
{id: '133', name: 'Argentinian Peso UAE Dirham', decimal: '4', symbol: 'ARS/AED'},
{id: '134', name: 'Argentinian Peso Australian Dollar', decimal: '5', symbol: 'ARS/AUD'},
{id: '135', name: 'Argentinian Peso Barbadian Dollar', decimal: '4', symbol: 'ARS/BBD'},
{id: '136', name: 'Argentinian Peso Baharain Dinar', decimal: '5', symbol: 'ARS/BHD'},
{id: '137', name: 'Argentinian Peso Bolivian Boliviano', decimal: '4', symbol: 'ARS/BOB'},
{id: '138', name: 'Argentinian Peso Brazil Real', decimal: '4', symbol: 'ARS/BRL'},
{id: '139', name: 'Argentinian Peso Canadian Dollar', decimal: '5', symbol: 'ARS/CAD'},
{id: '140', name: 'Argentinian Peso Swiss Franc', decimal: '5', symbol: 'ARS/CHF'},
{id: '141', name: 'Argentinian Peso Chilean Peso', decimal: '2', symbol: 'ARS/CLP'},
{id: '142', name: 'Argentinian Peso Chinese Yuan', decimal: '4', symbol: 'ARS/CNY'},
{id: '143', name: 'Argentinian Peso Colombian Peso', decimal: '2', symbol: 'ARS/COP'},
{id: '144', name: 'Argentinian Peso Czech Koruna', decimal: '4', symbol: 'ARS/CZK'},
{id: '145', name: 'Argentinian Peso Danish Krone', decimal: '4', symbol: 'ARS/DKK'},
{id: '146', name: 'Argentinian Peso Egyptian Pound', decimal: '4', symbol: 'ARS/EGP'},
{id: '147', name: 'Argentinian Peso Euro', decimal: '5', symbol: 'ARS/EUR'},
{id: '148', name: 'Argentinian Peso British Pound', decimal: '5', symbol: 'ARS/GBP'},
{id: '149', name: 'Argentinian Peso Hong Kong Dollar', decimal: '4', symbol: 'ARS/HKD'},
{id: '150', name: 'Argentinian Peso Hungarian Forint', decimal: '2', symbol: 'ARS/HUF'},
{id: '151', name: 'Argentinian Peso Indonesian Rupiah', decimal: '2', symbol: 'ARS/IDR'},
{id: '152', name: 'Argentinian Peso Israeli Shekel', decimal: '4', symbol: 'ARS/ILS'},
{id: '153', name: 'Argentinian Peso Indian Rupee', decimal: '2', symbol: 'ARS/INR'},
{id: '154', name: 'Argentinian Peso Icelandic Krona', decimal: '2', symbol: 'ARS/ISK'},
{id: '155', name: 'Argentinian Peso Jamaican Dollar', decimal: '2', symbol: 'ARS/JMD'},
{id: '156', name: 'Argentinian Peso Jordan Dinar', decimal: '5', symbol: 'ARS/JOD'},
{id: '157', name: 'Argentinian Peso Japanese Yen', decimal: '4', symbol: 'ARS/JPY'},
{id: '158', name: 'Argentinian Peso Kenyan Shilling', decimal: '2', symbol: 'ARS/KES'},
{id: '159', name: 'Argentinian Peso Korean Won', decimal: '2', symbol: 'ARS/KRW'},
{id: '160', name: 'Argentinian Peso Lebanese Pound', decimal: '2', symbol: 'ARS/LBP'},
{id: '161', name: 'Argentinian Peso Sri Lankan Rupee', decimal: '2', symbol: 'ARS/LKR'},
{id: '162', name: 'Argentinian Peso Moroccan Dirham', decimal: '4', symbol: 'ARS/MAD'},
{id: '163', name: 'Argentinian Peso Mexican Peso', decimal: '4', symbol: 'ARS/MXN'},
{id: '164', name: 'Argentinian Peso Malaysian Ringgit', decimal: '4', symbol: 'ARS/MYR'},
{id: '165', name: 'Argentinian Peso Namibian Dollar', decimal: '4', symbol: 'ARS/NAD'},
{id: '166', name: 'Argentinian Peso Norwegian Krone', decimal: '4', symbol: 'ARS/NOK'},
{id: '167', name: 'Argentinian Peso Nepalese Rupee', decimal: '2', symbol: 'ARS/NPR'},
{id: '168', name: 'Argentinian Peso New Zealand Dollar', decimal: '5', symbol: 'ARS/NZD'},
{id: '169', name: 'Argentinian Peso Omani Rial', decimal: '5', symbol: 'ARS/OMR'},
{id: '170', name: 'Argentinian Peso Panamanian Balboa', decimal: '5', symbol: 'ARS/PAB'},
{id: '171', name: 'Argentinian Peso Peru Sol', decimal: '4', symbol: 'ARS/PEN'},
{id: '172', name: 'Argentinian Peso Barbadian Dollar', decimal: '4', symbol: 'ARS/BBD'},
{id: '173', name: 'Argentinian Peso Baharain Dinar', decimal: '5', symbol: 'ARS/BHD'},
]

class Home extends Component {
  state = {
    stocks: []
  };

  componentDidMount() {
    this.stocks();
  }

  stocks = async()=>{
    const apiUrl = `https://fcsapi.com/api-v3/forex/list?type=forex&access_key=mSoo360DFh75rFyR677Ov`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const res = await data.response
      this.setState({
        stocks: {res}
      })
    }
}


  render() {
    const {stocks} = this.state
    console.log(stocks.res)
    return (
      <div className="home-container">
        <header className="header">
          <h1>Stock Market Dashboard</h1>
        </header>
        <div className="stock-list-container">
        {stock.map((stock) => (
            <div key={stock.id} className="stock-item">
              <div className="stock-name">{stock.name}</div>
              <div className="stock-price">{stock.symbol}</div>
            </div>
          ))}
        </div>
        <footer className="footer">
        <Link to='/' className="link-item">
            <button className="footer-section">Home</button>
        </Link>
        <Link to={`/trade`} className='link-item'>
            <button className="footer-section">Trade</button>
        </Link>
        <Link to='/profile' className='link-item'>
            <button className="footer-section">Profile</button>
        </Link>
      </footer>
      </div>
    );
  }
}

export default Home;
