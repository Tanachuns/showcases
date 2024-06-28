import HeroNavigation from "@/components/shared/HeroNavigation";
import React from "react";

type Props = {};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeroNavigation
        pageTitle="Our Products"
        image="https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      {children}
    </div>
  );
}
