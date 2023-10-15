import useJsonFetch from './useJsonFetch';

export default function LoadingComponent(props) {
  const { url } = props;
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <p className='title'>Загрузка</p>
      <p className='status'>{loading && 'Loading...'}</p>
    </div>
  );
}
