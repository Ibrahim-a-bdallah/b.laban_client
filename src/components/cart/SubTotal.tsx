type TTotal = { total: number };

const SubTotal = ({ total }: TTotal) => {
  return (
    <div>
      <span>SubTotal:</span>
      <span>{total}</span>
    </div>
  );
};

export default SubTotal;
