
const inputfile = ({css, fun, format, id, children}) => {
  return (
    <>
      <div>
        <input type="file" id={id} onChange={fun} accept={format} />
        <label htmlFor={id}>
          {children}
        </label>
      </div>
    </>
  );
}

export default inputfile;
