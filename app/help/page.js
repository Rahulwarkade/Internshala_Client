'use client'
import React from 'react';

import SearchComponent from '@/Components/SearchComponent';
import '@/node_modules/bootstrap/dist/css/bootstrap.min.css';

// import QuestionComponent from './QuestionComponent';
// import ImageComponent from './ImageComponent';

function HelpPage() {
  return (
    <div className="font-nunito antialiased bg-gray-100 text-gray-900 my-16 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="main-title mb-8">
          <h1 className="font-bold text-2xl text-center">How can we help you?</h1>
        </div>

        <SearchComponent />

        {/* <QuestionComponent />

        <ImageComponent /> */}
      </div>
    </div>
  );
}

export default HelpPage;
