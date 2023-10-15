import useJsonFetch from './useJsonFetch';

export default function ErrorComponent(props) {
  const { url } = props;
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <p className='title'>Ошибка</p>
      <p className='status'>{error}</p>
    </div>
  );
}
