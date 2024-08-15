import { FeatureComp } from "@/Constans/type";
import Heading from "./Heading";
import Image from "next/image";

type FeatureBlockProps = FeatureComp;
export default function FeatureBlock({
  imageurl,
  title,
  content,
  isreverse,
}: FeatureBlockProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-10  ${
        isreverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <Image src={imageurl} alt="featureBlockImg" width={500} height={210} />

      <div className="flex flex-col items-start gap-4">
        <Heading title={title} />
        <p className="lg:max-w-[40rem]">{content}</p>
      </div>
    </div>
  );
}
