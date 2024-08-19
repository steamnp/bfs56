import { IImage } from "../types/product";

function picture({ image }: { image: IImage }) {
  const { mobile, tablet, desktop } = image;
  return (
    <picture>
      <source media="(width < 640px)" srcSet={mobile} />
      <source media="(width < 768px)" srcSet={tablet} />
      <img
        className="card-image rounded-2xl"
        src={desktop}
        alt={`Image ${name}`}
      />
    </picture>
  );
}

export default picture;
