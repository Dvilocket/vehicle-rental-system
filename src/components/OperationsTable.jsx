import StatusBadge from "./StatusBadge";

function OperationsTable({
  operations,
  onCancel
}) {

  return (

    <table className="table table-striped">

      <thead>

        <tr>
          <th>ID</th>
          <th>Vehicle ID</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>

      </thead>

      <tbody>

        {operations.map((operation) => (

          <tr key={operation.id}>

            <td>{operation.id}</td>

            <td>{operation.vehicleId}</td>

            <td>{operation.customerName}</td>

            <td>
              <StatusBadge status={operation.status} />
            </td>

            <td>

              {operation.status === "ACTIVE" && (

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    onCancel(operation)
                  }
                >
                  Cancel
                </button>

              )}

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}

export default OperationsTable;