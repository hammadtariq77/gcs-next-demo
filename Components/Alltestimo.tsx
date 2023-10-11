import React from "react";
import Testimonial from "@/Components/Testimonial";

const Alltestimo = () => {
  const data = [
    {
      img: "https://placehold.co/100x100/brown/white",
      heading:
        "ntities were described in the previous heloo iugsduiy iugsudg uiqdiusg iudisg oiwh9owuie ioqiheoui oweihfoieh woiehf9owuieh chapte",
      name: "hammad",
      post: "ceo and founder",
    },
    {
      img: "https://placehold.co/100x100/black/white",
      heading:
        "ntities were described in the previous heloo iugsduiy iugsudg uiqdiusg iudisg oiwh9owuie ioqiheoui oweihfoieh woiehf9owuieh chapte",
      name: "sabtain",
      post: "certified mochii",
    },
    {
      img: "https://placehold.co/100x100/blue/white",
      heading:
        "ntities were described in the previous heloo iugsduiy iugsudg uiqdiusg iudisg oiwh9owuie ioqiheoui oweihfoieh woiehf9owuieh chapte",
      name: "mustafa",
      post: "gali ka chor",
    },
  ];
  return (
    <>
      <h1>hello</h1>

      {
      data.map((e) => {
        <Testimonial
          img={e.img}
          head={e.heading}
          post={e.post}
          name={e.name}
        />;
      })
      }
    </>
  );
};

export default Alltestimo;
