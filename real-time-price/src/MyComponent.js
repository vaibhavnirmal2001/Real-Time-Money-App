import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }


  componentDidMount() {
    // fetch('userData.json')
    fetch('userChangeData.json')
    // fetch('https://commodities-api.com/api/latest?access_key=smr8u6b3eb4il03xgcmn4smeujolnt48044rbrhzcyih5pfbz40342m9foth&base=USD&symbols=XAU,XAG,XPT')
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(error => {
        console.log(error);

      });
  }


  render() {
    const { data } = this.state;
    if (!data) return <p>Loading...</p>
    return (
      <div>
        <h1 className='text-center'>Realtime Prices Of Metals</h1>
        <hr />
        <div className='container'>
          <table className="table table-bordered">
            <thead className='table-dark'>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Metal Name</th>
                <th scope="col">Price</th>
                <th scope="col">Unit</th>
                <th scope="col">change</th>
                <th scope="col">% Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Gold</td>
                {/* <td>{console.log(data)}</td> */}
                <td>{data.data.rates.XAU * 3710793.51032}</td>
                <td> {data.data.base} {data.data.unit}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Silver</td>
                <td>{data.data.rates.XAG*572.072730039} </td>
                <td>{data.data.base} {data.data.unit}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Platinum</td>
                <td>{data.data.rates.XPT * 1094101.02408} </td>
                <td>{data.data.base} {data.data.unit}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }



}

export default App;




// https://commodities-api.com/api/fluctuation?access_key=smr8u6b3eb4il03xgcmn4smeujolnt48044rbrhzcyih5pfbz40342m9foth&%20start_date=2022-12-01&end_date=2023-01-20&base=USD&symbols=XAU,XAG,XPT&change


