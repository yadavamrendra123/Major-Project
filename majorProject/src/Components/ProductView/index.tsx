import glasses from "../../GlassData";
import GlassCard from "../GlassCard";

const ProductView: React.FC = (): JSX.Element => {
  return (
    <div className="grid-cols-4 gap-5 grid p-8">
      {glasses.map((glass) => {
        return (
          <GlassCard
            key={glass.id}
            name={glass.name}
            image={glass.image}
            price={glass.price}
            id={glass.id}
          />
        );
      })}
    </div>
  );
};

export default ProductView;
