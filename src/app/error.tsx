"use client";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </div>
    );
  }
  
export default ErrorPage;