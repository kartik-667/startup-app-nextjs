
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

function Searchreset() {
  const router = useRouter();

  function handleReset() {
    // Clear URL query params without reload
    router.push("/");
    
  }

  return (
    <button
      type="button"
      onClick={handleReset}
      className="search-btn text-white cursor-pointer"
    >
      <X></X>
    </button>
  );
}

export default Searchreset;

