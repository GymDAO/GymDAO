import { notFound } from 'next/navigation';

const ErrorPage = ({ params }: { params: { statusCode: string } }) => {
  const { statusCode } = params;

  const errorMessages: Record<string, string> = {
    '401': 'Unauthorized: You do not have permission to view this resource.',
    '403': 'Forbidden: Access to this resource is denied.',
    '404': 'Not Found: The page you are looking for could not be found.',
    '500': 'Internal Server Error: Something went wrong on our end.',
    '502': 'Bad Gateway: The server received an invalid response.',
    '503': 'Service Unavailable: The server is temporarily unavailable.'
  };

  const message = errorMessages[statusCode] || 'An unexpected error occurred.';

  if (!errorMessages[statusCode]) {
    notFound();
  }

  return (
    <div className="container mx-auto text-center">
      <h1>Error {statusCode}</h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorPage;
