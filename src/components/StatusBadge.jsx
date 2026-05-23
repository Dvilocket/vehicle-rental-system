function StatusBadge({ status }) {

  const getBadgeClass = () => {

    switch (status) {

      case "AVAILABLE":
        return "bg-success";

      case "NOT_AVAILABLE":
        return "bg-danger";

      case "ACTIVE":
        return "bg-primary";

      case "CANCELLED":
        return "bg-secondary";

      default:
        return "bg-dark";
    }
  };

  return (
    <span className={`badge ${getBadgeClass()}`}>
      {status}
    </span>
  );
}

export default StatusBadge;