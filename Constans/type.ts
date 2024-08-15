export type ComapinesImages = {
  img: string;
  alt: string;
};

export type FeatureBlocks = {
  img: string;
  head: string;
  paragraph: string;
};

export type FeatureComp = {
  imageurl: string;
  title: string;
  content: string;
  isreverse: boolean;
};

export type Pricing_Details = {
  title: string;
  Head: string;
  Monthlyprice: string;
  AnyallyPrice: string;
  priceList: string[];
  isMostpopular?: boolean;
  glowPosition?: "right" | "left";
  mode?: pricingmode;
};
export type pricingmode = boolean;
export type Customers_type = {
  paragraph: string;
  img: string;
  name: string;
  Position: string;
};
export type footer_Links = {
  title: string;
  Links: string[];
};
