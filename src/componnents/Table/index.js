import './table.scss'

const Table = ({ data }) => {
  const getTableRow = () => (
    data.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.owner.login}</td>
        </tr>
      );
    }))

  return (
    <table>
      <thead>
        <tr>
          <th style={{width: '20%'}}>ID</th>
          <th style={{width: '40%'}}>Name</th>
          <th>Owner</th>
        </tr>
      </thead>
      <tbody>{getTableRow()}</tbody>
    </table>
  );
};

export default Table;
