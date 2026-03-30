import React, { useState } from 'react'
import { Input } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import "./App.css"
const App = () => {
 const [amount, setamount] = useState(0);
 const [to, setto] = useState('usd');
 const [from, setfrom] = useState('inr');
 const [convert, setconvert] = useState(0);


const currencyInfo = useCurrencyInfo(from);
 const Options=Object.keys(currencyInfo);
 const swap=()=>{
  setto(from);
  setfrom(to);
  setconvert(amount);
  setamount(convert);
 }

 const convertedfn =()=>{
  setconvert( amount*currencyInfo[to]);
 }

  return (
    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/hand-drawn-flat-design-stock-market-concept_23-2149166595.jpg?semt=ais_incoming&w=740&q=80')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convertedfn()
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                onAmountChange={(value) => {setamount(value)
                                }}
                                currencyOptions={Options}
    currencyChange={(currency)=>{
       setfrom(currency);
    }}
     selectedCurrency={from}
     />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                              amount={convert} currencyOptions={Options.filter((option) => option !== from)} currencyChange={(currency)=>{setto(currency)}}selectedCurrency={to} amountDisable/>

                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App