import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';

const PagesIndex = () => {
  return (
    <div className="flex space-x-4 text-grayTertiary font-light items-center cursor-pointer">
      <span>1</span>
      <span>...</span>
      <span className="bg-blue rounded-md text-white px-1.5 py-1">10</span>
      <span>11</span>
      <span>12</span>
      <span>13</span>
      <span>14</span>
      <span>15</span>
      <span>16</span>
      <span>17</span>
      <span>18</span>
    </div>
  )
}

const NextButton = () => {
  return (
    <button className="flex items-center space-x-2 px-2 py-1 rounded border-borderLight border-[1px] text-grayTertiary">
        <span className="tracking-wide text-lg">Next</span>
        <CaretRight size={18} weight="bold" color='#4D4D4D' />
      </button>
  )
}

const PreviousButton = () => {
  return (
    <button className="flex items-center space-x-2 px-2 py-1 rounded border-borderLight border-[1px] text-grayTertiary">
        <CaretLeft size={18} weight="bold" color='#4D4D4D' />
        <span className="tracking-wide text-lg">Previous</span>
      </button>
  )
}


const Pagination = () => {
  return (
    <div className="flex items-center space-x-8 justify-center mt-7">
      <PreviousButton />
      <PagesIndex />
      <NextButton />
    </div>
  )
}

export default Pagination