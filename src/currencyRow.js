import React from 'react'

export default function CurrencyRow(props) {
const { 
    currencyOptions,
    selectedCurrency,
    onChangeCurrency, 
    amount,
    name
    
} = props
//console.log(selectedCurrency, `selectedcurren`)
//console.log(currencyOptions, `currency`)
  return (
    <div>
        <input defaultValue={amount} name={name.concat('-input')}  type="number" className='input'/>
            <select defaultValue={selectedCurrency} name={name.concat('-select')}   onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                     <option value={option} key={option}>{option}</option>
                ))}    
            </select>

    </div>
  )
}
 