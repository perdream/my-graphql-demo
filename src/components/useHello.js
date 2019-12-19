import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
  mutation UpdataAge($id: Number!,$age:Number!){
    updataAge(id: $id,age:$age){
      id,
      firstName,
      lastName,
      age
    }
  }
`;
// const GETUSERS = gql`
//   query {
//     hello
//     getUsers(id:"1"){
//       id,
//       firstName,
//       lastName,
//       age
//     }

//     getAllUsers{
//       id,
//       firstName,
//       lastName,
//       age
//     }
//   }
// `

function ExchangeRates() {
  let inputid;
  let inputage;
  // const { loading, error, data } = useQuery(GETUSERS);
  const [addTodo, { data }] = useMutation(EXCHANGE_RATES);

  // if (loading) return (<p>Loading...</p>);
  // if (error) return (<p>Error :(</p>);
  console.log(data);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { id: Number(inputid.value),age:Number(inputage.value) } });
          inputid.value = '';
          inputage.value = '';
        }}
      >
        <input
          ref={node => {
            inputid = node;
          }}
        />
        <input
          ref={node => {
            inputage = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default ExchangeRates;