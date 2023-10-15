import useJsonFetch from './useJsonFetch';

export default function DataComponent(props) {
  const { url } = props;
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <p className='title'>Данные</p>
      <p className='status'>{data}</p>
    </div>
  );
}
