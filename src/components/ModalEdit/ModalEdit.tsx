const ModalEdit = (): JSX.Element => {
  return (
    <div className='overlay'>
      <div className='modal'>
        <h3>Edit Todo</h3>
        <input type='text' />
        <button>Edit</button>
        <button>x</button>
      </div>
    </div>
  );
};

export default ModalEdit;