import React from 'react';

const loading = () => {
    return (
        <div className="h-screen">
          <div className="flex items-center justify-center space-x-2">
	<div className="w-4 h-4 rounded-full animate-pulse bg-blue-400"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-blue-400"></div>
	<div className="w-4 h-4 rounded-full animate-pulse bg-blue-400"></div>
</div>
        </div>
    );
};

export default loading;