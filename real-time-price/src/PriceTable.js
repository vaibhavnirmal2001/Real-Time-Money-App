import { Component } from "react";
import Table from "./styles";

let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

class PriceTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            date: new Date(),
            current_time: '',
        };
    }

    componentDidMount() {
        // fetch('WebScrapped.json')
            fetch('http://127.0.0.1:5000/getData')
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            })
            .catch(error => {
                console.log(error);
            });
        this.interval = setInterval(() => {
            this.setState({
                date: new Date(),
                current_time:
                    this.state.date.getHours() +
                    ":" +
                    this.state.date.getMinutes() +
                    ":" +
                    this.state.date.getSeconds(),
            });
        }, 5000);
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
                <h3 id="dateTime" className='text-center'>Date: {today} &emsp; &emsp;
                    Updated Time: {this.state.current_time}

                </h3> <hr />

                <div className='container'>
                    <Table className="table table-bordered">
                        <thead className='table-dark'>
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
                                            <td className='table-dark'>{data[key].name}</td>
                                            <td>&#8377; {data[key].price} &nbsp;
                                                {/* {parseFloat(data[key].change) > 0 ? `\u2191` : `\u2193`} */}
                                                {parseFloat(data[key].change) > 0 ? `\u25B2` : `\u25BC`}

                                                </td>

                                            <td style={{ color: parseFloat(data[key].change) > 0 ? 'green' : 'red' }}>
                                                {data[key].change} 
                                            </td>

                                            <td style={{ color: parseFloat(data[key].per_change) > 0 ? 'green' : 'red' }}>
                                                {data[key].per_change} 
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