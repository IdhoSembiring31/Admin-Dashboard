import React from 'react'
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,SplineAreaSeries, DateTime, Legend} from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';
import {Header} from '../../components'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis, } from '../../data/dummy';
function Area(){
  const {currentMode}= useStateContext()
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Charts" title="Inflation Rate in Percentage"/>
    <ChartComponent
    id="area-chart"
    height="420px"
    primaryXAxis={areaPrimaryXAxis}
    PrimaryYAxis={areaPrimaryYAxis}
    chartArea={{border:{width:0}}}
    background={currentMode === "Dark" ? '#33373E': '#fff'}>
      <Inject services={[ DateTime,Legend,SplineAreaSeries]} />
        <SeriesCollectionDirective >
          {areaCustomSeries.map((item,index)=>
          <SeriesDirective key={index} {...item}/>)}
        </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}
export default Area

