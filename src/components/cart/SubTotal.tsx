type TTotal = { total: number };

const SubTotal = ({ total }: TTotal) => {
  return (
    <div>
      <span>SubTotal:</span>
      <span>{total} EGP</span>
    </div>
  );
};

export default SubTotal;
