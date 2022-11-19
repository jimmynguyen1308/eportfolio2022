import { KeyboardEvent } from 'react'

export default function Searchbar() {
  const onSubmit = () => {
    // submit form here
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key==="Enter")
      onSubmit()
  }

  return (
    <div className='sidebar search-bar'>
      <input
        type='text'
        name='search'
        onKeyDown={handleKeyDown}
        placeholder='search article(s)...'
      />
      <button onClick={onSubmit}>
        <img src='./svgs/icon-search.svg' style={{width: '30px'}} alt='search' />
      </button>
    </div>
  )
}
