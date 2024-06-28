import Certificates from "@/components/about/Certificates";
import MeetOurTeam from "@/components/about/MeetOurTeam";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhoWeAre from "@/components/about/WhoWeAre";
import HeroNavigation from "@/components/shared/HeroNavigation";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <WhoWeAre />
      <WhatWeDo />
      <MeetOurTeam />
      <Certificates />
    </div>
  );
}
