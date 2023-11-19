import { PropsWithChildren } from "react";
import Heading from "./cm/Heading";
import FunFact from "./custom/FunFact";

export const commonmarkComponents = {
  h1: (props: any) => <Heading level={1} {...props} />,
  h2: (props: any) => <Heading level={2} {...props} />,
  h3: (props: any) => <Heading level={3} {...props} />,
  h4: (props: any) => <Heading level={4} {...props} />,
  h5: (props: any) => <Heading level={5} {...props} />,
  h6: (props: any) => <Heading level={6} {...props} />,
};

export const customComponents = {
  FunFact: (props: PropsWithChildren) => <FunFact {...props} />,
};

export const mdxComponents = {
  ...commonmarkComponents,
  ...customComponents,
};
