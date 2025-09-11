import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const Details: FC = () => {

    const {id} = useParams<{id:string}>();

    console.log(id);
  return (
    <>

    </>
  );
};


