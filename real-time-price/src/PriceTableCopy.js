import { Component } from "react";
import Table from "./styles";


let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

var date = new Date();
var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

//  let url = 'https://commodities-api.com/api/fluctuation?access_key=smr8u6b3eb4il03xgcmn4smeujolnt48044rbrhzcyih5pfbz40342m9foth&%20start_date=2022-12-30&end_date='+today+'&base=USD&symbols=XAU,XAG,XPT,XPD,ALU,XCU&change'


class PriceTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }



    componentDidMount() {
        // fetch('userChangeData.json')
        // fetch(url)

        fetch('WebScrapped.json')
            // fetch('http://127.0.0.1:5000/getData')
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            })
            .catch(error => {
                console.log(error);
            });
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000);

    }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render() {
        const { data } = this.state;
        console.log(data);
        if (!data) return <p>Loading...</p>
        return (
            <div>
                <h1 className='text-center'>Realtime Prices Of Elements</h1>
                <h3 className='text-center'>Date: {today} &emsp; &emsp;  
                Updated Time: {current_time}
                </h3> <hr />
                
                <div className='container'>
                    <Table className="table table-bordered">
                        {/* <thead className='table-dark'>
                            <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Element Name</th>
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

                                <td>{(data.data.rates.XAU.end_rate * 3715256.568583251).toFixed(2)}</td>
                                <td> {data.data.base} {data.data.unit}</td>
                                <td> {(data.data.rates.XAU.change * 3715256.568583251).toFixed(2)} </td>
                                <td> {(data.data.rates.XAU.change_pct).toFixed(2)} </td>
                            </tr>

                            <tr>
                                <th scope="row">2</th>
                                <td>Silver</td>
                                <td>{(data.data.rates.XAG.end_rate * 556.9313924170473).toFixed(2)} </td>
                                <td>{data.data.base} {data.data.unit}</td>
                                <td> {(data.data.rates.XAG.change * 556.9313924170473).toFixed(2)} </td>
                                <td> {(data.data.rates.XAG.change_pct).toFixed(2)} </td>
                            </tr>

                            <tr>
                                <th scope="row">3</th>
                                <td>Platinum</td>
                                <td>{(data.data.rates.XPT.end_rate * 1031220.003629894).toFixed(2)} </td>
                                <td>{data.data.base} {data.data.unit}</td>
                                <td> {(data.data.rates.XPT.change * 1031220.003629894).toFixed(2)} </td>
                                <td> {(data.data.rates.XPT.change_pct).toFixed(2)} </td>
                            </tr>

                            <tr>
                                <th scope="row">4</th>
                                <td>Aluminium</td>
                                <td>{(data.data.rates.ALU.end_rate * 196.5505573193512).toFixed(2)} </td>
                                <td>{data.data.base} {data.data.unit}</td>
                                <td> {(data.data.rates.ALU.change * 196.5505573193512).toFixed(2)} </td>
                                <td> {(data.data.rates.ALU.change_pct).toFixed(2)} </td>
                            </tr>

                            <tr>
                                <th scope="row">5</th>
                                <td>Copper</td>
                                <td>{(data.data.rates.XCU.end_rate * 0.07223343).toFixed(2)} </td>
                                <td>{data.data.base} {data.data.unit}</td>
                                <td> {(data.data.rates.XCU.change * 0.07223343).toFixed(2)} </td>
                                <td> {(data.data.rates.XCU.change_pct).toFixed(2)} </td>
                            </tr>

                            <tr>
                                <th scope="row">6</th>
                                <td>Palladium</td>
                                <td>{(data.data.rates.XPD.end_rate * 2390116.112335457).toFixed(2)} </td>
                                <td>{data.data.base} {data.data.unit}</td>
                                <td> {(data.data.rates.XPD.change * 2390116.112335457).toFixed(2)} </td>
                                <td> {(data.data.rates.XPD.change_pct).toFixed(2)} </td>
                            </tr>


                        </tbody> */}

                        <thead>
                            <tr>
                                <th>Element Name</th>
                                <th>Price</th>
                                <th>Change</th>
                                <th>% Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).map(key => {
                                return (
                                    <>
                                    
                                        <tr key={key}>
                                            <td>{data[key].name}</td>
                                            <td>&#8377; {data[key].price}</td>
                                            
                                            <td style={{ color: data[key].change > 0 ? 'green' : 'red' }}>
                                            {data[key].change} &nbsp;
                                            { data[key].change > 0 ? `\u2191`  : `\u2193`}
                                            </td>

                                            <td style={{ color: data[key].per_change > 0 ? 'green' : 'red' }}>
                                                {data[key].per_change} &nbsp;
                                                { data[key].per_change > 0 ? `\u2191`  : `\u2193`}
                                            </td>
                                        

                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>


                    </Table>
                </div>
            </div>
        );
    }
}

export default PriceTable;