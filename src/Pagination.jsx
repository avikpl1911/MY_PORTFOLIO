import "./pagination.css";

export default function Pagination(props) {
  const handleClick = (index) => {
    props.setActivePage(index);
  };
  return (
    <div className="Pagination">
      <div
        className={props.activePage === 1 ? "active" : "passive"}
        onClick={() => handleClick(1)}
      >
        1
      </div>
      <div
        className={props.activePage === 2 ? "active" : "passive"}
        onClick={() => handleClick(2)}
      >
        2
      </div>
      <div
        className={props.activePage === 3 ? "active" : "passive"}
        onClick={() => handleClick(3)}
      >
        3
      </div>
    </div>
  );
}
