import { gql, useQuery } from '@apollo/client';
import React from 'react'

const MY_QUERY = gql`
  query WillFail {
    badField # This field's resolver produces an error
    goodField # This field is populated successfully
  }
`;

const ErrorPolicy = () => {
  const { loading, error, data } = useQuery(MY_QUERY, { errorPolicy: "all" });
  if (loading) return <span>loading...</span>;
  return (
    <div>
      {/* <h1>This is errorpolicy page</h1> */}
      <h2>Good: {data.goodField}</h2>
      <pre>
        Bad:{" "}
        {error?.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
      </pre>
    </div>
  );
}

export default ErrorPolicy
