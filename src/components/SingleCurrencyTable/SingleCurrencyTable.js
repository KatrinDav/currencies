import React, { Suspense } from 'react';
import {withRouter} from 'react-router-dom';
import Info from '../Info/Info';
import Button from '../Button/Button';

const Table30 = React.lazy(() => import ('./Table30/Table30'));


class SingleCurrencyTable extends React.Component{
    state = {
        name: '',
        data: [],
        accRate: '',
        isVisible: false,
        
    };
    componentDidMount() {
        fetch(`https://api.nbp.pl/api/exchangerates/rates/A/${this.props.match.params.id}/last/30/`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
            name: data.currency,
            data: data.rates,
            accRate: data.rates[29].mid
        
        })
      })
    }

    fnMax = (data) =>{
        data = this.state.data;
        const newObj = {};
        data.forEach(item => {
            return newObj[item.effectiveDate] = item.mid;
        })
        return newObj;
    }
    handleVisibility = () =>{
        this.setState({
            isVisible: !this.state.isVisible,
        }
    )
    }

    render(){

        const {name, data, accRate, isVisible} = this.state;
        const dataReverse = data.reverse();
        const newData = this.fnMax(data);
        const values = Object.values(newData);
        const maxValue = Math.max(...values);
        const minValue = Math.min(...values);

        return (
            <>
                <Info 
                    name={name}
                    accRate={accRate}
                    maxValue={maxValue}
                    minValue={minValue}/>
                <Button handleVisibility={this.handleVisibility} isVisible={isVisible}/>
                 <Suspense fallback="pobieram...">
                    <Table30 isVisible={isVisible} dataReverse={dataReverse}/> 
                </Suspense>
            </>
        )
    }

}
  
 
export default withRouter(SingleCurrencyTable);