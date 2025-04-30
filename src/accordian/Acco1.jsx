import React from 'react'
import Accordian from './Accordian'
import AccordianItem from './AccordianItem'
import './acc.css'

export default function Acco1() {
  return (
    <div>
        <h1>Why  wrok with us ?</h1>
      <Accordian>
        <AccordianItem title="Hello for testing">
            <article id='kodk'>
            <p>this for answer eritng</p>
            <p>hello ffjhr hiwhfih</p>
            </article>
        </AccordianItem>
        <AccordianItem title="Hello for testing">
            <article id='jjj'>
            <p>this for answer eritng</p>
            <p>hello ffjhr hiwhfih</p>
            </article>
        </AccordianItem>
        <AccordianItem title="Hello for testing">
            <article id='jjj'>
            <p>this for answer eritng</p>
            <p>hello ffjhr hiwhfih</p>
            </article>
        </AccordianItem> 
        <AccordianItem title="Hello for testing">
            <article id='jjj'>
            <p>this for answer eritng</p>
            <p>hello ffjhr hiwhfih</p>
            </article>
        </AccordianItem>
      </Accordian>
    </div>
  )
}
