"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Years of experience",
  },
  {
    num: 5,
    text: "Project compeleted",
  },
  {
    num: 5,
    text: "Technologies master",
  },
  {
    num: 200,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between flex-wrap mx-auto">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-5 text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
