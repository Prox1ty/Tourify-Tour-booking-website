import React, {useState} from 'react'
import { LuSearch as Search } from "react-icons/lu";
import { useTour } from '../contexts';

function Searchbar({ onSubmit }) {
    const {search, setSearch} = useTour();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit)
          onSubmit();
    }
  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder="Search tours..."
        className="
          w-full rounded-full
          border border-[var(--border)]
          bg-[var(--surface-secondary)]
          py-2 pl-4 pr-12
          text-[var(--text)]
          placeholder:text-[var(--text-muted)]
          outline-none
          transition-all duration-200
          focus:w-full
          focus:border-[var(--primary)]
          focus:ring-2 focus:ring-[var(--primary)]/20
        "
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <button type="submit"
        className="
          absolute right-2 z-10 top-1
          flex h-8 w-8 items-center justify-center
          rounded-full
          text-[var(--text-muted)]
          transition
          hover:bg-[var(--surface)]
          hover:text-[var(--primary)]
          active:scale-95
          cursor-pointer
        "
      >
        <Search size={18} />
      </button>
    </form>
  )
}

export default Searchbar