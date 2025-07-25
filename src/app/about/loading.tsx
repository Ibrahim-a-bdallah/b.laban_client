import Image from "next/image";

const loading = () => {
  return (
    <div className="flex justify-center items-center flex-1 h-[80vh] m-4">
      <Image
        className="animate-scaleIn"
        src="/B_Laban.jpeg"
        width={250}
        height={250}
        alt="Loading..."
        priority
      />
    </div>
  );
};

export default loading;
